# Bangazon-Workforce-Mgt

## Linux
In your config.json file add your current user and the password you use to access that user with psql.

Not doing this causes the following error.
  >Loaded configuration file "config/config.json".
  Using environment "development".
  sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:236:13

  >ERROR: password authentication failed for user "user"

Example :
```javascript
"development": {
    "username": "postgres",
    "password": "pass",
    "database": "bangazon_workforce",
    "host": "127.0.0.1",
    "dialect": "postgres"
    }
```
If it still fails, make sure the following command works.
```bash 
psql -h localhost -U postgres
```
