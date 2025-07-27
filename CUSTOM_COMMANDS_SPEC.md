# OpenCode Custom Commands Specification

## Overview

OpenCode supports custom slash commands that allow you to define reusable prompts and workflows. This system is compatible with Claude Code's command structure while extending it with OpenCode-specific features.

## Directory Structure & Priority

Commands are loaded from multiple locations with the following priority (highest to lowest):

1. **Personal OpenCode Commands**: `~/.opencode/commands/*.md`
2. **Personal Claude Commands**: `~/.claude/commands/*.md`
3. **Project OpenCode Commands**: `.opencode/commands/*.md`
4. **Project Claude Commands**: `.claude/commands/*.md`
5. **Embedded Commands**: `/custom-*` style in any markdown file

## Command File Format

### Basic Structure

```markdown
---
description: "Brief description of what this command does"
argument-hint: "[required] [optional]"
allowed-tools: ["bash", "edit", "read"]
---

Command content goes here.

You can use $ARGUMENTS for dynamic substitution.
```

### YAML Frontmatter

The frontmatter supports the following fields:

- **`description`**: Brief description shown in command listings
- **`argument-hint`**: Shown in help to indicate expected arguments
- **`allowed-tools`**: Array of tools this command is allowed to use

### Dynamic Content

#### Variable Substitution

- **`$ARGUMENTS`**: Replaced with all command arguments joined by spaces
- Example: `/fix button not working` → `$ARGUMENTS` becomes `"button not working"`

#### File References

- **`@filename`**: Include file contents in the command
- Requires `allowed-tools: ["read"]` in frontmatter
- **Security**: File access is restricted to project directories and safe patterns
- **Size Limit**: Files larger than 100KB are blocked
- **Path Validation**: Directory traversal and system file access is blocked

#### Bash Execution

- **`!command`**: Execute bash command and include output
- Requires `allowed-tools: ["bash"]` in frontmatter
- **Security**: Commands are validated against whitelist and dangerous patterns are blocked
- **Timeout**: Commands timeout after 30 seconds
- **Output Limit**: Output is truncated at 10KB

## Command Types

### Individual File Commands

Commands defined in their own `.md` files. The filename becomes the command name.

**File**: `.opencode/commands/setup.md`
**Command**: `/setup`

```markdown
---
description: "Initialize project setup"
---

Let's get your project running:
1. Install dependencies
2. Start dev server
3. Run tests
```

### Embedded Commands (Legacy)

Commands embedded in larger markdown files using code blocks or comments.

```markdown
# My Project Commands

```/custom-build Build the project
npm run build
npm run test
npm run lint
```

<!-- /custom-deploy Deploy to production -->
Deploy the application to production:
1. Run build
2. Run tests  
3. Deploy to server
<!-- /custom-deploy -->
```

## Built-in Command Conflicts

The following built-in commands are reserved and cannot be overridden:

- `/add-dir`, `/agents`, `/bug`, `/clear`, `/compact`, `/config`
- `/cost`, `/doctor`, `/help`, `/init`, `/login`, `/logout`
- `/mcp`, `/memory`, `/model`, `/permissions`, `/pr_comments`
- `/review`, `/status`, `/terminal-setup`, `/vim`

## Usage Examples

### Basic Command

**File**: `.opencode/commands/test.md`
```markdown
---
description: "Run project tests"
---

Run the test suite with coverage reporting:
1. `npm test`
2. `npm run test:coverage`
3. Open coverage report
```

**Usage**: `/test`

### Command with Arguments

**File**: `.opencode/commands/fix.md`
```markdown
---
description: "Fix specific issue"
argument-hint: "issue description"
allowed-tools: ["bash", "edit", "read"]
---

Fix the following issue: $ARGUMENTS

1. Analyze the problem
2. Implement solution
3. Test the fix
4. Document changes
```

**Usage**: `/fix button not responsive`

### Advanced Command with Tools

