
// Express
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import path from "path";

// Properties
import properties from "./properties";

// Security
import cors from "cors";
import helmet from "helmet";

// Controllers

// Start Import Controllers

// Database
import Database from "./Database";

// Controllers
import UserController     from "./controllers/UserController";
//*/
// End Import Controllers


class Server {
  constructor() {
    this.app = express();
  }

  /**
   * Start the server
   * @returns {Promise<void>}
   */
  async init() {

    // Start Init Database
		Database.init();
 // End Init Database

    // Add parser
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // Securitiy
    this.app.use(helmet());
    this.app.use(cors());

    // Redirect frontend
    this.app.use("*", (req, res, next) => {
      if (req.originalUrl) {
        let url = req.originalUrl;
        if (!url.startsWith("/api/") && url.indexOf(".") == -1) {
          res
            .status(200)
            .sendFile(
              path.resolve(__dirname + "//..//client//dist//index.html")
            );
        } else {
          next();
        }
      } else {
        next();
      }
    });
    
    // Start App Server
    const server = http.Server(this.app);
    this.app.use(express.static(properties.publicPath));

    await server.listen(properties.port);
    console.log("Server started on port " + properties.port);

    // Import controllers
    const router = express.Router();

    // Start Init Controllers
    UserController.init(router);
    
		 // End Init Controllers

    this.app.use("/", router);
  }
}

export default new Server();
