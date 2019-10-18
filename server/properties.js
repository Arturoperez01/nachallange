const mysqlConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"    
}

const noSqlConfig = {db_Url: 'localhost:27017/challange_db',
}
const config = {
    publicPath: '../client/dist',
    port: 8000,
    tokenSecret: 'notasecret',
    api: '/api'
}

module.exports = {mysqlConfig , noSqlConfig, config}; 

/*
module.exports = {
	db_Url: 'localhost:27017/challange_db',
    publicPath: '../client/dist',
	port: 8000,
    tokenSecret: 'notasecret',
    api: '/api'
}
//*/