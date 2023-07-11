import React, { useContext, useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import ApiKeyInput from './ApiKeyInput';
import { AppContext } from '../contexts/AppContext';

function ApiKeyEntryDialog() {
  const [apiKeyDialogOpen, setApiKeyDialogOpen] = useState(true);
  const { apiKey, setApiKey } = useContext(AppContext);

  useEffect(() => {
    const storedApiKey = localStorage.getItem('apiKey');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setApiKeyDialogOpen(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('apiKey', apiKey);
  }, [apiKey]);

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
          <Dialog.Description className="mb-3 mt-2 text-gray-700">
            You can request an api key
            <a className="text-accent ml-1" href="https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform">
              here
            </a>
          </Dialog.Description>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ApiKeyEntryDialog;
