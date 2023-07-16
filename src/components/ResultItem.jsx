import { useState, useContext } from 'react';
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../contexts/AppContext';

function ResultsItem({ record, index }) {
  const [loading, setLoading] = useState(true);
  const { closeUpOpen, setCloseUpOpen, setSelected } = useContext(AppContext);
  const image = record.primaryimageurl ? record.primaryimageurl : '';
  const description = record.description ? record.description : 'description not provided';

  function handleClick() {
    setSelected(index);
    setCloseUpOpen(true);
    console.log(['fired', closeUpOpen]);
  }
  function handleImageLoad() {
    setLoading(false);
  }

  return (
    // <div>
    //   <div className="card bg-secondary shadow-xl rounded-lg">
    //     <figure className="px-2 pt-2">
    //       <img src={image} alt="art" />
    //     </figure>
    //     <div className="card-body">
    //       <h3 className="card-title text-secondary-content">{title}</h3>
    //       <h3 className="textsecondary-content">{culture}</h3>
    //       <h3 className="textsecondary-content">
    //         Century:
    //         {' '}
    //         {century}
    //       </h3>
    //     </div>
    //   </div>

    // </div>
    <div className="relative">
      <img
        src={image}
        alt={description}
        onClick={handleClick}
        onLoad={handleImageLoad}
        className="relative"
      />
      {loading && (
        <div className="flex min-h-full justify-center align-middle">
          <span className="loading loading-ring loading-md" />
        </div>
      )}
      <div className="absolute top-0 left-0 flex justify-center items-center h-full">
        <ViewfinderCircleIcon className="w-1/5" />
      </div>
    </div>
  );
}

export default ResultsItem;
