import { useContext } from 'react';
import Masonry from 'react-masonry-css';
import ResultsItem from './ResultItem';
import { AppContext } from '../contexts/AppContext';

function ResultsGrid() {
  const { records } = useContext(AppContext);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="overflow-auto p-4 width-screen">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {records &&
          records.map(
            (record, idx) =>
              record.primaryimageurl && (
                <ResultsItem
                  key={record.objectid}
                  record={record}
                  index={idx}
                />
              )
          )}
      </Masonry>
    </div>
  );
}

export default ResultsGrid;
