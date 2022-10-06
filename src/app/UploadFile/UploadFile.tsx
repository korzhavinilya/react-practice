import axios from 'axios';
import React, { useState } from 'react';

export default function UploadFile() {
  const [selectedFiles, setSelectedFiles] = useState();
  const [progress, setProgress] = useState(0);

  return (
    <div>
      {`${progress}%`}
      <div>
        <input
          type="file"
          onChange={async (event: any) => {
            const file = event.target.files[0];
            console.log('file', file);
            const formData = new FormData();
            formData.append('files[]', file, file.name);
            await axios.post('http://localhost:8400/api/files', formData);
          }}
        />
      </div>
    </div>
  );
}
