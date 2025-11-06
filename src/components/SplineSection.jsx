import Spline from '@splinetool/react-spline';

export default function SplineSection({ scene, className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black pointer-events-none" />
    </div>
  );
}
