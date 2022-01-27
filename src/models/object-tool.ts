export default class ObjectTool {

  /**
 * Get property value from Object
 * @param obj Object
 * @param prop Property Name
 */
  static getPropertyValueFromObject(obj, prop) {
    if (typeof obj === 'undefined') {
      return false;
    }
    var _index = prop.indexOf('.')
    if (_index > -1) {
      return this.getPropertyValueFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }
    return obj[prop];
  }
}
