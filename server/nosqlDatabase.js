
// Import Mongoose
import mongoose from "mongoose";

// Properties
import noSqlConfig from "./properties.js";

// Start Import Models

import UserModel from "./models/UserModel";
//*/
// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    console.log("MongoDB connected at: " + noSqlConfig.db_Url);

    // Start Init Models

		UserModel.init();
    // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    console.log("Authenticating to the databases...");
    try {
      this.dbConnection = await mongoose.connect(
        "mongodb://" + noSqlConfig.db_Url,
        { useNewUrlParser: true }
      );
    } catch (err) {
      console.log(`Failed connection to the DB: ${err.message}`);
      console.log(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection;
  }
}

export default new Database();
