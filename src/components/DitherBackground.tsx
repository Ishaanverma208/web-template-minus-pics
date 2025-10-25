import { useEffect, useRef } from 'react';

const DitherBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Dither parameters
    const pixelSize = 2;
    const colorNum = 4;
    let time = 0;
    const waveSpeed = 0.05;
    const waveFrequency = 3;
    const waveAmplitude = 0.3;
    
    // Wave colors (blue/purple tones)
    const waveColor = [0.3, 0.5, 0.7];
    
    // Animation loop
    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      const cols = Math.ceil(width / pixelSize);
      const rows = Math.ceil(height / pixelSize);

      time += waveSpeed;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x / cols;
          const py = y / rows;
          
          // Create wave pattern
          const wave1 = Math.sin(px * waveFrequency + time) * waveAmplitude;
          const wave2 = Math.cos(py * waveFrequency + time * 0.7) * waveAmplitude;
          const wave = (wave1 + wave2) / 2;
          
          // Distance from center for gradient
          const dx = px - 0.5;
          const dy = py - 0.5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Combine wave and distance
          const value = Math.max(0, Math.min(1, 0.5 + wave - dist * 0.8));
          
          // Dither effect
          const dither = (x % 2) === (y % 2) ? 0.1 : -0.1;
          const ditherValue = Math.floor((value + dither) * colorNum) / colorNum;
          
          // Apply color
          const r = Math.floor(ditherValue * waveColor[0] * 255);
          const g = Math.floor(ditherValue * waveColor[1] * 255);
          const b = Math.floor(ditherValue * waveColor[2] * 255);
          
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default DitherBackground;
