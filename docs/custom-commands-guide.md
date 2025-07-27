# Custom Commands Guide

This guide explains how to use and create custom commands for this React project.

## 🎯 Quick Start

### Using Commands

**In opencode CLI:**
```bash
# See all available commands
opencode custom --list

# Execute a command
opencode custom setup

# Execute with arguments
opencode custom component Button primary

# Preview without executing
opencode custom build --dry-run
```

**In opencode Chat:**
```
/custom-setup
/custom-component Button primary
/custom-build
```

## 📚 Available Commands Reference

### Development Workflow

| Command | Description | Arguments |
|---------|-------------|-----------|
| `/custom-setup` | Complete project setup | None |
| `/custom-dev` | Start development session | None |
| `/custom-lint` | Run code quality checks | None |
| `/custom-fix` | Auto-fix code issues | None |
| `/custom-test` | Run test suite | None |
| `/custom-coverage` | Generate coverage report | None |

### Code Generation

| Command | Description | Arguments |
|---------|-------------|-----------|
| `/custom-component` | Generate React component | `[ComponentName]` `[variant]` |
| `/custom-hook` | Generate custom hook | `[hookName]` |

### Build & Deploy

| Command | Description | Arguments |
|---------|-------------|-----------|
| `/custom-build` | Production build | None |
| `/custom-docker` | Docker containerization | None |
| `/custom-deploy` | Deploy to environment | `[staging|production]` |

### Git Workflow

| Command | Description | Arguments |
|---------|-------------|-----------|
| `/custom-commit` | Conventional commit guide | None |
| `/custom-pr` | Pull request preparation | None |
| `/custom-review` | Code review checklist | None |

### Maintenance

| Command | Description | Arguments |
|---------|-------------|-----------|
| `/custom-update` | Update dependencies | None |
| `/custom-analyze` | Project health analysis | None |
| `/custom-debug` | Debug common issues | None |
| `/custom-refactor` | Refactoring guidelines | None |
| `/custom-onboard` | Team onboarding guide | None |

## 🎨 Command Examples

### Setting Up Development
```bash
# Get the project running
opencode custom setup

# Start development workflow
opencode custom dev
```

### Generating Code
```bash
# Create a new component
opencode custom component UserProfile

# Create a custom hook
opencode custom hook useApiData
```

### Quality Assurance
```bash
# Check code quality
opencode custom lint

# Fix automatically
opencode custom fix

# Run tests with coverage
opencode custom coverage
```

### Deployment
```bash
# Build for production
opencode custom build

# Deploy to staging
opencode custom deploy staging
```

## 🔧 Creating Custom Commands

### Basic Syntax

**Code Block Style:**
````markdown
```/custom-name Brief description
Detailed instructions here...

Can include:
- Multiple lines
- Code examples
- Step-by-step guides
- Best practices
```
````

**HTML Comment Style:**
```markdown
<!-- /custom-name Brief description -->
Detailed instructions here...
Can span multiple lines...
<!-- /custom-name -->
```

### Best Practices

1. **Clear Naming**: Use descriptive command names
   - ✅ `/custom-setup` `/custom-deploy` `/custom-test`
   - ❌ `/custom-do` `/custom-run` `/custom-stuff`

2. **Good Descriptions**: Write helpful one-line descriptions
   - ✅ "Generate a new React component with TypeScript"
   - ❌ "Make component"

3. **Detailed Instructions**: Include:
   - Step-by-step procedures
   - Code examples
   - Common pitfalls
   - Next steps

4. **Consistent Format**: Follow project patterns
   - Use consistent terminology
   - Similar instruction structure
   - Standard code block formatting

### Command File Organization

```
project/
├── CUSTOM_COMMANDS.md          # Main commands
├── .opencode/
│   ├── project-commands.md     # Project-specific
│   └── team-commands.md        # Team workflows
└── docs/
    └── commands/
        ├── deployment.md       # Deployment commands
        └── testing.md         # Testing commands
```

## 🎯 Command Design Patterns

### 1. Setup Commands
- Include prerequisites
- Step-by-step instructions
- Verification steps
- Troubleshooting

### 2. Development Commands
- Start development servers
- Run tools in watch mode
- Quick feedback loops

### 3. Quality Commands
- Run multiple checks
- Auto-fix when possible
- Report status clearly

### 4. Generation Commands
- Accept parameters
- Follow project conventions
- Include next steps

### 5. Deployment Commands
- Include safety checks
- Environment-specific steps
- Rollback procedures

## 🚀 Advanced Features

### Arguments Support
Commands can accept arguments that get appended to the prompt:

```bash
opencode custom component Button primary
# Becomes: [command content] + "Arguments: Button primary"
```

### Multi-Environment Commands
Create environment-specific variations:

```markdown
```/custom-deploy-staging Deploy to staging environment
[staging-specific instructions]
```

```/custom-deploy-production Deploy to production environment
[production-specific instructions]
```
```

### Command Chaining
Reference other commands in instructions:

```markdown
```/custom-full-deploy Complete deployment workflow
1. First run: /custom-lint
2. Then run: /custom-test
3. Finally: /custom-deploy production
```
```

## 🐛 Troubleshooting

### Commands Not Found
1. Check file location (must be in scanned directories)
2. Verify syntax (proper code block or comment format)
3. Ensure command name follows `/custom-name` pattern

### Commands Not Executing
1. Use `--dry-run` to see what would execute
2. Check for syntax errors in command content
3. Verify opencode can read the markdown files

### Performance Issues
1. Keep command content concise but detailed
2. Avoid very large command files
3. Split commands across multiple files if needed

## 📖 Examples from This Project

### Simple Command
```markdown
```/custom-clean Clean build artifacts
Remove all build artifacts and caches:

1. `npm run clean`
2. `rm -rf node_modules/.cache`
3. `npm install` (if needed)
```
```

### Complex Workflow Command
```markdown
```/custom-release Create a new release
Complete release workflow:

1. **Version bump**: `npm version [patch|minor|major]`
2. **Run tests**: `npm test`
3. **Build**: `npm run build`
4. **Tag**: `git tag v$(npm list --depth=0 | head -1 | cut -d@ -f2)`
5. **Push**: `git push origin main --tags`
6. **Deploy**: `npm run deploy:production`

**Post-release checklist:**
- [ ] Verify deployment
- [ ] Update documentation
- [ ] Notify team
- [ ] Monitor for issues
```
```

### Command with Parameters
```markdown
```/custom-feature Start new feature development
Create a new feature branch and set up development:

**For feature name provided as argument:**
1. `git checkout -b feature/[FEATURE_NAME]`
2. `npm install` (ensure deps are up to date)
3. `npm run dev`

**Development workflow:**
- Make small, focused commits
- Run `npm test` before pushing
- Create PR when ready for review
```
```

---

## 🎉 Happy commanding!

Custom commands make development workflows more consistent, documented, and efficient. Start with the basics and gradually add more sophisticated commands as your team's needs grow.