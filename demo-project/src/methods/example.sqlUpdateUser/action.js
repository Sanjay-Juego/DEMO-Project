class ExampleSqlUpdateUserAction extends baseAction {
  async executeMethod() {
    /*
    SQL UPDATE USER EXAMPLE

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
    3. Pass following arguments:
      * user_id
      * user_name (for update)
      * gender (for update)
    4. After running this example in postman/browser, check your database.

    */

    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    let { user_name, gender, user_id } = this;

    let user = await userLib.getUserDetails(user_id);

    let updateDetails = {
      user_name,
      gender,
    };

    if (user) {
      await userLib.updateUsers(user_id, updateDetails);
      this.setResponse("SUCCESS");
      return { updateDetails };
    } else {
      this.setResponse("INVALID_USER");
      return {};
    }
  }
}
module.exports = ExampleSqlUpdateUserAction;
