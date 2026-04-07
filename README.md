# E-commerce Website

This is a code bundle for E-commerce Website. The original project is available at https://www.figma.com/design/VfeWzpgQgbTuZ07m4onZcW/E-commerce-Website.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Backend reference

The `ProFit/` folder contains a Spring Boot backend sample with admin authentication, user management, JWT auth, and admin UI pages.

To run the backend reference:

1. Open a terminal in `ProFit/`
2. Run `./mvnw spring-boot:run` on macOS/Linux or `mvnw.cmd spring-boot:run` on Windows

The backend starts on `http://localhost:8080/ProFitSuppsDB`.

Frontend requests to `/api/*` and `/admin/*` are proxied to the backend when running `npm run dev`.

### Available backend endpoints

- `GET /api/products`
- `GET /api/products/{id}`
- `GET /api/products/category/{slug}`
- `GET /api/categories`
- `GET /api/categories/{slug}`
- `GET /api/categories/{slug}/products`
- `POST /api/auth/login`
- `POST /api/auth/register`
