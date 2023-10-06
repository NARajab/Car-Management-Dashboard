<h3 align="center">Car Management Dashboard</h3>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is to create a dashboard for car rental which includes several features, such as adding new car data, updating new car data and being able to delete car data.

Entity Relationship Diagram
![Diagram](public/images/diagram.png)

##Build With
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Mongoose](https://img.shields.io/badge/mongoose-%23808080.svg?style=for-the-badge&logo=mongoose&logoColor=8b0000)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<!-- GETTING STARTED -->

## Getting Started

To start developing this project, follow the steps below:

### Prerequisites

The first requirement before starting to develop this project is that you must first initialize npm using the method below

- npm
  ```sh
  npm init
  ```

### Installation

After initializing you have to do the installation below

1. Clone the repo
   ```sh
   git clone https://github.com/NARajab/Car-Management-Dashboard.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file then copy the variables from .env.example then paste them into file .env

4. Run the program with npm
   ```sh
   npm run dev
   ```
5. Open a browser and enter localhost:3000

### The APIs that can be opened in this challenge are as follows:

1. Dashboard Page

   ```api
   /dashboard (GET)
   ```

2. Create Car Page

   ```api
   /create (GET)
   ```

3. Edit Car Page

   ```api
   /edit/:id (GET)
   ```

4. Create Car

   ```api
   /car/add (POST)
   ```

5. Edit Car

   ```api
   /car/update/:id (POST)
   ```

6. Delete Car
   ```
   /car/delete/:id (GET)
   ```
