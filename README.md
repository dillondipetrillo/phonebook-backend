# Phonebook Backend

This is a simple Node.js + Express backend for a phonebook application.  
It provides a RESTful API for managing persons with names and phone numbers.

---

## 📂 Project Structure

- **index.js** – Main application file (Express server, routes, and logic).
- **package.json** – Project metadata, dependencies, and scripts.

---

## 🚀 Features

- List all persons in the phonebook
- View a single person by ID
- Add a new person (with validation for required fields and unique names)
- Delete a person by ID
- Info endpoint that shows the number of persons and the current date
- Request logging with Morgan, including POST request body
- Cross-Origin Resource Sharing (CORS) enabled

---

## 🔧 Tech Stack

- Express – Web framework
- Morgan – HTTP request logger
- CORS – Cross-origin resource sharing

---

## 📜 API Endpoints

### Get all persons
GET /api/persons  
Returns an array of all persons.

### Get info
GET /info  
Returns total number of persons and the current date.

### Get a person by ID
GET /api/persons/:id  
Returns a single person by ID.

### Delete a person
DELETE /api/persons/:id  
Deletes a person by ID. Returns 204 No Content if successful.

### Add a new person
POST /api/persons  
Content-Type: application/json

{
  "name": "New Person",
  "number": "123-4567890"
}

Validations:
- name is required
- number is required
- name must be unique

Error response:
{ "error": "name must be unique" }

---

## 🖥️ Development

Install dependencies:
npm install

Start server:
npm start

Start in development mode (auto-reload):
npm run dev

Server will run at:  
http://localhost:3001

---

## 🌐 Deployment

This project is deployed on Render:  
https://phonebook-backend-d8zx.onrender.com/api/persons

---

## 👤 Author

Dillon Dipetrillo