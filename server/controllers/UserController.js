
import Properties from "../properties";
import Database from "../database";

const UserController = {

    init: router => {
        const baseUrl = `${Properties.config.api}/user`;
        router.post(baseUrl + "", UserController.create);
        router.delete(baseUrl + "/:id", UserController.delete);
        router.get(baseUrl + "/:id", UserController.get);
        router.get(baseUrl + "", UserController.list);
        router.post(baseUrl + "/:id", UserController.update);
      },
    
    create: (req, res) => {
        const sql = `INSERT INTO user (title, name, age) VALUES ('${req.body.title}', '${req.body.name}', '${req.body.age}')`;
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('New user added')
            return res.json(results);
        })
    },
      
    update: (req, res) => {
        const sql = `UPDATE user SET title = '${req.body.title}', name = '${req.body.name}', age = '${req.body.age}' WHERE _id = '${req.params.id}'`;
        
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('User has been updated', results)
            return res.json(results);
        })
    },

    list: (req, res) => {
        
        const sql = `SELECT * FROM user`;

        Database.getConnection().query(sql, function(err, results) {
                if (err) {
                    return res.status(500).send(err);
                }
                console.log('results from user table', results)
                return res.json(results);
            }
        );
    },
    
    get: (req, res) => {
    
    
        const sql = `SELECT * FROM user WHERE _id = '${req.params.id}' LIMIT 1`;
        Database.getConnection().query(sql, function(err, results) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('User found ', results)
            return res.json(results[0]);
            
        })
    },
    delete: (req, res) => {
        const sql = `DELETE FROM user WHERE _id = ${req.params.id}`;
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('User has been eliminated ')
            return res.json(results[0]);
        })
    }

};

export default UserController;