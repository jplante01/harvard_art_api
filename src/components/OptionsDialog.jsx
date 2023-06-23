import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

function OptionsDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="rounded bg-white p-4 shadow-md">
          <Dialog.Title className="mb-4 text-lg font-bold">
            Deactivate account
          </Dialog.Title>
          <Dialog.Description className="mb-4 text-gray-700">
            This will permanently deactivate your account
          </Dialog.Description>

          <p className="mb-4 text-gray-700">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button
            className="btn-primary btn mr-2"
            onClick={() => setIsOpen(false)}
          >
            Deactivate
          </button>
          <button
            className="btn-secondary btn"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default OptionsDialog;
