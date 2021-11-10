class ExampleAuthenticationJwtSqlAction extends baseAction {
  async executeMethod() {
    /*
    AUTHENTICATION USING JWT_SQL EXAMPLE

    Prerequisites:
    1. Before trying this, make sure that you have tried SQL-CURD examples.
    2. In njs2-demo-database, create a table named "jwt_users" with following columns:
        user_id: int(11) PRIMARY KEY,
        username: varchar(255),
        access_token: varchar(255),
    3. Add a user in the table with following details:
        user_id: 123,
        username: "user123",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsImlhdCI6MTYzNjQ2MDU5Nn0._ucsDMjB1CEagqtynRHCspxHsMVPCUJYvS6xG7vD5-I"

    Steps:
    1. For this example, In config/config.json, set the following:
        AUTH_MODE: JWT_SQL
        JWT_SECRET: "my_secret_key"
        DB_TABLE_NAME: "jwt_users"
    2. In init.js, set the following:
        this.pkgInitializer.isSecured = true
    3. Pass the access_token in request header which is given in prerequisites.
    */


    //In Following example JWT_SQL decrypts the access_token and get user_id which is specified in JWT_ID_KEY (in config/config.json).
    //Then search for matching user_id and access_token in sql table which is specified in DB_TABLE_NAME.
    //Then it returns entire user details in userObj.

    let { userObj } = this;

    this.setResponse("SUCCESS");
    return {userObj};
  }
}
module.exports = ExampleAuthenticationJwtSqlAction;
