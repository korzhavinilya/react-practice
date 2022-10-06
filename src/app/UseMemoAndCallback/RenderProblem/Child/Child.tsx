import React, { memo } from 'react';

interface ChildProps {
  childNumber: number;
  incrementChild?: () => void;
}

function Child({ childNumber, incrementChild }: ChildProps) {
  console.log('Child render');
  return (
    <div>
      <button onClick={incrementChild}>Click to increment child number</button>
      <h1>childNumber: {childNumber}</h1>
    </div>
  );
}

// export default Child;
export default memo(Child);
