### 1. **Create a Vite Project with React and TypeScript Template:**

1. **Install Node.js and npm** (if not installed):
   - You can download and install Node.js from [nodejs.org](https://nodejs.org/), which also installs npm (Node Package Manager).
   - Vite requires Node.js version 18+ or 20+

2. **Create the project:**

Open your terminal or command prompt and run:

   ```bash
   npm create vite@latest
   ```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options.

   ```bash
   npm create vite@latest my-react-ts-app -- --template react-ts
   ```

   Replace `my-react-ts-app` with your desired project name.

3. **Navigate to the project directory:**
   ```bash
   cd my-react-ts-app
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   By default, the index.html will be served on port 5173, so open `http://localhost:5173` to view your app.

---
To change the development server port from `5173` to `3000` (or any other port), you can configure the port in the Vite configuration file.

### 1. **Open or create the Vite configuration file**

In your Vite project, open the `vite.config.ts` file (or create one if it doesn't exist in the root of your project). This file is used to configure Vite settings.

### 2. **Modify the `server` option in the config**

In the `vite.config.ts` file, add the `server` option and specify the port you want. For example, to set the port to `3000`:

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
});
```

### 3. **Start the development server**

After adding the configuration, save the file and start the Vite development server again using:

```bash
npm run dev
```

Now, your app should run on `http://localhost:3000` instead of the default `http://localhost:5173`.

---

### 4. **Optional: Allow Dynamic Port Configuration**

If you want to allow the user to change the port dynamically without modifying the `vite.config.ts` file directly, you can also use environment variables.

1. **Set the port via `.env` file**

   Create a `.env` file in your project root (if it doesn't exist) and add this line:

   ```
   VITE_PORT=3000
   ```

2. **Modify `vite.config.ts` to read from the environment variable**

   Update the `vite.config.ts` to use the value from the `.env` file:

   ```typescript
   import { defineConfig } from 'vite';

   export default defineConfig({
     server: {
       port: process.env.VITE_PORT || 5173, // Default to 5173 if the environment variable is not set
     },
   });
   ```

Now, the user can change the port by editing the `.env` file without touching the Vite configuration. When running `npm run dev`, it will use the port specified in `.env`.

### 5. **Start the server with the new port**

After making these changes, run:

```bash
npm run dev
```

Your development server will start on the port specified in `.env` or `vite.config.ts` (in this case, `3000`).

---

### 2. **Set Up ESLint for TypeScript and React:**

1. **Install ESLint and necessary plugins:**

  Install these npm packages in the development environment only by using (--save-dev), these do not be a part of the production build

   Run the following command in your project directory to install the required packages:
```bash
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-vitest prettier eslint-config-prettier eslint-plugin-prettier --save-dev

npm install eslint-config-react-app eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier-eslint prettier-eslint-cli eslint-config-airbnb --save-dev
```
Run this command to install the required ESLint packages for TypeScript, React, and Prettier:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier --save-dev
```

This installs ESLint, the TypeScript and React plugins, the Airbnb style guide, and Prettier integration.

### Key Notes:
- `@typescript-eslint/eslint-plugin`: A plugin for ESLint to lint TypeScript code.
- `@typescript-eslint/parser`: A parser that allows ESLint to understand TypeScript syntax.
- `eslint-config-airbnb-typescript`: Airbnb's ESLint configuration adapted for TypeScript.
- `eslint-plugin-jest`: Adds rules for linting Jest test files.
- `prettier`: Code formatter to ensure consistent style.
- `eslint-config-prettier`: Disables conflicting rules between ESLint and Prettier.
- `eslint-plugin-prettier`: Integrates Prettier with ESLint so that Prettier can be run as an ESLint rule.
- `eslint-config-react-app`: Configuration for React apps, typically used in projects created with `create-react-app`.
- `eslint-import-resolver-typescript`: Helps ESLint resolve TypeScript module paths.
- `eslint-plugin-import`: Ensures proper import/export syntax and prevents issues like unused imports.
- `eslint-plugin-jsx-a11y`: Provides accessibility rules for JSX elements.
- `eslint-plugin-react`: ESLint plugin for React-specific linting.
- `eslint-plugin-react-hooks`: ESLint plugin for linting React hooks.
- `prettier-eslint`: Runs Prettier with ESLint and allows for automatic fixing.
- `prettier-eslint-cli`: A command-line tool for running Prettier and ESLint together.
- `eslint-config-airbnb`: Airbnb's ESLint configuration, which is a popular set of coding standards for JavaScript and React projects.


- All of these packages are installed as **dev dependencies** (`-D` or `--save-dev`) because they are only needed during development.

Once you install these dependencies, you'll need to configure ESLint and Prettier to use these packages by creating or updating configuration files like `.eslintrc.js` and `.prettierrc`.

#### **Configure ESLint:**

Create or update the `.eslintrc.js` (or `.eslintrc.json`) file in your project root with the following configuration:

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error", // Ensure code formatting is handled by Prettier
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

This configuration:
- Enforces TypeScript and React best practices.
- Integrates Prettier for automatic formatting.
- Disables React 17+ JSX pragma (`react/react-in-jsx-scope`).

---

### **3. TypeScript Configuration**

Ensure your `tsconfig.json` is set up properly for a TypeScript React project:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

This configuration ensures TypeScript works correctly with React and enables strict type checking.

---

### **4. Add ESLint and Prettier Scripts to `package.json`:**

Add the following scripts to run ESLint and Prettier:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
  }
}
```

- `npm run lint`: Lint the code using ESLint.
- `npm run format:fix`: Format the code using Prettier.

---

### **5. Integrating Prettier for Code Formatting:**

1. **Install Prettier and necessary ESLint plugins:**

   ```bash
   npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
   ```

2. **Create a Prettier configuration file (`.prettierrc`):**

   ```json
   {
     "singleQuote": true,
     "semi": true,
     "trailingComma": "es5",
     "tabWidth": 2,
     "printWidth": 80
   }
   ```

3. **Update `.eslintrc.js` to integrate Prettier:**

   Add Prettier to your `extends` and `plugins`:

   ```javascript
   module.exports = {
     extends: [
       "eslint:recommended",
       "plugin:react/recommended",
       "plugin:@typescript-eslint/recommended",
       "plugin:prettier/recommended"
     ],
     plugins: [
       "react",
       "react-hooks",
       "@typescript-eslint",
       "prettier"
     ],
     rules: {
       "@typescript-eslint/no-explicit-any": "error",
       "react/jsx-uses-react": "error",
       "react/jsx-uses-vars": "error",
       "prettier/prettier": "error"
     }
   };
   ```

---
---

### **6. Optional: Install and Configure Vitest for Testing (if needed)**

If you're using **Vitest** (instead of Jest), install the necessary plugin:

```bash
npm install --save-dev vitest eslint-plugin-vitest
```

Modify your `.eslintrc.js` to integrate Vitest:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vitest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vitest/recommended", // Integrate Vitest
    "airbnb",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "vitest", // Vitest plugin
  ],
};
```

If I were using **Jest** instead of Vitest for testing, simply modify your ESLint setup to reflect this. **Vitest** is a modern testing framework that integrates well with Vite and has similar features to Jest, but it requires a slightly different ESLint plugin.

Instead of `eslint-plugin-vitest`, you will want to install the `eslint-plugin-jest` to handle Vitest-specific linting rules.


### 2. Update `.eslintrc.js` or `.eslintrc.json`

You will need to update your ESLint configuration to use the **Vitest** plugin and adjust your settings. Here’s an example of how you can modify your ESLint config:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: false, // Set Jest to false since you're using Vitest
    "vitest/globals": true, // Enable Vitest global variables
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:vitest/recommended", // Add Vitest plugin recommendations
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json", // Make sure this points to your TypeScript config
  },
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "vitest", // Add Vitest plugin here
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "vitest/no-untested-missing": "warn", // Example of Vitest-specific rules
    // Add other custom rules here
  },
};
```

