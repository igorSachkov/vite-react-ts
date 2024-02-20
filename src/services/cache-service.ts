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
    const requestCacheKey = this.createKey(limit, skip);
    console.warn(requestCacheKey);
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

  public async getItem(itemNum: string): Promise<P> {
    const requestCacheKey = this.createKey(itemNum);
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

  private createKey(itemNum?: string): string;
  private createKey(limit?: number, skip?: number): string;
  private createKey(param1?: number | string | undefined, param2?: number | undefined): string {
    let generatedKey = '';

    if (typeof param1 === 'number') {
      generatedKey += `limit${param1}`;
      if (!(typeof param2 === 'number')) {
        return generatedKey;
      }
      generatedKey += `skip${param2}`;

    } else if (typeof param1 === 'string') {
      generatedKey += `item${param1}`;
    } else {
      generatedKey = 'default_key';
    }

    return generatedKey;
  }
}

const cachedRestPostService = new CacheForRest(restPostService);
export {cachedRestPostService};
