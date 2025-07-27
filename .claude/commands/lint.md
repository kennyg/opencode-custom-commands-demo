---
description: Run comprehensive code quality checks
---

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