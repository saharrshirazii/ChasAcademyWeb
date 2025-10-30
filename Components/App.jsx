import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Button label="Click Me" onClick={() => alert('Hello!')} />
    </div>
  );
}

export default App;