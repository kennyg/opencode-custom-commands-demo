import React from 'react'

export function AboutPage() {
  return (
    <div className="about-page">
      <h1>About This Demo</h1>
      <p>
        This is a demo React application showcasing OpenCode custom commands
        for streamlined development workflows.
      </p>
      <h2>Features</h2>
      <ul>
        <li>20+ custom commands for common development tasks</li>
        <li>React + TypeScript setup</li>
        <li>Vite build tooling</li>
        <li>ESLint and Prettier configuration</li>
        <li>Testing with Vitest</li>
      </ul>
    </div>
  )
}