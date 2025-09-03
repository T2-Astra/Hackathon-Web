import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Characters to display (Japanese katakana and other symbols for authentic Matrix effect)
    const chars = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Font size range - increased for better visibility
    const minFontSize = 12;
    const maxFontSize = 20;
    
    // Column data
    const columns = [];
    const columnCount = Math.floor(canvas.width / minFontSize * 1.2); // More dense
    
    // Initialize columns with random properties
    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height, // Start above the screen at random positions
        fontSize: Math.floor(Math.random() * (maxFontSize - minFontSize) + minFontSize),
        speed: Math.random() * 3 + 1.5, // Random speed between 1.5-4.5 (faster)
        length: Math.floor(Math.random() * 20 + 10), // Longer trails
        characters: [],
        brightHead: true // All columns have bright heads for better visibility
      });
      
      // Generate random characters for this column
      for (let j = 0; j < columns[i].length; j++) {
        columns[i].characters.push(chars.charAt(Math.floor(Math.random() * chars.length)));
      }
    }
    
    // Function to draw the matrix rain
    const draw = () => {
      // Set a semi-transparent black background to create trail effect
      // Using a more opaque background for stronger fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw each column
      columns.forEach((column, columnIndex) => {
        // Update column position
        column.y += column.speed;
        
        // Reset column if it's gone too far down
        if (column.y > canvas.height + column.length * column.fontSize) {
          column.y = -column.length * column.fontSize;
          column.x = Math.random() * canvas.width;
          column.speed = Math.random() * 3 + 1.5; // Keep consistent with initialization
          
          // Regenerate characters
          for (let j = 0; j < column.length; j++) {
            column.characters[j] = chars.charAt(Math.floor(Math.random() * chars.length));
          }
        }
        
        // Draw each character in the column
        for (let i = 0; i < column.length; i++) {
          // Calculate position
          const y = column.y - i * column.fontSize;
          
          // Skip if character is above the screen
          if (y < 0) continue;
          
          // Set font with bold for better visibility
          ctx.font = `bold ${column.fontSize}px monospace`;
          
          // Determine character color based on position in column
          if (i === 0 && column.brightHead) {
            // Bright head character - classic Matrix bright green with glow effect
            ctx.fillStyle = '#00FF00';
            ctx.shadowColor = '#00FF00';
            ctx.shadowBlur = 10;
          } else {
            // Fade out characters as they go down the column - classic Matrix green glow
            // Using a stronger alpha for better visibility
            const alpha = Math.max(0.2, 1 - (i / column.length));
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.shadowBlur = 0;
          }
          
          // Draw the character
          ctx.fillText(column.characters[i], column.x, y);
          
          // Randomly change characters as they fall (more frequently for dynamic effect)
          if (i > 0 && Math.random() > 0.95) {
            column.characters[i] = chars.charAt(Math.floor(Math.random() * chars.length));
          }
        }
      });
    };
    
    // Animation loop
    const animationFrame = () => {
      draw();
      requestAnimationFrame(animationFrame);
    };
    
    const animation = requestAnimationFrame(animationFrame);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="matrix-rain"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Changed from -1 to 1 to ensure it's visible above the background
        opacity: 1, // Full opacity for maximum visibility
        pointerEvents: 'none',
        backgroundColor: 'transparent' // Transparent background to let the effect be visible
      }}
    />
  );
};

export default MatrixRain;