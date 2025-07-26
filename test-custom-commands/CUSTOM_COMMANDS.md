# Development Custom Commands

This file contains custom commands for common development workflows in this React project.

## 🚀 Quick Start Commands

```/custom-setup Get started with development
Welcome! Let's get this React project running on your machine:

1. **Install dependencies**: Run `npm install` to install all required packages
2. **Start development server**: Run `npm run dev` to start Vite dev server
3. **Open in browser**: Navigate to http://localhost:5173
4. **Verify setup**: You should see the homepage with a working counter

**Next steps:**
- Try editing `src/pages/HomePage.tsx` to see hot reload in action
- Run `npm run typecheck` to verify TypeScript setup
- Run `npm test` to execute the test suite

**Troubleshooting:**
- If port 5173 is busy, Vite will automatically use the next available port
- Make sure you have Node.js 18+ installed
- If you encounter dependency issues, try deleting `node_modules` and running `npm install` again
```

```/custom-dev Start development workflow
Let's start a productive development session:

1. **Start the dev server**: `npm run dev`
2. **Open a new terminal** and run type checking in watch mode: `npm run typecheck -- --watch`
3. **Optional**: Run tests in watch mode: `npm run test --watch`

**Development URLs:**
- App: http://localhost:5173
- Vite dev server provides hot module replacement

**Pro tips:**
- Use `Ctrl+C` to stop any running process
- The app will automatically reload when you save files
- TypeScript errors will show in the terminal and browser
- Use browser dev tools for debugging React components
```

## 🔧 Code Quality Commands

```/custom-lint Run comprehensive code quality checks
Running all code quality checks for this project:

1. **ESLint**: `npm run lint` - Check for code style and potential issues
2. **TypeScript**: `npm run typecheck` - Verify type safety
3. **Prettier**: `npm run format:check` - Check code formatting
4. **Tests**: `npm run test` - Run the test suite

**To auto-fix issues:**
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Auto-format code with Prettier

**CI/CD Integration:**
This command mimics what runs in CI. All checks should pass before merging.
```

```/custom-fix Auto-fix code quality issues
Automatically fixing code quality issues:

1. **Auto-fix linting**: `npm run lint:fix`
2. **Format code**: `npm run format`
3. **Re-run checks**: `npm run lint && npm run typecheck`

**Manual review needed for:**
- TypeScript errors (these require code changes)
- Complex ESLint rules that can't be auto-fixed
- Test failures

**After running this command:**
- Review the changes made by the auto-fixers
- Commit the formatting changes separately from logic changes
- Address any remaining TypeScript errors manually
```

## 🧪 Testing Commands

```/custom-test Run tests with different strategies
Choose your testing strategy:

**Quick test run:**
`npm test`

**Watch mode for active development:**
`npm run test --watch`

**Coverage report:**
`npm run test:coverage`

**Testing best practices for this project:**
- Place test files next to the components they test (e.g., `Button.test.tsx`)
- Use descriptive test names that explain the behavior being tested
- Test user interactions, not implementation details
- Mock external dependencies and API calls

**Common test patterns:**
- Component rendering: `render(<Component />)`
- User interactions: `fireEvent.click(button)`
- Async testing: `waitFor(() => expect(...))`
```

```/custom-coverage Generate and analyze test coverage
Generating comprehensive test coverage report:

1. **Run tests with coverage**: `npm run test:coverage`
2. **Open coverage report**: Open `coverage/index.html` in your browser
3. **Analyze results**: Look for files with low coverage

**Coverage targets for this project:**
- Aim for >80% overall coverage
- Focus on critical business logic
- UI components should have basic rendering tests

**Improving coverage:**
- Add tests for uncovered lines (shown in red)
- Test error conditions and edge cases
- Consider integration tests for complex workflows

**Files to prioritize:**
- Utility functions (`src/utils/`)
- Custom hooks (`src/hooks/`)
- Core business logic
```

## 🎨 Component Generation Commands

```/custom-component Generate a new React component
Creating a new React component with TypeScript and best practices:

**Component structure:**
```typescript
// src/components/[ComponentName]/[ComponentName].tsx
import React from 'react'
import { [ComponentName]Props } from './types'

export function [ComponentName]({ ...props }: [ComponentName]Props) {
  return (
    <div className="[component-name]">
      {/* Component content */}
    </div>
  )
}
```

**Files to create:**
1. `src/components/[ComponentName]/[ComponentName].tsx` - Main component
2. `src/components/[ComponentName]/types.ts` - TypeScript types
3. `src/components/[ComponentName]/index.ts` - Export barrel
4. `src/components/[ComponentName]/[ComponentName].test.tsx` - Tests

**Naming conventions:**
- Use PascalCase for component names (e.g., `UserProfile`)
- Use kebab-case for CSS classes (e.g., `user-profile`)
- Keep components focused and single-responsibility

**Next steps after creation:**
- Import and use the component in a parent component
- Add props interface with proper TypeScript types
- Write basic rendering tests
- Add Storybook stories if using Storybook
```

```/custom-hook Generate a custom React hook
Creating a new custom React hook with TypeScript:

**Hook structure:**
```typescript
// src/hooks/use[HookName].ts
import { useState, useEffect } from 'react'

