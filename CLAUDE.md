# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Cloudflare Workers application built with Hono.js that provides IP geolocation information based on Cloudflare's network data. The app returns detailed location information including country, city, timezone, and full Cloudflare request metadata for incoming requests.

## Development Commands

-   `npm run dev` - Start local development server (port 3000)
-   `npm run build` - Build for production (dry run deployment to dist/)
-   `npm run deploy` - Deploy to Cloudflare Workers
-   `npm run test` - Run tests with Vitest
-   `npm run style:fix` - Format code with Prettier
-   `npm run check` - TypeScript type checking
-   `npm run typegen` - Generate Wrangler types

## Code Architecture

### Core Structure

-   `src/index.ts` - Main Hono app with single GET endpoint
-   `src/bindings.ts` - TypeScript bindings for Cloudflare environment
-   `src/lib/utils.ts` - Utility functions (country code to name conversion)
-   `src/lib/iso-countries.ts` - ISO country code mappings
-   `src/lib/middlewares/ratelimit.ts` - Rate limiting middleware using Cloudflare Rate Limiter

### Key Dependencies

-   **Hono** - Web framework for Cloudflare Workers
-   **Vitest** - Testing framework with @cloudflare/vitest-pool-workers for worker testing
-   **Wrangler** - Cloudflare Workers CLI and development tools

### Middleware Stack

The app uses these middlewares in order:

1. Rate limiting (5 requests per 60 seconds per IP)
2. Caching (600 seconds with cache name 'geo-app')
3. ETag support
4. Powered-by header
5. Security headers

### Response Format

The API returns a structured JSON response with:

-   Basic geo data: ip, country, code, city, continent, region, regionCode, timezone
-   Full Cloudflare metadata in the `all` field including TLS info, bot detection, etc.

## Testing

-   Use Vitest for all tests
-   Place tests in appropriate locations near source files
-   Use `@cloudflare/vitest-pool-workers` for worker-specific functionality testing
-   Mock `request.cf` object for geolocation testing

## Configuration

-   `wrangler.jsonc` - Cloudflare Workers configuration
-   Rate limiter configured for 5 requests per 60 seconds per IP
-   Custom domain: geo.srvr.dev
-   CPU limit: 30ms per request
-   Smart placement mode enabled

## Code Style

-   Uses Prettier with @zaher/prettier-config
-   TypeScript strict mode enabled
-   Path aliases: `@/` maps to `src/`
-   Run `npm run style:fix` before commits
