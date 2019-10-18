
import sqlDatabase from "../sqlDatabase";
import mongoose, { Schema } from "mongoose";


const UserModel = {
  /**
   * Init  schema
   */
  init() {
    const db = sqlDatabase.getConnection();

    /**
      * User
      */
    const userSchema = {
      title: {
        type: "String"
      },
      name: {
        type: "String"
      },
      age: {
        type: "Number", 
      },
    };

    db.query(this.createUser, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
        else {
            console.log('User table created');
        }
    })
    
    return userSchema;
  },

  
 
    /*
    setModel: model => {
        UserModel.model = model;
    },

    getModel: () => {
        return UserModel.model;
    },
    //*/
  // Start queries
    

  createUser : `create table if not exists user(
        _id int primary key auto_increment,
        title varchar(255)not null,
        name varchar(255)not null,
        age int(11)not null
    )`,
  // CRUD METHODS

  /**
  *   UserModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
      
    const sql = `INSERT INTO user (title, username, age) VALUES (${item.title}, ${item.username}, ${item.age})`;
    return db.query(sql, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
    })
    /*
    const obj = new UserModel.model(item);
    return await obj.save();
    //*/
  },
  
  /**
  * UserModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
      
    const sql = `DELETE FROM user WHERE id = ${id}`;
    return db.query(sql, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
    })
    //return await UserModel.model.findByIdAndRemove(id);
  },
  
  /**
  * UserModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    
    
    const sql = `SELECT * FROM user WHERE id = ${id}`;
    return await db.query(sql, function(err, results) {
        if (err) {
        console.log(err.message);
        }
    })
  },
  
  /** 
  * UserModel.list
  *   @description CRUD ACTION list
  *
  */

  list(callback) {
    const sql = `SELECT * FROM user`;
    sqlDatabase.getConnection().query(sql, function(err, results) {
            if (err) {
            console.log(err.message);
            callback(500,'Error trying to connect to db')
            }
            callback(results)
        }
        );
    
    
  },
  
  /** 
  * UserModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */

  async update(item) { 
    var sql = `UPDATE customers SET (title, username, age) VALUES (${item.title}, ${item.username}, ${item.age} WHERE id = ${id}`;

    return await db.query(sql, function(err, results) {
        if (err) {
        console.log(err.message);
        }
    })
  }
  //*/
};

export default UserModel;