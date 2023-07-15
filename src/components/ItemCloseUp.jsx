import React, { useContext, } from 'react';
import { Dialog } from '@headlessui/react';
import { AppContext } from '../contexts/AppContext';

function ItemCloseUp() {
  const { selected, records, closeUpOpen, setCloseUpOpen} = useContext(AppContext);
  const image = selected ? records[selected].primaryimageurl : null;
  
  return (
    <Dialog
      open={closeUpOpen}
      onClose={() => {
        setCloseUpOpen(false);
      }}
    >
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        {records && <img src={image} alt="image" />}
        <span>hello</span>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ItemCloseUp;