const jwt = require('jsonwebtoken') //external package for create access_token
const { v4 } = require('uuid') //external npm package for create random user_id

class ExampleJwtAuthenticationAction extends baseAction {

  async executeMethod() {
    //NOTE: Before trying this, make sure that you have tried SQL-CRUD (example/sqlCrud).
    //NOTE: for this AUTH_MODE should be set to JWT in config.
    //NOTE: In init.js , this.pkgInitializer.isSecured should be set to true in order to use JwtAuthentication.
    //NOTE: JWT won't check whether access_token stored in Database or not. For Checking access_token in database, you have to try JWT_SQL.

    //In Following example JWT decrypts the access_token and returns userObj, which includes field which is specified in JWT_ID _KEY.

    let { userObj } = this;
    const [userLib] = AutoLoad.loadLibray('sqlLib', ['user']);

    // //manually checking the for user in database.
    const user = await userLib.getUserDetails(userObj.user_id)

    if (!user) {

      let newUser = {
        user_id: v4(),
        user_name: "user " + v4(),
        gender: "male",
      }

      await userLib.create(newUser)

      this.setResponse("SUCCESS")
      return (await jwt.sign(newUser, GLB.JWT_SECRET)) //GLB represents global (global/constants.js). Here signing with entire object which has user_id property
    }
    else {
      this.setResponse("SUCCESS")
      return user;
    }


  };

}
module.exports = ExampleJwtAuthenticationAction;