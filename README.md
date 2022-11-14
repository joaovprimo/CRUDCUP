<h1> CRUDCUP </h1>
<p>Beck-end for CRUDCUP, a bet application.</p>

<h2>About</h2>
<p>CRUDCUP is an web application to bet in world cup games. This basic app was created to apply CRUD operations, using TypeScript and PostgreSQL. </p>

<h3> How to run </h3>
<p>1- Clone this repository</p>
<p>2- Install all dependencies:</p>

```bash
npm i
```
<p>3- Create a PostgreSQL database</p>
<p>4- Execute:</p>

```bash
sudo -i -u postgres
```
 <p>5- Go to CRUDCUP root directory</p>
 <p>6- Execute:</p>
 
 ```bash
psql db_name < dump.sql
```
 <p>7- Configure the .env file following the .env.example file pattern</p>
 <p>8- Open the terminal on CRUDCUP root directory and run the start script </p>
 
 ```bash
npm start
```
<p>Now your app is ready to run locally!</p>
