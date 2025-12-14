import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

const TargetCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveHandler = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', moveHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div className="target-cursor-dot" />
    </div>
  );
};

export default TargetCursor;
