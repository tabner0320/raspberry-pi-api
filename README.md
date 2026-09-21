# Raspberry Pi API

A REST API built with **Node.js** and **Express** to demonstrate backend development for Raspberry Pi-style device control.

The project currently uses a **mock GPIO service**, allowing the API to simulate turning an LED on and off without requiring physical Raspberry Pi hardware.

## Features

- RESTful API architecture
- JSON request and response handling
- Modular route, controller, and service structure
- Mock GPIO / LED state management
- CORS support
- LED status tracking
- Easy local development without Raspberry Pi hardware

## Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Language | JavaScript |
| API Format | JSON |
| Cross-Origin Support | CORS |
| Version Control | Git & GitHub |

## Project Structure

```text
raspberry-pi-api/
├── controllers/
│   └── gpioController.js
├── routes/
│   └── gpioRoutes.js
├── services/
│   └── gpioService.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Architecture

The application separates responsibilities into routes, controllers, and services.

```text
HTTP Request
     ↓
GPIO Route
     ↓
GPIO Controller
     ↓
GPIO Service
     ↓
Mock LED State
```

### Routes

`gpioRoutes.js` defines the API endpoints and connects incoming HTTP requests to the appropriate controller functions.

### Controllers

`gpioController.js` handles requests and responses and calls the GPIO service.

### Services

`gpioService.js` contains the GPIO logic. The current implementation stores the LED state in memory and simulates GPIO operations.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Confirms the API is running |
| `GET` | `/api/gpio/status` | Gets the current LED status |
| `POST` | `/api/gpio/on` | Turns the mock LED on |
| `POST` | `/api/gpio/off` | Turns the mock LED off |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tabner0320/raspberry-pi-api.git
cd raspberry-pi-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the API

```bash
npm start
```

The server runs on:

```text
http://localhost:3000
```

You should see:

```text
Server running on port 3000
```

## Testing the API

### Check API

```bash
curl http://localhost:3000/
```

Response:

```text
Raspberry Pi API is running
```

### Check LED Status

```bash
curl http://localhost:3000/api/gpio/status
```

Example response:

```json
{
  "status": "OFF"
}
```

### Turn LED On

```bash
curl -X POST http://localhost:3000/api/gpio/on
```

Response:

```json
{
  "status": "ON"
}
```

### Turn LED Off

```bash
curl -X POST http://localhost:3000/api/gpio/off
```

Response:

```json
{
  "status": "OFF"
}
```

## Mock GPIO Implementation

The current service uses an in-memory variable to simulate an LED:

```javascript
let ledStatus = "OFF";
```

Turning the LED on changes the value to `"ON"`, while turning it off changes it back to `"OFF"`.

This allows the API architecture to be developed and tested on a regular computer without requiring Raspberry Pi hardware.

Because the state is stored in memory, it resets to `"OFF"` whenever the server restarts.

## Future Improvements

Potential improvements include:

- Connect the API to physical Raspberry Pi GPIO pins
- Support multiple GPIO pins and devices
- Add request validation and centralized error handling
- Move the server port into environment configuration
- Add automated API tests
- Add device and sensor endpoints
- Add API documentation with Swagger/OpenAPI
- Add authentication for device-control endpoints

## What This Project Demonstrates

This project demonstrates:

- Building REST API endpoints with Express
- Organizing a Node.js backend using routes, controllers, and services
- Working with HTTP `GET` and `POST` requests
- Returning JSON responses
- Managing application state through a service layer
- Testing API endpoints with `curl`
- Using npm for dependency management
- Using Git and GitHub for version control

## Author

**Theo Abner**

Built as a backend development project exploring REST APIs, Node.js, Express, and Raspberry Pi-style device control.