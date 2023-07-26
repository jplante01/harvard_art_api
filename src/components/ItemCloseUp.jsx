import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../contexts/AppContext';

function ItemCloseUp() {
  const { selected, data, closeUpOpen, setCloseUpOpen } =
    useContext(AppContext);
  console.log(data);
  const record = data && data ? data.records[selected] : null;
  const image = selected ? record.primaryimageurl : null;
  const title = record && record.title ? record.title : 'not provided';
  const description =
    record && record.description ? record.description : 'not provided';
  const url = record && record.url ? record.url : 'not provided';

  return (
    <Dialog
      open={closeUpOpen}
      onClose={() => {
        setCloseUpOpen(false);
      }}
    >
      <Dialog.Panel className="fixed inset-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="max-h-lg max-w-lg overflow-hidden rounded">
          <div className="relative">
            {data && <img src={image} alt={description} />}
            <button
              className="absolute right-2 top-2 text-gray-300 hover:text-white"
              onClick={() => {
                setCloseUpOpen(false);
              }}
            >
              <XMarkIcon className="h-8 w-8 text-secondary" />
            </button>
          </div>
          <div className="bg-secondary">
            <Dialog.Title className="pl-4 pt-2 text-secondary-content">
              Title: {title}
            </Dialog.Title>
            <Dialog.Description className="py-2 pl-4 text-secondary-content">
              Description: {description}
            </Dialog.Description>
            {/* <div className="mb-4 pl-4">
              <a href={url} target="_blank">
                {url}
              </a>
            </div> */}
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default ItemCloseUp;
