
class ExampleMongoUpdateUserDetailsInitalize extends baseInitialize {

  constructor() {
    super();
    this.pkgInitializer =  {};
    this.pkgInitializer.isSecured = false; // values: true/false
    this.pkgInitializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "user_id": {
        "name": "user_id",
        "type": "number",
        "description": "user id",
        "required": true,
        "default": ""
      },
      "updated_user_name": {
        "name": "updated_user_name",
        "type": "string",
        "description": "user name going to update",
        "required": true,
        "default": ""
      },
    };

    return { ...param };
  }
}

module.exports = ExampleMongoUpdateUserDetailsInitalize;