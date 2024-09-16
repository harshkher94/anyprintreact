import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [generatedDesigns, setGeneratedDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (text.trim()) {
      setIsLoading(true);
      try {
        const response = await axios.post('http://localhost:5000/api/generate', { prompt: text });
        setGeneratedDesigns(prev => [...prev, { text, imageUrl: response.data.image_url }]);
        setText('');
      } catch (error) {
        console.error('Error generating design:', error);
        alert('Failed to generate design. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="App">
      <h1>T-Shirt Design Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter T-shirt text"
      />
      <button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
      
      {generatedDesigns.length > 0 && (
        <div className="designs">
          <h2>Generated Designs</h2>
          <div className="design-grid">
            {generatedDesigns.map((design, index) => (
              <div key={index} className="design-item">
                <img src={design.imageUrl} alt={`T-shirt design ${index + 1}`} />
                <p>{design.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;