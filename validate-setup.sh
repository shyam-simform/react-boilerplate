#!/bin/bash

# React Boilerplate Setup Validation Script

echo "🚀 React 19 TypeScript Boilerplate - Setup Validation"
echo "=================================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
    else
        echo -e "${RED}✗${NC} $2"
        exit 1
    fi
}

print_info() {
    echo -e "${YELLOW}ℹ${NC} $1"
}

echo ""
print_info "Checking Node.js and npm..."
node --version
npm --version

echo ""
print_info "Installing dependencies..."
npm install
print_status $? "Dependencies installed"

echo ""
print_info "Running TypeScript compilation..."
npx tsc --noEmit
print_status $? "TypeScript compilation successful"

echo ""
print_info "Running tests..."
npm run test:run
print_status $? "All tests passed"

echo ""
print_info "Building for production..."
npm run build
print_status $? "Production build successful"

echo ""
print_info "Running linter..."
npm run lint
print_status $? "Linting passed"

echo ""
echo -e "${GREEN}🎉 All checks passed! Your React boilerplate is ready to use.${NC}"
echo ""
echo "Available commands:"
echo "  npm run dev       - Start development server"
echo "  npm run build     - Build for production"
echo "  npm run test      - Run tests in watch mode"
echo "  npm run test:run  - Run tests once"
echo "  npm run lint      - Run ESLint"
echo ""
echo "🔗 Development server will be available at: http://localhost:5173"
echo ""
