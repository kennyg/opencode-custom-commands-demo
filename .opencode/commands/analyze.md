---
description: Analyze project structure and metrics safely
argument-hint: "[focus area]"
allowed-tools: ["bash", "read"]
---

I'll analyze the project structure and provide metrics for: $ARGUMENTS

**Project Overview:**
!pwd
!ls -la

**File Count Analysis:**
!find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | wc -l

**Git Information:**
!git status
!git log --oneline -5

**Package Information:**
@package.json

**Project Documentation:**
@README.md

**Analysis Focus:** $ARGUMENTS

This analysis includes:
- Current directory structure
- File count by type
- Git repository status
- Package configuration
- Project documentation

All commands executed are security-validated and safe for project analysis.