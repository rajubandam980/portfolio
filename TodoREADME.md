# Todo Application

A simple Todo application built using Angular for the frontend and Spring Boot for the backend. The application allows users to manage their tasks, including adding, editing, and deleting Todo items.

## Features
- **Create Todo Items**: Add new tasks with descriptions and target dates.
- **Update Todo Items**: Edit existing tasks.
- **Delete Todo Items**: Remove tasks from your list.
- **Responsive Design**: The UI adjusts to different screen sizes.

## Tech Stack
- **Frontend**: Angular 17
- **Backend**: Spring Boot
- **Database**: H2 (for development)
- **UI Framework**: Bootstrap 5

## Screenshots
### Home Screen (Todo List)
![Home Screen](images/home_screen.png)

### Add Todo Screen
![Add Todo](images/add_todo_screen.png)

### Update Todo Screen
![Update Todo](images/update_todo_screen.png)

## Installation

### Prerequisites
- Java 11 or higher
- Node.js (version 14.x or higher)
- npm (Node Package Manager)
- Angular CLI (latest version)

### Backend (Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-application.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd todo-application/backend
    ```
3. Build and run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```
   This will start the Spring Boot backend server at `http://localhost:8080`.

### Frontend (Angular)
1. Install the required dependencies:
    ```bash
    cd todo-application/frontend
    npm install
    ```
2. Run the Angular application:
    ```bash
    ng serve
    ```
   This will start the Angular frontend server at `http://localhost:4200`.

### API Endpoints
- **GET** `/user/todos` - Fetch all Todo items.
- **POST** `/user/{username}/todos` - Create a new Todo item.
- **GET** `/user/{username}/todos/{id}` - Get a specific Todo item.
- **PUT** `/user/{username}/todos/{id}` - Update a specific Todo item.
- **DELETE** `/user/{username}/todos/{id}` - Delete a specific Todo item.

## Folder Structure
```bash
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
├── frontend/
│   ├── src/
│   ├── package.json
│   └── angular.json
└── README.md
