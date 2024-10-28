import React from 'react';
import './App.css';

function App() {
  const [items, setItems] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    // Check type of items before adding
    console.log('items:', items, 'Type:', typeof items);

    // Add a new item to the array
    setItems((prevItems) => {
      // Check if prevItems is indeed an array
      if (!Array.isArray(prevItems)) {
        console.error('prevItems is not an array!');
        return ['Thing 1', 'Thing 2']; // Reset to default array if error occurs
      }
      return [...prevItems, `Thing ${prevItems.length + 1}`];
    });
  }

  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {Array.isArray(items) && items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
