import React, { useEffect, useState } from "react";

const Resizer = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div>
      width: {width}
      <br />
      height: {height}
    </div>
  );
};

export default Resizer;
