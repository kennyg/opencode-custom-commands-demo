---
description: Create a GitHub gist with session content
argument-hint: "[title] [public|private]"
allowed-tools: ["bash"]
---

I'll create a GitHub gist with our current session content. $ARGUMENTS

**Steps:**
1. **Export session**: Extract the conversation history and relevant context
2. **Format content**: Structure it as a readable markdown document
3. **Create gist**: Use GitHub CLI to create the gist
4. **Share link**: Provide the gist URL for easy sharing

**Gist will include:**
- Conversation summary
- Key code snippets discussed
- Commands executed
- Files modified
- Project context

**Options:**
- Title: $ARGUMENTS (or auto-generated if not provided)
- Visibility: Based on your preference (default: private)

**Requirements:**
- GitHub CLI must be installed (`gh auth status` to check)
- Valid GitHub authentication
- Session content available

Let me proceed with creating the gist...