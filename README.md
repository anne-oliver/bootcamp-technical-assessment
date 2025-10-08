# ☕️ Expresso

A full-stack recipe management app built during a one-day solo sprint. Users can view, add, delete, and favorite recipes with an admin panel and live view counts.

## Tech Stack
- Frontend: React · Webpack · Babel
- Backend: Node.js · Express
- Database: MongoDB - Mongoose models
- Testing: Jest - unit tests for parseContent

## Architecture
- REST API routes
- Mongoose models - define schema and persistence
- Auth middleware - checks Auth header against .env secret
- Custom input parser - normalizes user input (trimming, splitting, title-casing)
- Promise-based async flow - React → Express → MongoDB + error handling

## Assessment Context:
Timed full-stack challenge demonstrating:
- Front end / back end integration
- Asynchronous design
- Database persistence + validation
