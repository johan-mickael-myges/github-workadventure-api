# Workadventure for Developers

This project is a server-side application for Workadventure, designed specifically for developers. It's built with Node.js and Express, and uses GitHub's API to interact with repositories.

## Project Structure

- `src/`: Contains the source code of the application.
  - `index.js`: The entry point of the application.
  - `middlewares/`: Contains middleware functions for handling CORS, cache control, and HTTPS.
  - `routers/`: Contains the routes for the application, including routes for GitHub interactions.
  - `services/`: Contains services for interacting with GitHub and managing maps.
- `public/`: Contains public assets for the application.
- `certs/`: Contains SSL certificates for HTTPS.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env` and fill in your environment variables.
4. Run the server with `npm start`.

## Features

- CORS and cache control middleware for handling requests.
- HTTPS middleware for secure connections.
- GitHub routes for interacting with repositories.
- Map factory for managing map data.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)