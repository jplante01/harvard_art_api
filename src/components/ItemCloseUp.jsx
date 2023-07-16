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

  console.log([selected, image]);
  return (
    <Dialog
      open={closeUpOpen}
      onClose={() => {
        setCloseUpOpen(false);
      }}
    >
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div>
          {records && <img src={image} alt="image" />}
          <div>
            <Dialog.Title>Title: {title}</Dialog.Title>
            <Dialog.Description>Description: {description}</Dialog.Description>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ItemCloseUp;
