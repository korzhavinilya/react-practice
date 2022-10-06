import { FormEvent, useRef } from "react";
import { useKey } from "rooks";

type InputType = {
  value: string;
  onInput: (value: string) => void;
  onDelete: () => void;
};

const Input = ({ value, onInput, onDelete }: InputType) => {
  const inputRef = useRef(null);
  useKey(["Delete"], onDelete, {
    target: inputRef,
  });

  function handleOnInput(e: FormEvent<HTMLInputElement>) {
    onInput(e.currentTarget.value);
  }

  return <input ref={inputRef} value={value} onInput={handleOnInput} />;
};

export { Input };
