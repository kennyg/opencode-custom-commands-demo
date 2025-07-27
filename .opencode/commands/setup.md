---
description: Get started with development (opencode version)
---

Welcome to the opencode development environment! Let's get this React project running:

1. **Install dependencies**: Run `npm install` to install all required packages
2. **Start development server**: Run `npm run dev` to start Vite dev server  
3. **Open in browser**: Navigate to http://localhost:5173
4. **Verify setup**: You should see the homepage with a working counter

**Opencode-specific setup:**
- Configure opencode workspace settings
- Set up project-specific agents
- Initialize custom command registry
- Configure development hooks

**Next steps:**
- Try editing `src/pages/HomePage.tsx` to see hot reload in action
- Run `npm run typecheck` to verify TypeScript setup
- Run `npm test` to execute the test suite
- Use `opencode custom --list` to see available commands

**Troubleshooting:**
- If port 5173 is busy, Vite will automatically use the next available port
- Make sure you have Node.js 18+ installed  
- If you encounter dependency issues, try deleting `node_modules` and running `npm install` again