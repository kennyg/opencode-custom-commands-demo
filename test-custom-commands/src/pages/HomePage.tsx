import React from 'react'
import { useCounter } from '../hooks/useCounter'

export function HomePage() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div className="home-page">
      <h1>Welcome to My React App</h1>
      <p>This is a sample React application with TypeScript and Vite.</p>
      
      <div className="counter-demo">
        <h2>Counter Demo</h2>
        <p>Count: {count}</p>
        <div className="button-group">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}