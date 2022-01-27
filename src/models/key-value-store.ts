import IKeyValuePair from "../interfaces/i-key-value-pair";
import IKeyValueStore from "../interfaces/i-key-value-store";

/**A Store to keep unique key value pairs */
export default class KeyValueStore implements IKeyValueStore {
  private data: Map<any,any> = new Map();
  constructor() {

  }

  /**
   * Add new key value pair to collection
   * @param pair
   */
  add(pair: IKeyValuePair): void {
    this.data.set(pair.key, pair.value);
  }

  /**
   * Get key value pair by key
   * @param key
   */
  getByKey(key: any): IKeyValuePair {
    return this.data.get(key);
  }

  /**
   * Delete key value pair by key
   * @param key: delete by key
   */
  deleteOneByKey(key: any): boolean {
    return this.data.delete(key);
  }

  /** Delete all items in collection */
  deleteAll(): void {
    this.data.clear();
  }

  /**
   * Has key in the collection
   * @param key
   */
  hasKey(key: any): boolean {
    return this.data.has(key);
  }

  /** Size of collection */
  size(): number {
    return this.data.size;
  }

  /**
   * Print data
   * @param format: format data
   */
  toString(format: boolean): void {
    if (format) {
      console.table(this.data);
    } else {
      console.log(this.data.toString());
    }
  }

}
