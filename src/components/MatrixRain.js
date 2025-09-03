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

    // Font size range - much bigger for better visibility
    const minFontSize = 18;
    const maxFontSize = 28;

    // Column data
    const columns = [];
    const columnCount = Math.floor(canvas.width / minFontSize * 0.3); // Better density for mobile

    // Initialize columns with random properties
    for (let i = 0; i < columnCount; i++) {
      columns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height, // Start above the screen at random positions
        fontSize: Math.floor(Math.random() * (maxFontSize - minFontSize) + minFontSize),
        speed: 2.5, // Fixed speed for consistent performance on mobile and desktop
        length: Math.floor(Math.random() * 8 + 5), // Shorter trails
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
      // Stronger fade to make trails shorter and less distracting
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each column
      columns.forEach((column) => {
        // Update column position
        column.y += column.speed;

        // Reset column if it's gone too far down
        if (column.y > canvas.height + column.length * column.fontSize) {
          column.y = -column.length * column.fontSize;
          column.x = Math.random() * canvas.width;
          column.speed = 2.5; // Keep consistent fixed speed

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
            // Bright head character - subtle green
            ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
            ctx.shadowColor = '#00FF00';
            ctx.shadowBlur = 4;
          } else {
            // Fade out characters as they go down the column - very subtle
            const alpha = Math.max(0.1, 0.5 - (i / column.length));
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
        zIndex: 1, // Above background but below content
        opacity: 0.2, // Higher opacity for better visibility on mobile
        pointerEvents: 'none',
        backgroundColor: 'transparent'
      }}
    />
  );
};

export default MatrixRain;