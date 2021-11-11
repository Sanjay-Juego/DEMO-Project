class ExampleArgumentsAction extends baseAction {
  async executeMethod() {
    /*
    ARGUMENTS HANDLING EXAMPLE

    Steps:
    1. Go through init.js file to understand arguments setup for this action.
    2. To run this example go to terminal and enter njs2 run express.
    3. Goto browser and enter http://localhost:3000/example/arguments?x=10&y=hello
    
    */

    let { argument1, argument2 } = this;

    this.setResponse("SUCCESS");
    return `Arguments recieved. First Argument=${argument1}, Second Argument=${argument2}`;
  }
}
module.exports = ExampleArgumentsAction;
