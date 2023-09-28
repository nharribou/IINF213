# IINF213

## DevOps_Najib Web Application

**Description**

This is a Dockerized web application that consists of a frontend developed with React, a backend API using Express.js, and a MySQL database.

**Technologies Used**

- Docker
- Express.js
- MySQL
- React

**Getting Started**

To run this application locally, follow the instructions below.

**Prerequisites**

Before you begin, ensure you have the following installed:

* Docker: https://www.docker.com/get-started
* Docker Compose: https://docs.docker.com/compose/install/

**Installation**

1. Clone the repository:

```bash
git clone https://github.com/nharribou/IINF213.git
cd IINF213

docker-compose up 


This will download necessary images, build custom images for the server and web-app, and start the containers.

**Access the Application**

* Web Frontend: http://localhost:3000
* API Backend: http://localhost:5000

**Usage**

* The `server-app` directory contains the Express.js backend code.
* The `web-app` directory contains the React frontend code.
* The `database/init.sql` file initializes the MySQL database schema and data.

**Customization**

You can customize the application by:

* Modifying the React frontend code in the `web-app` directory.
* Customizing the Express.js backend API in the `server-app` directory.
* Adjusting MySQL database configurations in the `docker-compose.yml` file.

**License**

This project is licensed under the MIT License - see the `LICENSE` file for details.

