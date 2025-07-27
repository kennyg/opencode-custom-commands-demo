---
description: Run tests with different strategies
---

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