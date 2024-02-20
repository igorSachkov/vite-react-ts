import {IDummyRestModel} from '@models/dummy-rest-model.ts';
import {ICache} from '@models/cache-service-models.ts';
import {restPostService} from '@services/rest-service.ts';


/** #remark Сервис кеширования (Паттерн "Декоратор") */
export class CacheForRest<T, P> implements IDummyRestModel<T, P> {
  private readonly cache: ICache<T | P> = {};
  private readonly restService: IDummyRestModel<T, P>;

  constructor(restService: IDummyRestModel<T, P>) {
    this.restService = restService;
  }

  public async getAll(limit?: number, skip?: number): Promise<T> {
    const requestCacheKey = `getAll${limit}_${skip}`;
    if (this.isCacheHave(requestCacheKey)) {
      return new Promise((resolve) => {
        resolve(this.cache[requestCacheKey] as T);
      });
    } else {
      const answer = await this.restService.getAll(limit, skip);
      this.setCache(requestCacheKey, answer);
      return new Promise(resolve => {
        resolve(answer);
      });

    }
  }

  public async getItem(itemNum: string | number): Promise<P> {
    const requestCacheKey = `getItem${itemNum}`;
    console.warn(requestCacheKey);

    if (this.isCacheHave(requestCacheKey)) {
      return new Promise((resolve) => {
        resolve(this.cache[requestCacheKey] as P);
      });
    } else {
      const answer = await this.restService.getItem(itemNum);
      this.setCache(requestCacheKey, answer);
      return new Promise(resolve => {
        resolve(answer);
      });

    }
  }

  public isCacheHave(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.cache, key);
  }

  private setCache(key: string, value: T | P): void {
    this.cache[key] = value;
  }

}

const cachedRestPostService = new CacheForRest(restPostService);
export {cachedRestPostService};
