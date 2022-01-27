import IKeyValuePair from "./i-key-value-pair";

/** Key Value Store Interface */
export default interface IKeyValueStore {
  add(pair: IKeyValuePair): void;
  getByKey(key: any): IKeyValuePair;
  deleteOneByKey(key: any): boolean;
  deleteAll(): void;
  hasKey(key: any): boolean;
  size(): number;
  toString(format: boolean): void;
}
