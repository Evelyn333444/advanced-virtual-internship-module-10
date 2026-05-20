import React, { useState, useEffect } from 'react';

function App() {
  const [fontSize, setFontSize] = useState(16); // Default 16px

  // Side effect runs every time fontSize changes
  useEffect(() => {
    // Example: Applying font size to the entire document body
    document.body.style.fontSize = `${fontSize}px`;
    
    // Optional: Save to localStorage for persistence
    localStorage.setItem('userFontSize', fontSize);
  }, [fontSize]); 

  return (
    <div className="layout" style={{ display: 'flex' }}>
      {/* Sidebar with buttons */}
      <aside className="sidebar" style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <button onClick={() => setFontSize(prev => prev + 2)}>Increase Font</button>
        <button onClick={() => setFontSize(prev => prev - 2)}>Decrease Font</button>
      </aside>
       {/* Main Content */}
      <main className="content">
        <h1>Current Font Size: {fontSize}px</h1>
        <p>This text will change size based on the sidebar buttons.</p>
      </main>
    </div>
  );
}