"use client";

import { useEffect, useRef } from "react";

interface Cube {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  speedRot: number;
  rotation: number;
  opacity: number;
  opacityDelta: number;
  hue: number;
}

export default function CubesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.parentElement?.offsetWidth || window.innerWidth;
    let height = canvas.parentElement?.offsetHeight || window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create cubes
    const isMobile = width < 768;
    const NUM_CUBES = isMobile ? 8 : 50;
    const maxSize = isMobile ? 50 : 80;
    const minSize = isMobile ? 20 : 30;
    const cubes: Cube[] = [];

    for (let i = 0; i < NUM_CUBES; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      cubes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        speedRot: (Math.random() - 0.5) * 0.015,
        rotation: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.2 + 0.05,
        opacityDelta: (Math.random() - 0.5) * 0.002,
        hue: Math.random() * 60 + 200, // Blue to cyan range
      });
    }

    function drawCube(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number,
      hue: number
    ) {
      const half = size / 2;
      const depth = size * 0.45;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Front face
      ctx.beginPath();
      ctx.rect(-half, -half, size, size);
      ctx.fillStyle = `hsla(${hue}, 70%, 55%, ${opacity * 0.3})`;
      ctx.fill();
      ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${opacity * 0.9})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Top face
      ctx.beginPath();
      ctx.moveTo(-half, -half);
      ctx.lineTo(-half + depth * 0.6, -half - depth * 0.6);
      ctx.lineTo(half + depth * 0.6, -half - depth * 0.6);
      ctx.lineTo(half, -half);
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue}, 60%, 65%, ${opacity * 0.2})`;
      ctx.fill();
      ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${opacity * 0.9})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Right face
      ctx.beginPath();
      ctx.moveTo(half, -half);
      ctx.lineTo(half + depth * 0.6, -half - depth * 0.6);
      ctx.lineTo(half + depth * 0.6, half - depth * 0.6);
      ctx.lineTo(half, half);
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue}, 50%, 40%, ${opacity * 0.25})`;
      ctx.fill();
      ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${opacity * 0.9})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      // Draw subtle grid lines in background
      ctx!.strokeStyle = "rgba(100, 120, 180, 0.04)";
      ctx!.lineWidth = 1;
      const gridSize = 80;
      for (let gx = 0; gx < width; gx += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(gx, 0);
        ctx!.lineTo(gx, height);
        ctx!.stroke();
      }
      for (let gy = 0; gy < height; gy += gridSize) {
        ctx!.beginPath();
        ctx!.moveTo(0, gy);
        ctx!.lineTo(width, gy);
        ctx!.stroke();
      }

      for (const cube of cubes) {
        // Update position
        cube.x += cube.speedX;
        cube.y += cube.speedY;
        cube.rotation += cube.speedRot;
        cube.opacity += cube.opacityDelta;

        // Bounce opacity
        if (cube.opacity > 0.3 || cube.opacity < 0.03) {
          cube.opacityDelta *= -1;
        }

        // Wrap around edges
        const margin = cube.size + 60;
        if (cube.x < -margin) cube.x = width + margin;
        if (cube.x > width + margin) cube.x = -margin;
        if (cube.y < -margin) cube.y = height + margin;
        if (cube.y > height + margin) cube.y = -margin;

        drawCube(ctx!, cube.x, cube.y, cube.size, cube.rotation, cube.opacity, cube.hue);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
