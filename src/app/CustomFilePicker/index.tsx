import { ChangeEvent, useRef } from 'react';

export default function CustomFilePicker() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event?.target?.files?.[0];
    if (fileUploaded) {
      const formData = new FormData();
      formData.append('file', fileUploaded);
    }
    console.log('event?.target', event?.target?.files);
  };

  return (
    <>
      <button onClick={handleClick}>Upload a file</button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
        multiple
      />
    </>
  );
}