export function use[HookName]() {
  // Hook implementation
  
  return {
    // Return object with hook values and functions
  }
}
```

**Hook best practices:**
- Start hook names with "use" (e.g., `useApiData`, `useLocalStorage`)
- Return an object with named properties for multiple values
- Use TypeScript for parameter and return types
- Handle cleanup in useEffect when needed

**Common hook patterns:**
- **State management**: `useState` for local state
- **Side effects**: `useEffect` for API calls, subscriptions
- **Performance**: `useMemo`, `useCallback` for optimization
- **Context**: `useContext` for global state

**Testing custom hooks:**
- Use `@testing-library/react-hooks` for testing
- Test different scenarios and edge cases
- Mock dependencies and external services
```

## 🏗️ Build & Deploy Commands

```/custom-build Build project for production
Building the project for production deployment:

1. **Clean previous builds**: `npm run clean`
2. **Type check**: `npm run typecheck`
3. **Run tests**: `npm test`
4. **Build for production**: `npm run build`
5. **Preview build**: `npm run preview`

**Build outputs:**
- `dist/` directory contains the production build
- Assets are optimized and minified
- Source maps included for debugging

**Deployment checklist:**
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Build completes successfully
- [ ] Preview looks correct
- [ ] Environment variables configured
- [ ] Performance metrics acceptable

**Next steps:**
- Deploy `dist/` folder to your hosting provider
- Configure web server for single-page app routing
- Set up monitoring and error tracking
```

```/custom-docker Build and run with Docker
Containerizing the application with Docker:

**Build Docker image:**
```bash
npm run build  # Build the app first
docker build -t my-react-app .
```

**Run Docker container:**
```bash
docker run -p 3000:3000 my-react-app
```

**Docker best practices:**
- Use multi-stage builds for smaller images
- Copy only necessary files
- Use .dockerignore to exclude development files
- Set appropriate user permissions

**For development with Docker:**
- Consider using docker-compose for local development
- Mount source code as volumes for hot reload
- Use separate Dockerfile.dev for development

**Production deployment:**
- Push image to container registry (Docker Hub, ECR, etc.)
- Use orchestration tools (Kubernetes, Docker Swarm)
- Configure health checks and resource limits
```

## 🐛 Debugging Commands

```/custom-debug Debug common issues
Debugging toolkit for common development issues:

**React DevTools:**
- Install React Developer Tools browser extension
- Inspect component props and state
- Profile component performance

**TypeScript issues:**
- Run `npm run typecheck` for detailed error messages
- Check `tsconfig.json` configuration
- Use VS Code TypeScript integration

**Build issues:**
- Clear cache: `rm -rf node_modules/.cache`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for version conflicts in package-lock.json

**Runtime errors:**
- Check browser console for JavaScript errors
- Use React Error Boundaries for graceful error handling
- Enable source maps for better stack traces

**Performance issues:**
- Use React Profiler to identify slow components
- Check network tab for slow API calls
- Analyze bundle size with `npm run build -- --analyze`

**Common debugging commands:**
- `console.log()` for quick debugging
- `debugger;` statement to pause execution
- `React.StrictMode` to catch side effects
```

## 📊 Project Analysis Commands

```/custom-analyze Analyze project health and metrics
Comprehensive project analysis and health check:

**Code Quality Metrics:**
1. `npm run lint` - ESLint issues count
2. `npm run typecheck` - TypeScript errors
3. `npm run test:coverage` - Test coverage percentage

**Bundle Analysis:**
- Install: `npm install --save-dev webpack-bundle-analyzer`
- Analyze: `npm run build && npx webpack-bundle-analyzer dist`

**Dependencies Analysis:**
- Outdated packages: `npm outdated`
- Security audit: `npm audit`
- License check: `npx license-checker`

**Performance Metrics:**
- Build time: Time `npm run build`
- Bundle size: Check `dist/` folder size
- Lighthouse scores: Run in Chrome DevTools

**Code Statistics:**
- Lines of code: `find src -name "*.ts*" | xargs wc -l`
- File count: `find src -name "*.ts*" | wc -l`
- Test coverage: Check coverage report

**Recommendations:**
- Keep bundle size under 1MB
- Maintain >80% test coverage
- Address all high-severity security issues
- Update dependencies regularly
```

<!-- /custom-refactor Refactor code for better maintainability -->
Refactoring recommendations for better code maintainability:

**Code Structure Analysis:**
1. **Large Components**: Look for components >200 lines - consider breaking them down
2. **Duplicate Code**: Search for repeated patterns that could be extracted
3. **Complex Functions**: Identify functions with high cyclomatic complexity
4. **Naming Consistency**: Ensure consistent naming conventions across the codebase

**Refactoring Strategies:**
- **Extract Components**: Break large components into smaller, focused ones
- **Custom Hooks**: Extract stateful logic into reusable hooks
- **Utility Functions**: Move pure functions to `src/utils/`
- **Constants**: Define magic numbers/strings as named constants

**TypeScript Improvements:**
- Add stricter types instead of `any`
- Use union types for better type safety
- Create shared interfaces for common data structures
- Use generics for reusable components

**Performance Optimizations:**
- `React.memo()` for expensive pure components
- `useMemo()` for expensive calculations
- `useCallback()` for stable function references
- Code splitting with `React.lazy()`

**Testing Improvements:**
- Add tests for new components/functions
- Improve test coverage for critical paths
- Mock external dependencies properly
- Use integration tests for complex workflows
<!-- /custom-refactor -->