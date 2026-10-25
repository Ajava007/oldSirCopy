# VeynaX AMMS — Phase 1 Foundation

**Automotive Manufacturing Management System** — ERP + MES + QMS + WMS + CMMS + Sales & Payments.
One factory · one digital thread · one traceable vehicle history.

This archive contains the **Phase 1 runnable foundation**: Spring Boot 3 backend + Angular 17 frontend + PostgreSQL schema (Flyway), with JWT authentication, role-based access, master-data CRUD (Organizations, Factories, Vehicle Models), and OpenAPI/Swagger docs.

---

## 1. Prerequisites (your Windows machine)

| Tool | Version | Verify with |
|------|---------|-------------|
| Node.js | 20.x (you have 20.20.2) | `node -v` |
| Angular CLI | 17.3.x (you have 17.3.17) | `ng version` |
| JDK | **17 or 21** (Spring Boot 3 requires 17+) | `java -version` |
| Maven | 3.9+ | `mvn -version` |
| PostgreSQL | 16 (or use Docker) | `psql --version` |
| Docker Desktop | optional — for `docker compose` | `docker --version` |

> **Important:** If `java -version` shows 11, install JDK 21 (LTS) from Adoptium/Temurin and set `JAVA_HOME`. Spring Boot 3 will not run on Java 11.

---

## 2. Quick start (Windows PowerShell)

### 2.1 Database
Option A — Docker (recommended):
```powershell
cd veynax
docker compose up -d postgres
```
Option B — local PostgreSQL: create database `veynax` and user `veynax` (password in `.env`).

### 2.2 Backend
```powershell
cd veynax\backend
copy .env.example .env   # then edit JWT_SECRET, DB_PASSWORD
$env:JWT_SECRET="your-long-random-secret-here"
mvn spring-boot:run
```
- API: http://localhost:8080/api/v1
- Swagger UI: http://localhost:8080/swagger-ui.html
- Flyway runs `V1__foundation.sql` automatically on first start.

### 2.3 Frontend
```powershell
cd veynax\frontend
npm install
npm start
```
- App: http://localhost:4200
- `/api` requests are proxied to `localhost:8080` (see `proxy.conf.json`).

### 2.4 First login
Register a new account on the login screen (role defaults to VIEWER). To create an admin, insert directly into PostgreSQL:
```sql
-- password = Admin123!  (BCrypt hash below)
INSERT INTO app_user (username, email, full_name, password, role, enabled)
VALUES ('admin', 'admin@veynax.local', 'System Admin',
        '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'SUPER_ADMIN', true);
```

---

## 3. Build & test

```powershell
# Backend
cd backend
mvn clean test        # runs OrganizationServiceTest
mvn clean package     # produces target/veynax-backend-0.1.0.jar

# Frontend
cd frontend
npm run build         # production build -> dist/
```

---

## 4. What is implemented (Phase 1)

- **Auth:** register/login, stateless JWT, BCrypt, `Authorization: Bearer` interceptor, 401 auto-logout, route guard.
- **RBAC:** `@PreAuthorize` on create/update/delete (SUPER_ADMIN / FACTORY_ADMIN / MANAGER); delete restricted to SUPER_ADMIN.
- **Master data:** Organizations, Factories (scoped to organization), Vehicle Models — full CRUD with pagination, validation, duplicate-code guards, status enums.
- **Audit:** `created_at/updated_at/created_by/updated_by` on every entity via JPA auditing.
- **DB:** Flyway-managed PostgreSQL schema with unique constraints and indexes.
- **API docs:** springdoc OpenAPI + Swagger UI with JWT bearer auth.
- **UI:** industrial charcoal/orange/steel theme, sidebar admin layout, toast notifications, confirm-before-delete, loading/empty states.

## 5. What is NOT yet implemented (later phases)

- Engineering: parts, multi-level BOM, routing, revisions/ECO (Phase 2)
- Suppliers, procurement, inventory, lot/serial, MRP (Phase 3)
- Production planning, work orders, shop-floor MES, material consumption (Phase 4)
- Quality: inspections, defects, NCR, rework, SPC/FMEA (Phase 5)
- VIN assignment, finished vehicles, sales orders, payment gateway integration (Phase 6)
- JasperReports PDF documents, dashboards/analytics, Docker full stack, CI/CD (Phases 8–9)
- Payment gateway: no real gateway configured — spec requires server-side verification; no card data stored.

## 6. Project structure

```
veynax/
├── backend/                 Spring Boot 3.2, Java 17, Maven
│   ├── pom.xml
│   └── src/main/java/com/veynax/
│       ├── config/          Security, OpenAPI, Auditing
│       ├── security/        JWT util, auth filter, UserDetailsService
│       ├── auth/            register/login controller + service
│       ├── user/            User entity, Role enum, repository
│       ├── masterdata/      Organization / Factory / VehicleModel CRUD
│       ├── common/          ApiResponse, GlobalExceptionHandler, BaseEntity
│       └── resources/db/migration/V1__foundation.sql
├── frontend/                Angular 17 (standalone), Bootstrap 5, SCSS
│   ├── package.json, angular.json, proxy.conf.json
│   └── src/app/
│       ├── core/            services, models, interceptors, guards
│       ├── layouts/         admin sidebar layout (+ toasts)
│       └── pages/           login, dashboard, master-data (3 CRUD pages)
├── docker-compose.yml       PostgreSQL (+ backend service)
├── .env.example
└── README.md
```

## 7. Environment variables

See `.env.example`. Never commit real secrets. `JWT_SECRET` must be ≥32 chars.

---

*Generated as Phase 1 foundation. Build results in this environment are reported in the delivery message — anything not verified there is marked unverified and should be built on your machine.*
