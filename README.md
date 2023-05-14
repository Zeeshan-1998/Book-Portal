# Getting Started with Book Portal

To setup for this, first you go to destination/folder in which you want to then open git bash and type git clone https://github.com/Zeeshan-1998/Book-Portal.git

After cloning open Book-Portal Folder in Visual Studio Code then go to terminal and type npm install and wait for the packages to install for frontend

Then open the new terminal and type cd Backend and type npm install and wait for packages to install

After this in Visual Studio Code go to backend folder and open index.js file and add your username and password in Database connection to connect backend with your PostgresSql database


After installing all packages and setting up backend Open PostgresSQL terminal or pg-admin GUI and create database named bookportal

Then in that database create a table named book with following entities:

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  no_of_pages INTEGER NOT NULL,
  published_at DATE NOT NULL
);

After setting up everything just to back to terminals in Visual Studio Code:

## For Frontend

In the project directory, you can run:

### `npm start`

## For Backend

In the project directory, you can run:

### `node index.js`

Frontend runs on http://localhost:3000

and Backend runs on http://localhost:5000
