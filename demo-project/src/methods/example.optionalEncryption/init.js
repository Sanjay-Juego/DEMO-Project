
class ExampleOptionalEncryptionInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "name": {
        "name": "user_name",
        "type": "string",
        "description": "name of user sent in GET request from Client/Browser side",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleOptionalEncryptionInitalize;