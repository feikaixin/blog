const getId = params => JSON.stringify(params);


class Cache {
  constructor({isOpen, maxAge}) {
    this.isOpen = isOpen;
    this.maxAge = maxAge;
  }

  cache(apiFun) {
    const cache = {};
    
  }
}

module.exports = Cache;