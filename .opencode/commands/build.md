---
description: Build project for production (opencode version)
---

Building the React project for production deployment using opencode workflow:

1. **Clean previous builds**: `rm -rf dist/`
2. **Type check**: `npm run typecheck`
3. **Run tests**: `npm test`
4. **Build for production**: `npm run build`
5. **Preview build**: `npm run preview`

**Opencode-specific optimizations:**
- Bundle analysis with webpack-bundle-analyzer
- Source map generation for debugging
- Environment variable validation
- Performance metrics collection

**Deployment checklist:**
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Build completes successfully
- [ ] Bundle size under 1MB
- [ ] Performance score >90

**Next steps:**
- Deploy `dist/` folder to your hosting provider
- Configure CDN for static assets
- Set up monitoring and error tracking