# Development Setup Guide

## Code Quality and Formatting

This project is configured with modern code quality tools to ensure consistent code style and quality across the team.

### Tools Configured

#### 1. **Husky** - Git Hooks Management

- Automatically runs code quality checks before commits
- Prevents bad code from being committed to the repository

#### 2. **ESLint** - Code Linting

- Latest ESLint rules configured with TypeScript support
- **SonarQube-like rules** for enhanced code quality:
  - Cognitive complexity warnings
  - Duplicate string detection
  - Code smell detection
  - Security vulnerability checks
  - No identical functions
  - Prefer immediate returns
  - And many more quality rules

#### 3. **Prettier** - Code Formatting

- Automatic code formatting on save
- Consistent code style across the project
- Integrates seamlessly with ESLint

#### 4. **lint-staged** - Staged Files Processing

- Only runs linting and formatting on staged files
- Faster pre-commit checks
- Automatic fixing of formatting issues

### Auto-formatting on Save

When you save any file in VS Code, the following happens automatically:

1. **Prettier** formats the code
2. **ESLint** fixes auto-fixable issues
3. Code is saved with consistent formatting

### Pre-commit Hooks

Before each commit, Husky automatically:

1. Runs ESLint on all staged JavaScript/TypeScript files
2. Runs Prettier to format all staged files
3. Only allows commit if all checks pass

### Available Scripts

```bash
# Run ESLint
npm run lint

# Run ESLint with auto-fix
npm run lint:fix

# Format all files with Prettier
npm run format

# Check if files are properly formatted
npm run format:check
```

### ESLint Rules Overview

Our ESLint configuration includes:

#### SonarQube-inspired Rules

- `cognitive-complexity`: Warns on overly complex functions
- `no-duplicate-string`: Detects repeated string literals
- `no-identical-functions`: Prevents code duplication
- `no-small-switch`: Suggests alternatives to small switch statements
- `prefer-immediate-return`: Encourages cleaner return patterns

#### TypeScript Rules

- `no-unused-vars`: Warns about unused variables
- `no-explicit-any`: Discourages use of `any` type
- `no-non-null-assertion`: Warns about non-null assertions

#### General Quality Rules

- `prefer-const`: Enforces const over let when possible
- `no-var`: Prohibits var declarations
- `no-console`: Warns about console statements in production
- `eqeqeq`: Enforces strict equality
- `curly`: Requires braces for all control statements

### How to Override Settings

#### VS Code Settings

Edit `.vscode/settings.json` to customize editor behavior:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

#### Prettier Configuration

Edit `.prettierrc` to customize formatting:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
}
```

#### ESLint Configuration

Edit `eslint.config.js` to modify linting rules.

### Troubleshooting

#### If pre-commit hooks don't work:

```bash
chmod +x .husky/pre-commit
```

#### If ESLint shows errors:

```bash
npm run lint:fix
```

#### If Prettier formatting is inconsistent:

```bash
npm run format
```

### Benefits

✅ **Consistent Code Style**: All team members write code in the same style
✅ **Early Bug Detection**: ESLint catches potential issues before runtime
✅ **SonarQube Compliance**: Rules aligned with industry-standard code quality metrics
✅ **Automated Workflow**: No manual intervention needed for formatting
✅ **Git History Cleanliness**: Only properly formatted code gets committed
✅ **Enhanced Readability**: Consistent formatting improves code readability
✅ **Reduced Code Review Time**: Automated formatting and linting reduce review overhead
