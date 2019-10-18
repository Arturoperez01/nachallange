
--------------
### CONTACT
--------------
Name:  ARTURO PEREZ
email: arturoperez001@gmail.com
Telephone: 974677898

*note: If you encounter any trouble running this proyect, do not hesitate to contact me.

--------------
### REQUIREMENTS
--------------

-nodejs
-angular 7
-mysql

--------------
### START APPLICATION
--------------

To start the application you need to set the configurations for the database in the properties file, however you also can use
the default settings as shown below:

    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"  

*note: You would need to create a new database for the project, the default database is mydb.

After the database is set next you need is to install the dependencies, for this you must open a terminal in this folder and type:

``` 
$ npm install

``` 

Once the dependencies are installed just run the app with the below command.
```
$ npm start

```

The user table would be generated automatically. Next go to http://localhost:8000 in your webbrowser.

--------------
### CONFIGURE
--------------

Set bd properties in:
* `server/properties.js`


