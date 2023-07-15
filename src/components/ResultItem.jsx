import { useState, useContext } from 'react';
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
    <div>
      <img
        src={image}
        alt={description}
        onClick={handleClick}
        onLoad={handleImageLoad}
      />
      {loading && (
      <div class="flex justify-center align-middle min-h-full">
        <span className="loading loading-ring loading-md" />
      </div>
      )}
    </div>
  );
}

export default ResultsItem;
