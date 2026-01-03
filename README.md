Project Overview

The Smart Contact Manager application allows users to add, view, and delete contact details.
Unlike the first project, this application supports database-level deletion, meaning records are permanently removed from MongoDB.

This project was developed to further strengthen MERN stack concepts and demonstrate backend data handling.

Features

• Add new contacts (Name, Email, Phone)
• View all contacts stored in the database
• Delete contacts permanently from database
• RESTful API using Express and Node.js
• MongoDB Atlas cloud database integration
• Clean and minimal user interface using CSS

Technology Stack

Frontend
• React.js
• Axios
• CSS

Backend
• Node.js
• Express.js
• MongoDB Atlas
• Mongoose

Project Folder Structure

smart-contact-manager

backend
• models
• Contact.js
• routes
• contactRoutes.js
• server.js
• .env

frontend
• src
• api.js
• App.js
• App.css
• index.js

.gitignore
README

Installation and Setup
Step 1: Clone the Repository

git clone https://github.com/your-username/smart-contact-manager.git

cd smart-contact-manager

Step 2: Backend Setup

cd backend
npm install

Create a .env file with the following details:

MONGO_URI = your_mongodb_atlas_connection_string
PORT = 5000

Run backend server:
node server.js

Step 3: Frontend Setup

cd frontend
npm install
npm start

The application will run on http://localhost:3000

API Endpoints

GET
/api/contacts
Fetches all contacts from the database

POST
/api/contacts
Adds a new contact to the database

DELETE
/api/contacts/:id
Deletes a contact permanently from the database

Key Learning Outcomes

• Understanding of full CRUD operations
• Database-level delete operations using MongoDB
• RESTful API design
• React state management
• Frontend–backend communication using Axios
• MongoDB Atlas cloud database handling


Future Enhancements

• Update contact details
• Authentication and authorization
• Search and filter contacts
• Pagination support
• Enhanced UI/UX
