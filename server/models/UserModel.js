import Database from "../Database";
import mongoose, { Schema } from "mongoose";


const UserModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * User
      */
    const userSchema = new mongoose.Schema({
      title: {
        type: "String"
      },
      name: {
        type: "String"
      },
      age: {
        type: "Number", 
      },
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    });

    UserModel.setModel(db.connection.model("User", userSchema));

    return userSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    UserModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return UserModel.model;
  },

  // Start queries
    

  // CRUD METHODS

  
  /**
  * UserModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new UserModel.model(item);
    return await obj.save();
  },
  
  /**
  * UserModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await UserModel.model.findByIdAndRemove(id);
  },
  
  /**
  * UserModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  async get(id) {
    return await UserModel.model.findOne({_id: id}).select("-password");
  },
  
  /**
  * UserModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await UserModel.model.find().select("-password");
  },
  
  /**
  * UserModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    delete item.password;

    return await UserModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  }
  
};

export default UserModel;