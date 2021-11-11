class ExamplePostmanInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      x: {
        name: "x",
        type: "number",
        description: "First argument",
        required: false,
        default: "10", //if x is not passed, this value will be used
      },
      y: {
        name: "y",
        type: "string",
        description: "Second argument",
        required: true, //if y is not passed, this  will throw an error as argument2 should not be empty
        default: "hai",
      },
    };

    return { ...param };
  }
}

module.exports = ExamplePostmanInitalize;
