# **My Component Library**

A reusable component library built with TypeScript and React, designed to provide developers with a solid foundation for building and sharing UI components. This library includes a robust development environment with testing, linting, and formatting tools to ensure code quality and a smooth developer experience.

## **Table of Contents**

-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
-   [Scripts and Commands](#scripts-and-commands)
-   [Project Structure](#project-structure)

---

## **Features**

-   **TypeScript** for static typing and improved developer experience.
-   **React** for building modular and reusable UI components.
-   **Vitest** for fast and efficient testing.
-   **React Testing Library** for testing React components.
-   **ESLint** for code linting to maintain code quality.
-   **Prettier** for consistent code formatting.

---

## **Getting Started**

### **Installation**

1. **Clone the Repository**

    ```
    git clone https://github.com/lavr001/component-library.git
    cd component-library
    ```

2. **Install Dependencies**

    ```
    npm install
    ```

## **Scripts and Commands**

Below are the available scripts and commands you can use in this project:

### **Build the Library**

Compiles the TypeScript code into JavaScript, outputting to the `dist` directory.

```
  npm run build
```

### **Run Tests**

Runs all tests using Vitest and provides a detailed report.

```
  npm run test
```

##### Why Vitest?

-   Fast and Efficient: Vitest is a blazing-fast test runner built for modern web development.
-   TypeScript Support: Excellent support for TypeScript without additional configuration.
-   Familiar Syntax: Compatible with Jest's API, making it easy for developers familiar with Jest.

### **Lint the Code**

Checks the code for linting errors using ESLint.

```
  npm run lint
```

##### Why ESLint?

-   Enforces coding standards and best practices.
-   Helps catch potential errors and bugs early.
-   Configured to work seamlessly with TypeScript and React.

### **Format the Code**

Formats the code using Prettier according to the defined style rules.

```
  npm run format
```

##### Why Prettier?

-   Ensures consistent code style across the project.
-   Reduces code review overhead by automating formatting.
-   Integrated with ESLint to prevent conflicts.

```
my-component-library/
├── src/
│   ├── components/
│   │   ├── Modal.tsx
│   │   └── index.ts
│   └── index.ts
├── test/
│   ├── Modal.test.tsx
│   └── setup.ts
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```
