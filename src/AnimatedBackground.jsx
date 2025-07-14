import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    // Resize canvas to fill container
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = 80;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Speed 12 -> 0.5 for slower movement
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 8 + 2, // Random size 2-10
          opacity: 0.4 // Increased from 0.3 to 0.4
        });
      }
    };

    // Draw particles and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 300) { // line_linked distance: 300
            const opacity = (1 - distance / 300) * 0.25; // Increased from 0.15 to 0.25
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`; // Changed to cyan
            ctx.lineWidth = 1.5; // Slightly thinner lines
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(particle => {
        // Create cyan gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(6, 182, 212, ${particle.opacity * 0.6})`); // Increased from 0.4 to 0.6
        gradient.addColorStop(1, `rgba(34, 211, 238, ${particle.opacity * 0.2})`); // Increased from 0.1 to 0.2
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Update particle positions
    const update = () => {
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges (out_mode: "out" -> bounce behavior)
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
      });
    };

    // Animation loop
    const animate = () => {
      update();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle click to add particles (onclick mode: "push")
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add 4 new particles (push particles_nb: 4)
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 50,
          y: y + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 8 + 2,
          opacity: 0.4 // Increased opacity for new particles too
        });
      }
    };

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    canvas.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', () => {
        resizeCanvas();
        initParticles();
      });
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-50"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}
