# Automated-Vehicle-API-Simulation

# Vehicle Telemetry API

This is a simple backend API that mimics vehicle telemetry output with static and dynamic endpoints.

## Technologies

- Node.js
- Express.js
- REST API
- JavaScript

## Setup 

1. Clone the repository or copy the project files.

2. Install dependencies:

```bash
npm install


Test API
npm test

File structure in project
telemetry-api/
├── node_modules/            # Installed dependencies
├── routes/
│   └── telemetry.js         # Telemetry routes (static & dynamic endpoints)
├── tests/
│   └── telemetry.test.js    # Jest + Supertest API tests
├── package.json             # Project metadata & scripts (includes jest)
├── package-lock.json        # Exact dependency versions
└── server.js                # Main Express server entry point
