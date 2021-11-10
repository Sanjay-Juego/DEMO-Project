class ExamplePostmanInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      argument1: {
        name: "argument1",
        type: "number",
        description: "First argument",
        required: false,
        default: "10", //if argument1 is not passed, this value will be used
      },
      argument2: {
        name: "argument2",
        type: "string",
        description: "Second argument",
        required: true, //if argument2 is not passed, this  will throw an error as argument2 should not be empty
        default: "",
      },
    };

    return { ...param };
  }
}

module.exports = ExamplePostmanInitalize;
