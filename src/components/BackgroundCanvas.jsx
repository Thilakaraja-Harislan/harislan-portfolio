import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Particles Setup
    const particles = [];
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
    const connectionDistance = 120;
    const mouse = { x: null, y: null, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 1.5;
        this.color = Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.4)' : 'rgba(168, 85, 247, 0.3)';
      }

      update() {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse interaction (repel effect)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            // Push away from mouse
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * force * 1.5;
            this.y += Math.sin(angle) * force * 1.5;
          }
        }
      }

      draw() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // In light mode, use indigo/sky blue particles with slightly higher opacity for contrast
        const activeColor = isLight 
          ? (this.color.includes('cyan') ? 'rgba(14, 165, 233, 0.45)' : 'rgba(79, 70, 229, 0.35)')
          : this.color;
        
        ctx.fillStyle = activeColor;
        ctx.shadowBlur = isLight ? 4 : 10;
        ctx.shadowColor = activeColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Track mouse
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      // Draw static background glow highlights
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.2, 50,
        canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.4
      );
      gradient1.addColorStop(0, isLight ? 'rgba(79, 70, 229, 0.04)' : 'rgba(99, 102, 241, 0.05)');
      gradient1.addColorStop(1, isLight ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.8, 50,
        canvas.width * 0.8, canvas.height * 0.8, canvas.width * 0.4
      );
      gradient2.addColorStop(0, isLight ? 'rgba(124, 58, 237, 0.03)' : 'rgba(168, 85, 247, 0.04)');
      gradient2.addColorStop(1, isLight ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update & Draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * (isLight ? 0.2 : 0.15);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isLight ? `rgba(79, 70, 229, ${alpha})` : `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 h-full w-full bg-[#070810] pointer-events-none"
    />
  );
}
