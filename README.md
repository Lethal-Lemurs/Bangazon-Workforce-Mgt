# Bangazon-Workforce-Mgt

Is an application for managing (add or edit) employees and departments in the Bangazon Corporation. 

# Installing Core Technologies

## Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/download) is Microsoft's cross-platform editor that we'll be using during orientation for writing JavaScript and building Node applications. Make sure you add the [JavaScript extension](https://code.visualstudio.com/Docs/languages/javascript) immediately after installation completes.

In your config.json file add your current user and the password you use to access that user with psql.

Not doing this causes the following error.
  >Loaded configuration file "config/config.json".
  Using environment "development".
  sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html#operators node_modules/sequelize/lib/sequelize.js:236:13

  ### Install Node.js

https://nodejs.org/en/docs/guides/getting-started-guide/

  1. Click the above link to download Node.  
  https://nodejs.org/en/download/
  2. Make a directory for your app: mkdir HelloWorld
  3. Move to the newly created directory: cd HelloWorld
  4. Create a new file called app.js: 
  5. Paste in the code form the example link at the top of the instructions.
  6. Run the app: node app.js
  7. Navigate to http://localhost:8000/api/v1
  8. You should see your 'Hello World' message.

## Linux

### Install Node.js
  It is recommended that you install node via your package manager. The rest of the project is exactly the same as Windows and macOS.
  ## For Ubuntu or Debian Linux Users

```
sudo apt install nodejs
```
## For Fedora Linux Users (Redhat Linux Users: replace dnf with yum)

```
sudo dnf install nodejs
```

### Review Node Documentation

https://nodejs.org/en/docs/

### Installing Sequelize

For all types of machines use the following command to install Sequelize CLI

```npm install sequelize cli -g
```

## Installing PostGres

For all types of machines use the following command to install Postgres

```npm install pg -g
```

  >ERROR: password authentication failed for user "postgres"

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

### Using postgres commands

Be sure whenever changing branches or before pulling branches to Drop Tables

THIS DROPS ALL TABLES
```
sequelize db:migrate:undo:all
```

Use the following command to migrate all tables after dropping said tables.

```
sequelize db:migrate
```

Use the following command to seed data into tables. Do this command after the tables have been migrated

```
sequelize db:migrate:seed:all
```

### Side Note

When editing employees be sure to include a start date. This will effect the application if not included. A fix is currently being worked on.
