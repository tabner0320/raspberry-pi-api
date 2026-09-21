# Raspberry Pi API

A REST API built with **Node.js** and **Express** to demonstrate backend development for Raspberry Pi-style device control.

The project currently uses a **mock GPIO service**, allowing the API to simulate turning an LED on and off without requiring physical Raspberry Pi hardware.

## Features

- RESTful API architecture
- JSON request and response handling
- Modular route, controller, and service structure
- Mock GPIO / LED state management
- CORS support
- Simple status endpoint
- Easy local development with Node.js

## Tech Stack

- Node.js
- Express.js
- JavaScript
- CORS
- Git & GitHub

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