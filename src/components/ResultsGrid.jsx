import { useContext } from 'react';
import ResultsItem from './ResultItem';
import { AppContext } from '../contexts/AppContext';

function ResultsGrid() {
  const { records } = useContext(AppContext);

  return (
    <div className="overflow-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {console.log(records)}
        {records
          && records.map((record) => (
            <ResultsItem key={record.objectid} record={record} />
          ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