**File**: `.opencode/commands/analyze.md`
```markdown
---
description: "Analyze codebase metrics"
allowed-tools: ["bash", "read"]
---

Analyze codebase for: $ARGUMENTS

!find src -name "*.js" | wc -l
!cloc src/

Review files:
@src/main.js
@package.json

Generate report on: $ARGUMENTS
```

## CLI Usage

### List Commands
```bash
opencode custom --list
```

### Execute Command
```bash
opencode custom setup
opencode custom fix "login bug"
opencode custom deploy staging --dry-run
```

### Dry Run
```bash
opencode custom build --dry-run
```

## Chat Integration

Commands work seamlessly in chat sessions:

- Type `/setup` and press Enter
- The command is replaced with its content
- Arguments are processed: `/fix button issue`
- Dynamic content is substituted automatically

## Compatibility

### Claude Code Compatibility

- ✅ Individual `.md` files in `.claude/commands/`
- ✅ YAML frontmatter with `description`
- ✅ `$ARGUMENTS` substitution
- ✅ Built-in command conflict avoidance
- ✅ File references with `@` prefix (with security controls)
- ✅ Bash execution with `!` prefix (with security controls)

### OpenCode Extensions

- ✅ Multi-agent directory support (`.opencode/`, `.claude/`)
- ✅ Enhanced YAML frontmatter (`argument-hint`, `allowed-tools`)
- ✅ Embedded command fallback support
- ✅ Priority-based command resolution
- ✅ Comprehensive CLI interface

## Migration Guide

### From Embedded Commands

1. Create `.opencode/commands/` directory
2. Create individual `.md` files for each command
3. Move command content to files
4. Add YAML frontmatter for metadata
5. Update arguments to use `$ARGUMENTS`

### From Claude Code

1. Commands in `.claude/commands/` work automatically
2. Add `.opencode/commands/` for OpenCode-specific commands
3. Leverage enhanced frontmatter features
4. Use priority system for command overrides

## Best Practices

### Command Design

- **Single Purpose**: Each command should do one thing well
- **Clear Names**: Use descriptive command names
- **Helpful Descriptions**: Write clear descriptions and argument hints
- **Error Handling**: Include troubleshooting steps
- **Documentation**: Document expected arguments and behavior

### File Organization

- **Personal vs Project**: Use `~/.opencode/commands/` for personal workflows
- **Agent-Specific**: Use `.opencode/` for OpenCode-specific commands
- **Shared**: Use `.claude/commands/` for cross-agent compatibility
- **Fallback**: Use embedded commands for complex multi-command files

### Security

- **Tool Restrictions**: Use `allowed-tools` to limit command capabilities
- **Argument Validation**: Validate arguments in command content
- **File Access**: Be careful with file references and bash execution
- **Sensitive Data**: Never include secrets or credentials in commands

## Security Features

### Bash Command Security

- **Whitelist-based**: Only pre-approved safe commands are allowed
- **Pattern Blocking**: Dangerous patterns like `rm`, `sudo`, `curl` are blocked
- **Tool Permission**: Requires explicit `bash` in `allowed-tools`
- **Timeout Protection**: Commands timeout after 30 seconds
- **Output Limits**: Output truncated at 10KB to prevent DoS
- **Environment Isolation**: Limited environment variable access

### File Access Security

- **Path Validation**: Directory traversal (`../`) blocked
- **Safe Patterns**: Only project directories and common files allowed
- **System Protection**: System directories (`/etc`, `/var`) blocked
- **Size Limits**: Files over 100KB rejected
- **Tool Permission**: Requires explicit `read` in `allowed-tools`
- **Sensitive Files**: Keys, credentials, config files blocked

## Future Roadmap

- [ ] Glob pattern support for file references (`@src/*.js`)
- [ ] Template variables and expressions
- [ ] Command composition and chaining
- [ ] Integration with OpenCode agent system
- [ ] Command marketplace and sharing
- [ ] Auto-completion and IntelliSense
- [ ] Command versioning and updates
- [ ] Enhanced security audit logging

---

**Version**: 1.0  
**Last Updated**: January 2025  
**Status**: Stable