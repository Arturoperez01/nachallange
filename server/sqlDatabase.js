
import properties from "./properties.js";

import mysql from 'mysql';
//var mysql = require('mysql');
import UserModel from "./models/sqlUserModel"
import { userInfo } from "os";

class sqlDatabase {
    constructor() {}

    async init() {
        await this.authenticate();

        console.log("Mysql connected at: " + properties.mysqlConfig.host);
            
        // Start Init Models
        UserModel.init();
        // End Init Models
      }
      
    async authenticate() {
        console.log("Authenticating to the sql databases...");
        
        try {
            
        this.dbConnection = await mysql.createConnection(properties.mysqlConfig);
        /*
        this.dbConnection = await mongoose.connect(
            "mongodb://" + properties.db_Url,
            { useNewUrlParser: true }
        );
        //*/
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

export default new sqlDatabase();