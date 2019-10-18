
import Properties from "../properties";
import UserModel from "../models/UserModel";

const UserController = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/user`;
    router.post(baseUrl + "", UserController.create);
    router.delete(baseUrl + "/:id", UserController.delete);
    router.get(baseUrl + "/:id", UserController.get);
    router.get(baseUrl + "", UserController.list);
    router.post(baseUrl + "/:id", UserController.update);
  },


  // CRUD METHODS

  
  /**
  * UserModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await UserModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * UserModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await UserModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * UserModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id 
  *
  */
  get: async (req, res) => {
    try {
      const result = await UserModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * UserModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await UserModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * UserModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await UserModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  

};

export default UserController;
