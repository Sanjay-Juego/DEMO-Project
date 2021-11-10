
class ExampleAuthenticationJwtAction extends baseAction {

  async executeMethod() {
    /*
    AUTHENTICATION USING JWT EXAMPLE

    Prerequisites:
    1. To install jsonwebtoken package: npm install jsonwebtoken --save
    2. To import: const jwt = require('jsonwebtoken');
    3. Consider the following example:
         jwt_secret = "my_secret_key"
         user_id = 123
    4. jwt.sign({ user_id }, jwt_secret) will return a token like this:
         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsImlhdCI6MTYzNjQ2MDU5Nn0._ucsDMjB1CEagqtynRHCspxHsMVPCUJYvS6xG7vD5-I
    
    Steps:  
    1. In config->config.json set AUTH_MODE: 'JWT' and JWT_SECRET: 'my_secret_key'.
    2. In init.js set this.pkgInitializer.isSecured: true
    3. Pass the token in the request header:
          access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsImlhdCI6MTYzNjQ2MDU5Nn0._ucsDMjB1CEagqtynRHCspxHsMVPCUJYvS6xG7vD5-I

    */

    //JWT decrypts the token and userObj holds the user_id as 123. The field user_id is specified in config->config.json as JWT_ID_KEY.
    let { userObj } = this;
    
    this.setResponse('SUCCESS');
    return {userObj};
  };

}
module.exports = ExampleAuthenticationJwtAction;