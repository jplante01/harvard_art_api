import { useContext, } from 'react';
import { Dialog } from '@headlessui/react';
import { AppContext } from '../contexts/AppContext';

function ItemCloseUp() {
  const {
    selected, records, closeUpOpen, setCloseUpOpen
  } = useContext(AppContext);
  const record = records[selected];
  const image = selected ? record.primaryimageurl : null;
  const century = record && record.century ? record.century : 'not provided';
  const title = record && record.title ? record.title : 'not provided';
  const culture = record && record.culture ? record.culture : 'not provided';
  const description = record && record.description ? record.description : 'not provided';
  const url = record && record.url ? record.url : 'not provided';
  
  return (
    <Dialog
      open={closeUpOpen}
      onClose={() => {
        setCloseUpOpen(false);
      }}
    >
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="w-2/3 rounded overflow-hidden">
          {records && <img src={image} alt="image" />}
          <div className="bg-secondary">
            <Dialog.Title className="text-secondary-content pl-4 pt-2">
              Title: {title}
            </Dialog.Title>
            <Dialog.Description className="text-secondary-content pl-4 py-2">
              Description: {description}
            </Dialog.Description>
            <a href={url} target="_blank" className="py-2 pl-4">{url}</a>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ItemCloseUp;
