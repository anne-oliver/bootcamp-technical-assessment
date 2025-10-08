# ☕️ Expresso

A full-stack recipe management app built during a one-day solo sprint. Users can view, add, delete, and favorite recipes with an admin panel and live view counts.

## Tech Stack
- Frontend: React · Webpack · Babel
- Backend: Node.js · Express
- Database: MongoDB (Mongoose models)
- Testing: Jest (unit tests for parseContent)
- Utilities: dotenv · date-fns

## Architecture
- Client / Server separation with REST API routes:
/recipes, /recipes/:id, /recipes/:id/fav, DELETE /recipes/:id
- Mongoose models define schema and persistence
- Auth middleware checks an Auth header against .env secret
- Fully promise-based async flow from React → Express → MongoDB, with error handling at each layer

## Assessment Context:
Built as a timed full-stack challenge to demonstrate:
- Front end / back end integration
- Asynchronous data flow design
- Schema-driven persistence with validation
