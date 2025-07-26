# My React App - Custom Commands Demo

This is a demo React application showcasing **opencode custom commands** for streamlined development workflows.

## 🚀 Custom Commands Available

This project includes 20+ custom commands that demonstrate real-world development scenarios. You can execute these commands in two ways:

### Via opencode CLI
```bash
# List all available commands
opencode custom --list

# Execute a specific command
opencode custom setup
opencode custom dev
opencode custom lint
```

### Via opencode Chat Interface
Simply type the command in your opencode chat session:
```
/custom-setup
/custom-dev
/custom-lint
```

## 📋 Command Categories

### 🚀 **Quick Start**
- `/custom-setup` - Complete project setup guide
- `/custom-dev` - Start development workflow

### 🔧 **Code Quality**
- `/custom-lint` - Run all quality checks
- `/custom-fix` - Auto-fix code issues
- `/custom-analyze` - Project health metrics

### 🧪 **Testing**
- `/custom-test` - Run tests with options
- `/custom-coverage` - Generate coverage reports

### 🎨 **Code Generation**
- `/custom-component` - Generate React components
- `/custom-hook` - Generate custom hooks

### 🏗️ **Build & Deploy**
- `/custom-build` - Production build process
- `/custom-docker` - Containerization guide
- `/custom-deploy` - Deployment workflows

### 🐛 **Debugging**
- `/custom-debug` - Debug common issues
- `/custom-refactor` - Refactoring guidelines

### 🔄 **Git Workflow**
- `/custom-commit` - Conventional commits
- `/custom-pr` - Pull request preparation
- `/custom-review` - Code review checklist

### 🛠️ **Maintenance**
- `/custom-update` - Update dependencies
- `/custom-onboard` - New team member guide

## 💡 Why Custom Commands?

Custom commands provide several benefits:

1. **Consistency**: Everyone on the team follows the same processes
2. **Documentation**: Commands serve as living documentation
3. **Efficiency**: Complex workflows become single commands
4. **Onboarding**: New team members learn workflows faster
5. **Best Practices**: Enforce coding standards and conventions

## 🎯 Try It Out!

1. **Start with setup**: `/custom-setup`
2. **Begin development**: `/custom-dev`
3. **Check code quality**: `/custom-lint`
4. **Generate a component**: `/custom-component Button`
5. **Prepare for deployment**: `/custom-build`

## 📁 Command Files

Commands are defined in:
- `CUSTOM_COMMANDS.md` - Main development commands
- `.opencode/project-commands.md` - Project-specific workflows

## 🛠️ Project Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Styling**: CSS Modules
- **Deployment**: Docker + Static hosting

## 📚 Learning Resources

Each custom command includes:
- Step-by-step instructions
- Best practices
- Troubleshooting tips
- Next steps guidance
- Real command examples

## 🤝 Contributing

To add new custom commands:

1. Add them to `CUSTOM_COMMANDS.md` or `.opencode/project-commands.md`
2. Use the format: `` ```/custom-name Description ``
3. Include detailed instructions and examples
4. Test the command with `opencode custom name --dry-run`

## 📖 Custom Commands Syntax

```markdown
<!-- Code block style -->
```/custom-name Brief description
Detailed instructions here...
Multiple lines supported...
```

<!-- HTML comment style -->
<!-- /custom-name Brief description -->
Detailed instructions here...
Multiple lines supported...
<!-- /custom-name -->
```

## 🔗 Related Links

- [opencode Documentation](https://opencode.ai)
- [Custom Commands Guide](./docs/custom-commands.md)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://typescriptlang.org)

---

**Happy coding with custom commands! 🎉**