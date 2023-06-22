import { useState, useEffect } from 'react';
import ResultsItem from './ResultItem';
import testData from '../data/testing_data.json'; // TESTING: remove

function ResultsGrid() {
  const [records, setRecords] = useState(null);
  useEffect(()=>{
    setRecords(testData.records); // TESTING: remove
  },[])
  return (
    <div className="p-4 overflow-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {records && records.map((record) => (
          <ResultsItem key={record.objectid} record={record} />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
