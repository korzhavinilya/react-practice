import React, { useEffect, useRef } from "react";

const SetFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input defaultValue="Не в фокусе" />
      <input ref={inputRef} defaultValue="В фокусе" />
    </div>
  );
};

export default SetFocus;
