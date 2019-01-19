const getId = params => JSON.stringify(params);


class Cache {
  constructor({isOpen, maxAge}) {
    this.isOpen = isOpen;
    this.maxAge = maxAge;
  }

  cache(apiFun) {
    const cache = {};
    const invokeFun = (...params) => {
      if(!this.isOpen) {
        return apiFun(...params);
      }
      const id = getId(...params);
      let result = cache[id];
      if(!result){
        cache[id] = apiFun(...params).then((data) => {
          setTimeout(() => {
            cache[id] = null;
          }, this.maxAge || 3 * 1000 * 10);
          return data;
        }).catch((error) => {
          delete cache[id];
          throw error;
        });
        result = cache[id];
      }
      return result;
    }
    return invokeFun;
    
  }
  static createCache(options) {
    const newCache = new Cache(options);
    return newCache.cache.bind(newCache);
  }
}

module.exports = Cache;