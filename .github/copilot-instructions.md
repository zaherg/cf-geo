# CF-Geo Repository Guidelines

This is a TypeScript-based Cloudflare Workers repository built with Hono.js framework. It is primarily responsible for returning geolocation information about visitors based on Cloudflare's network data. Please follow these guidelines when contributing:

## Code Standards

### Required Before Each Commit

-   Run `npm run format` before committing any changes to ensure proper code formatting
-   This will run Prettier on all TypeScript files to maintain consistent style
-   Ensure types are properly defined and used throughout the codebase

### Development Flow

-   Install dependencies: `npm install`
-   Local development: `npm run dev`
-   Build for production: `npm run build`
-   Deploy to Cloudflare: `npm run deploy`
-   Fix style: `npm run style:fix`

## Repository Structure

-   `src/`: Main application code
    -   `index.ts`: Entry point for the Cloudflare Worker
    -   `types.ts`: TypeScript type definitions for geolocation data
    -   `middleware/`: Hono middleware components
    -   `utils/`: Utility functions for processing geolocation data
-   `__test__/`: Unit and integration tests
-   `wrangler.jsonc`: Cloudflare Workers configuration
-   `.dev.vars`: Local environment variables (not committed to git)

## Key Guidelines

1. Follow TypeScript best practices and maintain strict typing
2. Use Hono.js idioms and patterns consistently
3. Keep the application lightweight - CF Workers have size constraints
4. Minimize external dependencies to reduce bundle size
5. Write unit tests for new functionality
6. Handle errors gracefully, considering the edge computing environment
7. Respect user privacy when handling geolocation data
8. Optimize for performance as this service may handle high request volumes

## Testing

-   All tests must be written using Vitest
-   Run tests with `npm run test`
-   Place test files in the `__test__/` directory following the naming pattern `*.test.ts`
-   Use `@cloudflare/vitest-pool-workers` for testing worker-specific functionality
-   Mock the Cloudflare `request.cf` object for geolocation testing
-   Write integration tests that validate the complete response structure
-   Aim for high test coverage, especially for critical geolocation parsing logic
-   Use the Vitest snapshot feature for testing complex JSON responses

## Working with Geolocation Data

-   All Cloudflare geolocation data is available via the `request.cf` object
-   Format response data consistently with the established JSON structure
-   Consider regional privacy regulations when exposing location data
-   Add appropriate caching headers where possible

## Deployment

-   Ensure you have proper Cloudflare credentials configured
-   Test locally with `npm run dev` before deploying
-   Use development environments for testing new features
-   CI/CD pipeline will automatically run tests on push to main branches
