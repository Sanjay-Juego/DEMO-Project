class ExampleArgumentsInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      argument1: {
        name: "x", // expecting argument with the same name from client side
        type: "number", // number,string and file are the available types
        description: "First argument",
        required: false,
        default: "10", // if argument x is not passed, this value will be used
      },
      argument2: {
        name: "y",
        type: "string",
        description: "Second argument",
        required: true, // if argument2 is not passed, this  will throw an error as argument2 should not be empty
        default: "hai",
      },
    };

    return { ...param };
  }
}

module.exports = ExampleArgumentsInitalize;
