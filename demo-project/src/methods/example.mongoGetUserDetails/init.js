class ExampleMongoGetUserDetailsInitalize extends baseInitialize {
  constructor() {
    super();
    this.pkgInitializer = {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ["GET"]; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      user_id: {
        name: "user_id",
        type: "number",
        description: "user id",
        required: true,
        default: "",
      },
    };

    return { ...param };
  }
}

module.exports = ExampleMongoGetUserDetailsInitalize;
