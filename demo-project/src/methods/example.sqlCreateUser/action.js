class ExampleSqlCreateUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL CREATE USER EXAMPLE

    Prerequisites:
    1. Make sure that you have mysql installed on your machine. 
    2. Install @njs2-sql package using npm (npm i @njs2/sql).
    3. Make sure that you have provided the correct SQL_DB_USER and SQL_DB_PASSWORD details to connect the database in config/config.json.
    4. Create a database named 'njs2-demo-database' in your mysql.
    5. In njs2-demo-database database, create a table named 'user' with following columns:
        user_id (int)
        user_name (varchar)
        gender (varchar)

    Steps:
    1. To understand userLib, read sqlLib/user.lib.js
    2. Run "njs2 run" command in terminal.
    3. Pass following arguments from Browser/Postman:
      * user_id
      * user_name
      * gender
    4. After running this example check your database.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_id, user_name, gender } = this;

    let new_user = {
      user_id,
      user_name,
      gender,
    };

    await userLib.create(new_user);

    this.setResponse("SUCCESS");
    return {new_user};
  }
}
module.exports = ExampleSqlCreateUserAction;