### 3. Update TypeScript Configuration (Optional)

Ensure your TypeScript configuration (`tsconfig.json`) is set up correctly to support Vitest and your project setup.

If you have `tsconfig.json` set up to work with TypeScript and Vite, you might need to add Vitest’s types to the `types` array in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["vite/client", "vitest/globals"]
  }
}
```

This ensures that Vitest's global variables are recognized by TypeScript.

### 4. Installing `vitest` (if not already done)

If you haven't already installed Vitest, you can install it via npm:

```bash
npm install --save-dev vitest
```

2. **Configure ESLint:**

   Create or update the `.eslintrc.json` (or `.eslintrc.js`) file in your project root:

   #### `.eslintrc.json`
   ```json
   {
     "parser": "@typescript-eslint/parser",
     "extends": [
       "eslint:recommended",
       "plugin:react/recommended",
       "plugin:@typescript-eslint/recommended"
     ],
     "plugins": [
       "react",
       "react-hooks",
       "@typescript-eslint"
     ],
     "rules": {
       "@typescript-eslint/no-explicit-any": "error",
       "react/jsx-uses-react": "error",
       "react/jsx-uses-vars": "error",
       "react/react-in-jsx-scope": "off"  // For React 17+
     },
     "settings": {
       "react": {
         "version": "detect"
       }
     }
   }
   ```

---

### 3. **Set Up TypeScript Configuration:**

Ensure your `tsconfig.json` includes at least the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

---

### 4. **Add ESLint Script to `package.json`:**

Add a script to your `package.json` to run ESLint:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```

You can run ESLint by executing:

```bash
npm run lint
```

---

### 5. **(Optional) Integrate Prettier for Code Formatting:**

1. **Install Prettier and necessary ESLint plugins:**

   ```bash
   npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
   ```

2. **Create a Prettier configuration file (`.prettierrc`):**

   ```json
   {
     "singleQuote": true,
     "semi": true,
     "trailingComma": "es5",
     "tabWidth": 2,
     "printWidth": 80
   }
   ```

3. **Update `.eslintrc.json` to integrate Prettier:**

   Add Prettier to your `extends` and `plugins`:

   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:react/recommended",
       "plugin:@typescript-eslint/recommended",
       "plugin:prettier/recommended"
     ],
     "plugins": [
       "react",
       "react-hooks",
       "@typescript-eslint",
       "prettier"
     ],
     "rules": {
       "@typescript-eslint/no-explicit-any": "error",
       "react/jsx-uses-react": "error",
       "react/jsx-uses-vars": "error",
       "prettier/prettier": "error"
     }
   }
   ```

4. **Create `.prettierignore` file** to specify files Prettier should ignore:
   
   ```
   node_modules
   build
   dist
   ```

5. **Add a script to run Prettier:**

   ```json
   {
     "scripts": {
       "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
       "format:fix": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\""
     }
   }
   ```

   You can now run:

   ```bash
   npm run format:fix
   ```

   This will automatically format your code according to Prettier rules.

---

### 6. **Run ESLint and Prettier:**

- Run ESLint:
  ```bash
  npm run lint
  ```

- Format the code with Prettier:
  ```bash
  npm run format:fix
  ```
