"use client";
import React, { useState } from 'react';

export default function SellPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-shell" style={{ padding: '40px' }}>
      <div className="glow-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px', textAlign: 'center' }}>
        <h1 className="ai-text" style={{ fontSize: '2.5rem' }}>UPPLADDNING</h1>
        <p className="muted">Dra in bilder eller välj från din enhet</p>
        
        <div style={{ 
          marginTop: '40px', 
          border: '2px dashed var(--accent)', 
          borderRadius: '24px', 
          padding: '60px',
          cursor: 'pointer',
          position: 'relative'
        }} onClick={() => document.getElementById('fileInput')?.click()}>
          
          <input 
            type="file" 
            id="fileInput" 
            hidden 
            accept="image/*" 
            onChange={handleFileUpload} 
          />

          {selectedImage ? (
            <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%', borderRadius: '12px' }} />
          ) : (
            <div>
              <span style={{ fontSize: '50px' }}>📁</span>
              <p style={{ marginTop: '20px' }}>Klicka för att bläddra bland filer</p>
            </div>
          )}
        </div>

        {selectedImage && (
          <button className="primary-btn" style={{ marginTop: '40px', width: '100%' }}>
            STARTA AI-ANALYS
          </button>
        )}
      </div>
    </div>
  );
}
