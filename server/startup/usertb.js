
import sqlDatabase from "../database";

const UserModel = {
  /**
   * Init  schema
   */
  init() {
    const db = sqlDatabase.getConnection();

    let createUser = `create table if not exists user(
        _id int primary key auto_increment,
        title varchar(255)not null,
        name varchar(255)not null,
        age int(11)not null
    )`;

    db.query(createUser, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
        else {
            console.log('User table created');
        }
    })
    
  }

};

export default UserModel;