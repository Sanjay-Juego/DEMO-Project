
class ExampleStrictEncryptionInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_name": {
        "name": "user_name",
        "type": "string",
        "description": "name of user",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleStrictEncryptionInitalize;