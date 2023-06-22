import React, { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import ApiKeyInput from './ApiKeyInput';
import { AppContext } from '../contexts/AppContext'
function ApiKeyEntryDialog() {
  const [apiKeyDialogOpen, setApiKeyDialogOpen] = useState(true);
  const { apiKey, setApiKey } = useContext(AppContext);

  return (
    <Dialog open={apiKeyDialogOpen} onClose={() => setApiKeyDialogOpen(false)}>
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="rounded bg-white p-4 shadow-md">
          <Dialog.Title className="mb-4 text-lg font-bold">
            Please enter an api key
          </Dialog.Title>
          <ApiKeyInput
            setApiKey={setApiKey}
            setApiKeyDialogOpen={setApiKeyDialogOpen}
          />
          <Dialog.Description className="mb-4 text-gray-700">
            You can receive an api key through this link:
          </Dialog.Description>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ApiKeyEntryDialog;
