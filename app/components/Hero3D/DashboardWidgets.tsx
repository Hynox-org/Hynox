'use client';
import { Html, Float } from '@react-three/drei';

export default function DashboardWidgets() {
  return (
    <>
      <Float rotationIntensity={0.2} floatIntensity={1} speed={1.2}>
        <Html transform position={[-4, 2, 0]} rotation={[0, 0.4, 0]} distanceFactor={3} zIndexRange={[100, 0]}>
          <div className="glass-widget widget-purple">
            <div className="widget-header">Total Revenue</div>
            <div className="widget-value">$84,231</div>
            <div className="widget-chart-up">↑ 18.2% vs last month</div>
          </div>
        </Html>
      </Float>
      
      <Float rotationIntensity={0.3} floatIntensity={1.5} speed={1.5}>
        <Html transform position={[3, 3, -1]} rotation={[0, -0.3, 0]} distanceFactor={3} zIndexRange={[100, 0]}>
          <div className="glass-widget widget-blue">
            <div className="widget-header">Active Users</div>
            <div className="widget-value">2,804</div>
            <div className="widget-bars">
               <div className="bar b1"></div>
               <div className="bar b2"></div>
               <div className="bar b3"></div>
               <div className="bar b4"></div>
            </div>
          </div>
        </Html>
      </Float>

      <Float rotationIntensity={0.1} floatIntensity={0.8} speed={1}>
        <Html transform position={[-1, -2, 2]} rotation={[-0.2, 0.1, 0]} distanceFactor={2.5} zIndexRange={[100, 0]}>
          <div className="glass-widget widget-pink">
            <div className="widget-header">AI Predictions</div>
            <div className="widget-value">Optimal</div>
            <div className="widget-status">System Health: 99.9%</div>
          </div>
        </Html>
      </Float>
    </>
  );
}
