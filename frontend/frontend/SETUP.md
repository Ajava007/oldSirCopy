# VeynaX AMMS — local setup

This workspace contains an Angular 17 frontend in `frontend/` and a Spring Boot 3 backend in `SpringBootSecurity-4.x.x/`. The frontend uses the backend by default; it does not sign in with static demo accounts.

## Requirements

- Node.js 20+
- Java 17+
- PostgreSQL compatible with the JDBC URL configured for the backend

## Backend

Create a PostgreSQL database (the default name is `car`), then start the backend from its folder:

```powershell
cd D:\Sircopy\SpringBootSecurity-4.x.x
$env:DB_URL = "jdbc:postgresql://localhost:5432/car"
$env:DB_USER = "postgres"
$env:DB_PASS = "your-local-database-password"
$env:JWT_SECRET = "replace-with-a-long-random-secret"
.\mvnw.cmd spring-boot:run
```

The API listens on `http://localhost:8080`. Versioned manufacturing endpoints are under `/api/v1`; authentication, users, products, dashboard and administration endpoints are under `/api`. Swagger UI is available at `/swagger-ui/index.html`.

The backend properties define local bootstrap accounts. Override their passwords with the corresponding `BOOTSTRAP_*_PASSWORD` environment variables before using a shared or deployed environment. New signups receive the least-privilege `VIEWER` role.

## Frontend

```powershell
cd D:\Sircopy\frontend
npm install
npm start
```

Open `http://localhost:4200`. The Angular dev-server proxies `/api` to `http://localhost:8080` using `proxy.conf.json`. The environment uses relative API URLs, so the same paths work through the proxy and same-origin production hosting. `environment.ts` keeps `useMock` disabled.

## API coverage notes

The default landing page is the guided workflow at `/workflow`: create a parts purchase order, receive it into inventory, check BOM stock before opening an assembly work order, add a customer, create a car sales order, and record/view payments for that customer's order. Purchase order receipt creates stock transactions, assembly order creation enforces material availability, and payment entries update the order's outstanding/paid status.

`BackendApiService` contains request helpers for the backend controllers, including pagination, query parameters, JSON mutations, text responses and PDF downloads. Some other ERP screens still contain sample-only presentation or lack forms for their write operations. Backend areas with no equivalent API include safety incidents/PPE/training, scheduling boards, approval queues, audit-log search, and vehicle variants/configuration. Payment entries are manual records only; no payment gateway is connected.

The backend and frontend folders are separate projects. Run `.\mvnw.cmd -DskipTests compile` in the backend folder and `npm run build` in the frontend folder to compile them.
