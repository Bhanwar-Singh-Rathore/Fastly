


import React from 'react';

type ModalProps = {
  title?: string;
  subheading?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const CustomModal: React.FC<ModalProps> = ({ title, subheading, children, isOpen, onClose }) => {
  React.useEffect(() => {
    // Disable scrolling on the background when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // Reset scrolling on cleanup
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null; // Do not render the modal if it is not open

  return (
    <>
      {/* Background content is hidden */}
      <div aria-hidden={isOpen} className={`fixed inset-0 ${isOpen ? 'pointer-events-none' : ''}`}>
        {/* Your background content here */}
      </div>

      <div
        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        onClick={onClose}
      >
        {/* Modal Content */}
        <div
          className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 mx-4 sm:mx-6 sm:p-8 sm:max-w-md overflow-hidden"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Header */}
          {title && (
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              {subheading && <p className="text-sm text-gray-600">{subheading}</p>}
            </div>
          )}

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
