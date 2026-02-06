
import React, { useEffect, useRef } from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let star = null;
        let delayCounter = 0;
        const spawnDelay = 100; // Frames to wait before respawning (approx 5 seconds)

        class Star {
            constructor() {
                this.reset();
            }

            reset() {
                // Start position: Always Top-Left area, off-screen
                // We want it to traverse the whole screen diagonally
                // Start X varies slightly, Start Y varies slightly to cover different diagonals

                const startOffset = Math.random() * 200;

                // Pick a random starting point along the left or top edge
                if (Math.random() > 0.5) {
                    // Start from Left Edge (somewhere top half)
                    this.x = -100;
                    this.y = Math.random() * (height * 0.5);
                } else {
                    // Start from Top Edge (somewhere left half)
                    this.x = Math.random() * (width * 0.5);
                    this.y = -100;
                }

                this.len = 300; // Very long tail for "End to End" feel
                this.speed = 7; // Fast!
                this.size = 2; // Slightly thicker
                this.angle = Math.PI / 4; // 45 degrees perfect diagonal
                this.opacity = 0;
                this.fadeIn = true;
            }

            update() {
                // Linear movement
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);

                // Fade In / Out logic
                if (this.fadeIn) {
                    this.opacity += 0.05;
                    if (this.opacity >= 1) {
                        this.opacity = 1;
                        this.fadeIn = false;
                    }
                }

                // Check bounds (far off screen bottom-right)
                if (this.x > width + 300 || this.y > height + 300) {
                    return false; // Dead
                }
                return true; // Alive
            }

            draw() {
                ctx.save();

                // Gradient Tail
                const tailX = this.x - this.len * Math.cos(this.angle);
                const tailY = this.y - this.len * Math.sin(this.angle);

                const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(tailX, tailY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.size;
                ctx.lineCap = 'round';
                ctx.stroke();

                // Glowing Head
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();

                // Extra Glow
                ctx.shadowBlur = 10;
                ctx.shadowColor = "white";
                ctx.stroke();

                ctx.restore();
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Value Management
            if (!star) {
                delayCounter++;
                if (delayCounter > spawnDelay) {
                    star = new Star();
                    delayCounter = 0;
                }
            } else {
                const alive = star.update();
                if (alive) {
                    star.draw();
                } else {
                    star = null; // Star finished, start waiting again
                }
            }

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="shooting-stars-canvas" />;
};

export default ShootingStars;
