/**
 * @global
 * @typedef {Object} EqualityComparer
 * @property {function(any, any):boolean} equals Method for checking two objects equality.
 * @property {function(any):number} getHashCode Method for calculating object hashcode.
 */

/**
 * @class
 */
class HashMap {
  /**
   * Create a HashMap.
   * @param {EqualityComparer} equalityComparer Comparer for an elements of the HashMap object.
   */
  constructor(equalityComparer) {
    this._equalityComparer = equalityComparer;
    this._data = new Map();
    this._size = 0;
  }

  /**
   * Property returns the number of elements in the HashMap object.
   * @returns {number} Number of elements in the HashMap object.
   */
  get size() {
    return this._size;
  }

  /**
   * Method returns a specified element from the HashMap object.
   * @param key The key of the element.
   * @returns Returns the element associated with the specified key or undefined if the key can't be found in the HashMap object.
   */
  get(key) {
    let bucket = this._data.get(this._equalityComparer.getHashCode(key));
    if (!bucket) return bucket;

    let pair = bucket.find(x => this._equalityComparer.equals(x[0], key));
    if (!pair) return pair;

    return pair[1];
  }

  /**
   * Method adds or updates an element with a specified key and value to the HashMap object.
   * @param key The key of the element.
   * @param value The value of the element.
   * @returns The HashMap object.
   */
  set(key, value) {
    let hashCode = this._equalityComparer.getHashCode(key);
    let bucket = this._data.get(hashCode);
    if (!bucket) {
      bucket = [];
      this._data.set(hashCode, bucket);
    }

    let pair = bucket.find(x => this._equalityComparer.equals(x[0], key));
    if (!pair) {
      bucket.push([key, value]);
      this._size++;
    } else pair[1] = value;

    return this;
  }

  /**
   * Method checks existence of the element with the specified key in the HashMap object.
   * @param key The key of the element.
   * @returns {boolean} Element existence in the HashMap object.
   */
  has(key) {
    return this.get(key) !== undefined;
  }

  /**
   * Method removes the element with the specified key from the HashMap object.
   * @param key The key of the element.
   * @returns {boolean} true if an element in the set HashMap object been removed successfully; otherwise false.
   */
  delete(key) {
    let bucket = this._data.get(this._equalityComparer.getHashCode(key));
    if (!bucket) return false;

    for (var i = 0; i < bucket.length && this._equalityComparer.equals(bucket[i][0], key) === false; i++);
    if (i === bucket.length) return false;

    bucket.splice(i, 1);
    this._size--;
    return true;
  }

  /**
   * Method removes all elements from the HashMap object.
   * @returns {undefined}
   */
  clear() {
    this._data.clear();
    this._size = 0;
  }

  /**
   * @callback foreachCallback
   * @memberof HashMap
   * @param key The key of the element.
   * @param value The value of the element.
   * @param map The HashMap object that's being traversed.
   * @returns {undefined}
   */

  /**
   * Method executes a provided function onece for each element in the HashMap object.
   * @param {foreachCallback} callbackfn The function executing for each element.
   * @returns {undefined}
   */
  forEach(callbackfn) {
    this._data.forEach(bucket => bucket.forEach(value => callbackfn(value[1], value[0], this)));
  }

  *_iterateElements(selector) {
    for (let bucket of this._data.values()) {
      for (let pair of bucket) {
        yield selector(pair);
      }
    }
  }

  /**
   * Method returns a new Iterator contains an array of [key, value] for each element of the HashMap object.
   * @returns {Iterable<[any, any]>} A new Iterator contains an array of [key, value] for each element of the HashMap object.
   */
  entries() {
    return this._iterateElements(pair => pair);
  }

  /**
   * Method returns a new Iterator contains keys for each element of the HashMap object.
   * @returns {Iterable<any>} A new Iterator contains values for each element of the HashMap object.
   */
  keys() {
    return this._iterateElements(pair => pair[0]);
  }

  /**
   * Method returns a new Iterator contains values for each element of the HashMap object.
   * @returns {Iterable<any>} A new Iterator contains values for each element of the HashMap object.
   */
  values() {
    return this._iterateElements(pair => pair[1]);
  }

  /**
   * Method returns a new Iterator contains an array of [key, value] for each element of the HashMap object.
   * @returns {Iterable<[any, any]>} A new Iterator contains an array of [key, value] for each element of the HashMap object.
   */
  [Symbol.iterator]() {
    return this.entries();
  }
}

module.exports = HashMap;
