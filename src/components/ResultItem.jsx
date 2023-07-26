/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useContext } from 'react';
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import { AppContext } from '../contexts/AppContext';

function ResultsItem({ record, index }) {
  const [loading, setLoading] = useState(true);
  const { setCloseUpOpen, setSelected } = useContext(AppContext);
  const image = record.primaryimageurl ? record.primaryimageurl : '';
  const description = record.description ? record.description : 'description not provided';
  const [isHovered, setIsHovered] = useState(false);

  function handleClick() {
    setSelected(index);
    setCloseUpOpen(true);
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
    <div
      className={`relative ${isHovered ? 'cursor-pointer' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
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
      <div
        onClick={handleClick}
        className="absolute left-0 top-0 flex h-full items-end justify-end"
      >
        <ViewfinderCircleIcon
          className={`mb-3 w-1/5 text-secondary  ${
            isHovered
              ? 'opacity-100'
              : 'opacity-0 transition-opacity duration-300'
          }`}
        />
      </div>
    </div>
  );
}

export default ResultsItem;
