class ExamplePostmanAction extends baseAction {
  async executeMethod() {
    /*
    POSTMAN USAGE EXAMPLE

    Prerequisites:
    1. Download Postman

    Steps:
    1. In Postman click on import -> select link tab -> paste http://localhost:3000/postman to import collection.
    2. Select demo-project from collection and click on example/postman API.
    3. Under the params section, add the following parameters:
      - argument1: 10
      - argument2: hello
    */

    let { argument1, argument2 } = this;

    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${argument1}, Second Argument=${argument2}`;
  }
}
module.exports = ExamplePostmanAction;
