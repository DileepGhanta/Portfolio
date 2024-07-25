import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    const numStars = 200;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1,
        alpha: Math.random(),
        alphaChange: Math.random() * 0.005 + 0.001 // Change rate for alpha
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        // Update the alpha value to create blinking effect
        star.alpha += star.alphaChange;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.alphaChange = -star.alphaChange;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    }

    function animate() {
      drawStars();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Background;
