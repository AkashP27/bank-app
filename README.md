<h1>Bank App</h1>
    
BankApp is a service-based bank application where the customers can get the various details regarding their bank accounts. It is developed using Spring boot and Angular application along with MySql database

- Spring boot Web application exposes some REST API endpoints to get the customer account details. Secured endpoints can be accessed only if JWT is provided. From security perspective, Spring Security 6 is used

- Angular application uses the exposed API's to communicate with backend. In order to access the application, customer must login using their credentials. All the requests coming from angular to secured endpoints in spring-backend have a access token (JWT) that is generated when the customer logged in.

## Requirements

For development, you will need JDK, Node.js, MySql and a node global package installed in your environment.

## Install

#### Step 1: Clone the repository

```bash
git clone https://github.com/AkashP27/bank-app.git
```

#### Step 2: Run MySql scripts

- Create a database and run scripts provided in src/main/resources/bank-app.sql

#### Step 3: Navigate to backend

```bash
cd backend/bankapp
```

#### Step 4: Build and run the app using maven

#### Step 5: Install Frontend Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
cd UI/bankapp
```

```bash
npm install
```

This command will navigate to the frontend directory within the project and install all the required packages for the angular.

#### Step 9: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
ng serve -o
```

This command will start the frontend server, and you'll be able to access the website on localhost:4200 in your web browser.

### You can test the API in postman

[Set the postman environment from here](https://www.postman.com/akash-api/workspace/akash-public/environment/16112169-8686f9ff-90bd-4624-9292-e6dedb44f4bc?action=share&creator=16112169&active-environment=16112169-8686f9ff-90bd-4624-9292-e6dedb44f4bc)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16112169-0bc2da1c-0822-4033-81be-f869945a0083?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D16112169-0bc2da1c-0822-4033-81be-f869945a0083%26entityType%3Dcollection%26workspaceId%3D9fe04cc0-53c6-4f02-842b-8fe10274477e)
