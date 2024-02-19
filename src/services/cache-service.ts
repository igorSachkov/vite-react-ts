import {IDummyRestModel} from '@models/dummy-rest-model.ts';
import {ICache} from '@models/cache-service-models.ts';


/** #remark Сервис кеширования (Паттерн "Декоратор") */
export class CacheForRest<T> implements IDummyRestModel<T> {
  private readonly cache: ICache<T> = {};
  private readonly restService: IDummyRestModel<T>;

  constructor(restService: IDummyRestModel<T>) {
    this.restService = restService;
  }

  public async getAll(limit?: number, skip?: number): Promise<T> {
    const requestCacheKey = this.createKey(limit, skip);
    if (this.isCacheHave(requestCacheKey)) {
      return new Promise((resolve) => {
        resolve(this.cache[requestCacheKey]);
      });
    } else {
      const answer= await this.restService.getAll(limit, skip);
      this.setCache(requestCacheKey, answer);
      return new Promise(resolve => {
        resolve(answer);
      });

    }
  }

  public isCacheHave(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.cache, key);
  }

  private setCache(key: string, value: T): void {
    this.cache[key] = value;
  }

  private createKey(limit?: number, skip?: number): string {
    let key = '';
    if (typeof limit === 'number') {
      key += `limit${limit}`;
    }
    if (typeof skip === 'number') {
      key += `skip${skip}`;
    }
    if (!key) {
      key = 'default_key';
    }
    return key;
  }
}
