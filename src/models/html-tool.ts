  /***
   * HTML Element class and helper
   **/
  export default class HtmlTool {



    /**
   * Creates a string that can be used for dynamic id attributes
   * Example: 
   * @returns {string}
   */
    static generateId() {
      return (Math.random().toString(16) + '000000000').substr(2, 8);
    }



  }
