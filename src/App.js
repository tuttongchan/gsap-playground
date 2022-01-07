import { useRef, useEffect } from 'react';
import './index.css';
import { gsap } from 'gsap';

function App() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: '+=360', delay: '.1', y: 500 });
  });

  return (
    <div>
      <div className="box" ref={boxRef}>
        Hello
      </div>
    </div>
  );
}

export default App;
