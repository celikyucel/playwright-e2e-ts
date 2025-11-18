# Playwright E2E TS – OrangeHRM Demo (POM)

This repository contains a **Playwright End-to-End test suite** for the public OrangeHRM demo application, built in **TypeScript** using a **Page Object Model (POM)** structure.

The goal of this project is to demonstrate:
- Clean and maintainable TypeScript-based test structure
- Tag-based test selection (e.g. `@smoke`, `@regression`)
- Environment-based configuration using `.env`
- Strong typing for pages, helpers, and test data

---

## Tech Stack

- [Playwright Test Runner](https://playwright.dev/)
- TypeScript
- Page Object Model (POM)
- `dotenv` for environment variables
- HTML reports

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Configure environment variables

Create a `.env` file at the project root (you can copy from `.env.example`):

```bash
cp .env.example .env
```

Update the values if needed:

```env
BASE_URL=https://opensource-demo.orangehrmlive.com/
USERNAME=Admin
PASSWORD=admin123
```

> **Note:** The `.env` file is excluded from Git via `.gitignore`, following real-world best practices.

---

## Running Tests

### Run all tests

```bash
npm test
```

This is equivalent to:

```bash
playwright test
```

### Run only `@smoke` tests

```bash
npm run test:smoke
# or:
npx playwright test --grep "@smoke"
```

### Run only `@regression` tests

```bash
npm run test:regression
# or:
npx playwright test --grep "@regression"
```

---

## Reports

Playwright generates an HTML report.

### Generate and open the report

```bash
npm run report
# or:
npx playwright show-report
```

Reports are stored in the `reports/` folder (ignored by Git).

---

## Project Structure

```text
.
├── pages/
│   ├── base.page.ts        # Base page with shared helpers
│   └── login.page.ts       # Page Object for OrangeHRM login page
│
├── tests/
│   └── login.spec.ts       # E2E login tests (@smoke, @regression)
│
├── utils/
│   ├── helpers.ts          # Reusable helper functions (e.g., maskPassword)
│   └── testData.ts         # Centralized test data (valid/invalid credentials)
│
├── .env                    # Local environment variables (ignored by Git)
├── .env.example            # Example env file for other users
├── .gitignore
├── package.json
├── tsconfig.json           # TypeScript compiler configuration
├── playwright.config.ts    # Playwright configuration file
└── README.md
```

---

## Example Scenarios

The current test suite covers:

1. `@smoke` – **Valid login**:  
   - Navigate to the login page  
   - Log in with valid credentials  
   - Assert navigation to the Dashboard

2. `@regression` – **Invalid login**:  
   - Attempt login with invalid credentials  
   - Assert that an error message is displayed

3. `@regression` – **Empty credentials**:  
   - Attempt login with empty username and password  
   - Assert required field validation is shown

---

## Notes

- This project is meant for demo and portfolio purposes.
- The application under test is the publicly available OrangeHRM demo:
  - https://opensource-demo.orangehrmlive.com/

You can further enhance this project by:
- Adding more strongly-typed Page Objects (Dashboard, PIM, Leave, Admin)
- Expanding test coverage (create, search, and update employees)
- Integrating with CI/CD (GitHub Actions, GitLab CI, etc.)
