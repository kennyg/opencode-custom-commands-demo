# Project-Specific Custom Commands

These commands are specific to this React project's workflow and conventions.

## 🔄 Git Workflow Commands

```/custom-commit Commit with conventional commit format
Creating a well-formatted commit following conventional commit standards:

**Commit Types:**
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Pre-commit checklist:**
1. **Run quality checks**: `npm run lint && npm run typecheck`
2. **Run tests**: `npm test`
3. **Stage changes**: `git add .`
4. **Commit format**: `git commit -m "type(scope): description"`

**Example commits:**
```bash
git commit -m "feat(auth): add user login functionality"
git commit -m "fix(api): handle network timeout errors"
git commit -m "docs(readme): update installation instructions"
git commit -m "test(hooks): add tests for useCounter hook"
```

**Best practices:**
- Keep commit messages under 50 characters for the subject
- Use imperative mood ("add" not "added")
- Include breaking change notes in footer if applicable
- Reference issue numbers when relevant
```

```/custom-pr Prepare pull request
Preparing a comprehensive pull request:

**Pre-PR Checklist:**
- [ ] All tests passing: `npm test`
- [ ] No linting errors: `npm run lint`
- [ ] No TypeScript errors: `npm run typecheck`
- [ ] Code formatted: `npm run format`
- [ ] Updated documentation if needed
- [ ] Added tests for new functionality

**PR Description Template:**
```markdown
## Summary
Brief description of what this PR does.

## Changes
- Added [feature/fix]
- Updated [component/file]
- Removed [deprecated code]

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Cross-browser testing (if UI changes)

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Breaking Changes
[List any breaking changes]
```

**Review Preparation:**
- Self-review your changes in GitHub
- Ensure commit messages are clear
- Add comments for complex logic
- Update README if public APIs changed
```

## 🚢 Deployment Commands

```/custom-deploy Deploy to staging/production
Deployment workflow for different environments:

**Staging Deployment:**
1. **Verify branch**: Ensure you're on `develop` branch
2. **Run full test suite**: `npm test`
3. **Build for staging**: `npm run build`
4. **Deploy to staging**: `npm run deploy:staging`
5. **Smoke test**: Verify key functionality works

**Production Deployment:**
1. **Create release branch**: `git checkout -b release/v1.x.x`
2. **Update version**: `npm version patch/minor/major`
3. **Final testing**: `npm run test && npm run build`
4. **Deploy**: `npm run deploy:production`
5. **Create GitHub release**: Tag and document changes
6. **Monitor**: Check error tracking and metrics

**Post-deployment checklist:**
- [ ] Application loads correctly
- [ ] Key user flows work
- [ ] No new errors in monitoring
- [ ] Performance metrics stable
- [ ] Database migrations successful (if any)

**Rollback procedure:**
If issues are detected, immediately run: `npm run deploy:rollback`
```

## 📋 Code Review Commands

```/custom-review Code review checklist
Comprehensive code review guidelines for this project:

**Functionality Review:**
- [ ] Code solves the intended problem
- [ ] Edge cases are handled appropriately
- [ ] Error handling is robust
- [ ] Performance considerations addressed

**Code Quality:**
- [ ] Follows project conventions and style guide
- [ ] Functions are focused and single-responsibility
- [ ] Variable and function names are descriptive
- [ ] No magic numbers or strings (use constants)
- [ ] Comments explain "why" not "what"

**React-Specific Checks:**
- [ ] Components are properly structured
- [ ] Props have TypeScript interfaces
- [ ] State updates are immutable
- [ ] Effects have proper dependencies
- [ ] No unnecessary re-renders

**Security Review:**
- [ ] Input validation and sanitization
- [ ] No hardcoded secrets or sensitive data
- [ ] Proper authentication/authorization
- [ ] XSS and injection attack prevention

**Testing:**
- [ ] New functionality has tests
- [ ] Tests cover happy path and edge cases
- [ ] Test names are descriptive
- [ ] No flaky or brittle tests

**Documentation:**
- [ ] README updated if needed
- [ ] API documentation current
- [ ] Complex logic is commented
- [ ] Breaking changes documented
```

## 🛠️ Maintenance Commands

```/custom-update Update dependencies and tooling
Regular maintenance workflow for keeping the project healthy:

**Monthly Dependency Updates:**
1. **Check outdated packages**: `npm outdated`
2. **Update non-breaking changes**: `npm update`
3. **Review breaking changes**: Check changelogs for major updates
4. **Update dev dependencies**: Focus on build tools and linters
5. **Test thoroughly**: `npm test && npm run build`

**Security Updates:**
1. **Security audit**: `npm audit`
2. **Fix vulnerabilities**: `npm audit fix`
3. **Review high-severity issues manually**
4. **Update package-lock.json**: Commit the changes

**Tool Configuration Updates:**
- **ESLint**: Check for new rules and best practices
- **TypeScript**: Update to latest stable version
- **Prettier**: Review formatting options
- **Vite**: Update for performance improvements

**Cleanup Tasks:**
- Remove unused dependencies: Use `depcheck` tool
- Clean up dead code: Remove unreferenced files
- Update browser support targets
- Review and update CI/CD configurations

**Testing After Updates:**
- Full test suite: `npm test`
- Build verification: `npm run build`
- Development server: `npm run dev`
- Production preview: `npm run preview`
```

```/custom-onboard Onboard new team members
Comprehensive onboarding guide for new developers:

**Development Setup:**
1. **Prerequisites**: Node.js 18+, Git, VS Code
2. **Clone repository**: `git clone [repo-url]`
3. **Install dependencies**: `npm install`
4. **Environment setup**: Copy `.env.example` to `.env`
5. **Start development**: `npm run dev`

**VS Code Extensions (Recommended):**
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- GitLens
- Auto Rename Tag

**Project Overview:**
- **Architecture**: React + TypeScript + Vite
- **State Management**: React hooks + Context API
- **Styling**: CSS modules / styled-components
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite
- **Deployment**: [Deployment platform]

**Key Conventions:**
- Use functional components with hooks
- TypeScript for all new code
- Test-driven development encouraged
- Conventional commit messages
- Code review required for all changes

**Resources:**
- Project documentation: `docs/`
- API documentation: [API docs URL]
- Design system: [Design system URL]
- Team communication: [Slack/Discord]

**First Tasks:**
1. Set up development environment
2. Run through the custom commands in this file
3. Make a small PR to get familiar with the workflow
4. Read through existing code to understand patterns
```