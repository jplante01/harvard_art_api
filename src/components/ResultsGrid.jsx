import { useContext } from 'react';
import Masonry from 'react-masonry-css';
import ResultsItem from './ResultItem';
import { AppContext } from '../contexts/AppContext';
import Paginator from './Paginator';

function ResultsGrid() {
  const { data } = useContext(AppContext);
  const records = data && data.records ? data.records : null;
  const numPages = data && data.info.pages ? data.info.pages : null;
  const activePage = data && data.info.page ? data.info.page : null;
  const nextPage = data && data.info.next ? data.info.next : null;
  const prevPage = data && data.info.prev ? data.info.prev : null;
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="width-screen overflow-auto p-4">
      <Paginator
        numPages={numPages}
        activePage={activePage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
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
