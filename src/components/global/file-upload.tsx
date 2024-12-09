
// // import { UploadDropzone } from '@uploadthing/react';
// import { UploadDropzone } from '@/lib/uploadthing';
// import { FileIcon, X } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// type Props = {
//   apiEndpoint: 'agencyLogo' | 'avatar' | 'subaccountLogo';  // API endpoint options
//   onChange: (url?: string) => void;  // Function to handle URL change
//   value?: string;  // The uploaded file URL or path
// };

// const FileUpload = ({ apiEndpoint, onChange, value }: Props) => {
//   const type = value?.split('.').pop();  // Extract file extension for handling display

//   if (value) {
//     // If a value is already provided (i.e., file URL exists), show the preview or download link
//     return (
//       <div className="flex flex-col justify-center items-center">
//         {type && type !== 'pdf' ? (
//           // Display image preview if not a PDF
//           <div className="relative w-40 h-40">
//             <Image
//               src={value}
//               alt="uploaded image"
//               className="object-contain"
//               fill
//             />
//           </div>
//         ) : (
//           // Display PDF link if the file is a PDF
//           <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
//             <FileIcon />
//             <a
//               href={value}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
//             >
//               View PDF
//             </a>
//           </div>
//         )}
//         <button
//           onClick={() => onChange('')}  // Clears the file URL on button click
//           type="button"
//           className="text-red-500 mt-2"
//         >
//           <X className="h-4 w-4" />
//           Remove Logo
//         </button>
//       </div>
//     );
//   }

//   // Render file upload dropzone if no value is provided (i.e., no file uploaded)
//   return (
//     <div className="w-full bg-muted/30">
//       {/* <UploadDropzone
//         endpoint={apiEndpoint}
//         onClientUploadComplete={(res) => {
//           if (res?.[0]?.url) {
//             onChange(res[0].url);  // Set the uploaded file URL in the parent component
//           }
//         }}
//         onUploadError={(error: Error) => {
//           console.error('Upload Error:', error);  // Log any upload error
//         }}
//       /> */}
//        <UploadDropzone
//         endpoint={apiEndpoint}
//         onClientUploadComplete={(res) => {
//           onChange(res?.[0].url)
//         }}
//         onUploadError={(error: Error) => {
//           console.log(error)
//         }}
//       />
//     </div>
//   );
// };

// export default FileUpload;


import { UploadDropzone } from '@/lib/uploadthing';
import { FileIcon, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  apiEndpoint: 'agencyLogo' | 'avatar' | 'subaccountLogo';
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload: React.FC<Props> = ({ apiEndpoint, onChange, value }) => {
  const fileType = value?.split('.').pop()?.toLowerCase();

  if (value) {
    return (
      <div className="flex flex-col items-center">
        {fileType && fileType !== 'pdf' ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="Uploaded file"
              className="object-contain"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm text-indigo-500 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <button
          onClick={() => onChange('')}
          type="button"
          className="mt-2 text-red-500 flex items-center"
        >
          <X className="mr-1 h-4 w-4" />
          Remove File
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-muted/30 p-4 rounded-md">
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          const uploadedUrl = res?.[0]?.url;
          if (uploadedUrl) {
            onChange(uploadedUrl);
          }
        }}
        onUploadError={(error: Error) => {
          console.error('Upload Error:', error);
        }}
      />
    </div>
  );
};

export default FileUpload;
