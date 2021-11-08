
class ExampleJwt_sqlAuthenticationAction extends baseAction {

  async executeMethod() {
    //NOTE: Before trying this, make sure that you have tried SQL-CRUD (example/sqlCrud).
    //NOTE: for this AUTH_MODE should be set to JWT_SQL in config.
    //NOTE: In init.js , this.pkgInitializer.isSecured should be set to true in order to use JWT_SQL Authentication.
    //NOTE: JWT_SQL will check whether access_token stored in Database or not.

    //In Following example JWT_SQL decrypts the access_token and check for matching user_id in sql database.Then it returns entire user details in userObj.

    let { userObj } = this;
    
    this.setResponse('SUCCESS');
    return {userObj}; 
  };

}
module.exports = ExampleJwt_sqlAuthenticationAction;