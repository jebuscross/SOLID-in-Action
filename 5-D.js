// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get(key) {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('data.com')
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet() {
    return this.localStorage.get('ls key')
  }
}

class Database {
  // constructor() {
    // this.fetch = new Fetch()
    // this.localStorage = new LocalStorage
  // }
  // 
  // getData() {
    // return this.fetch.request('data.com')
    // return this.localStorage.get('ls key')
  // }
  constructor (client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClient)

console.log(db.getData('rand'));
