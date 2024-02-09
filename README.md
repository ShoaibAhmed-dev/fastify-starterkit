
# Fastify CRUD Application with Knex.js

This is a simple CRUD (Create, Read, Update, Delete) application built with Fastify and Knex.js. It provides a RESTful API to perform CRUD operations on a user database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.
- PostgreSQL database installed and running.
- Understanding of JavaScript, Fastify, and Knex.js.

## Installation

1. Clone the repository:

2. Navigate to the project directory:

```bash
cd fastify-starterkit
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

Create a `.env` file in the root directory of the project and configure your database connection settings:

```
DB_CLIENT=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_SSL=false
PORT=3000
```

## Usage

1. Run the application:

```bash
npm start
```

2. Access the API:

The API will be available at `http://localhost:3000/api/v1`.

## Endpoints

- `GET /api/v1/users`: Retrieve all users.
- `GET /api/v1/users/:id`: Retrieve a specific user by ID.
- `POST /api/v1/users`: Create a new user.
- `PUT /api/v1/users/:id`: Update an existing user.
- `DELETE /api/v1/users/:id`: Delete a user by ID.

## Project Structure

The project structure is organized as follows:

- `config`: Contains configuration files (e.g., database configuration).
- `controllers`: Contains controller functions for handling HTTP requests.
- `constant`: Contains Constant for application.
- `models`: Contains model classes for database interaction.
- `routes`: Contains route definitions.
- `services`: Contains services | The logical file container.
- `main.js`: Main entry point of the application.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or features you'd like to see in the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
