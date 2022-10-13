class localStorageMock {
  constructor() {
    this.lStoreObj = {};
  }

  setItem(key, value) {
    this.lStoreObj[key] = value;
  }

  getItem(key) {
    return this.lStoreObj[key];
  }

  clear(key) {
    this.lStoreObj = {};
  }

  remove(key) {
    this.lStoreObj[key] = '';
  }

  getWholeItem() {
    return this.lStoreObj;
  }
} // We can create this object from where we import.

export default localStorageMock;