/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useContext } from 'react';
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../contexts/AppContext';

function ResultsItem({ record, index }) {
  const [loading, setLoading] = useState(true);
  const { closeUpOpen, setCloseUpOpen, setSelected } = useContext(AppContext);
  const image = record.primaryimageurl ? record.primaryimageurl : '';
  const description = record.description ? record.description : 'description not provided';
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    setSelected(index);
    setCloseUpOpen(true);
    console.log('clicked')
  }
  function handleImageLoad() {
    setLoading(false);
  }
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className={`relative ${isHovered ? 'cursor-pointer' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img
        src={image}
        alt={description}
        onLoad={handleImageLoad}
        className="relative"
      />
      {loading && (
        <div className="flex min-h-full justify-center align-middle">
          <span className="loading loading-ring loading-md" />
        </div>
      )}
      <div onClick={handleClick} className="absolute top-0 left-0 flex justify-center items-center h-full">
        <ViewfinderCircleIcon className={`text-secondary w-1/5 ${isHovered ? 'block cursor-pointer' : 'hidden'}`} />
      </div>
    </div>
  );
}

export default ResultsItem;
