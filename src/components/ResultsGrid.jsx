import { useState, useEffect, useContext } from 'react';
import ResultsItem from './ResultItem';
import testData from '../data/testing_data.json'; // TESTING: remove
import { AppContext } from '../contexts/AppContext';

function ResultsGrid() {
  const [records, setRecords] = useState(null);
  const { formInput, apiKey } = useContext(AppContext);
  const apiUrl = 'https://api.harvardartmuseums.org/object?';
  const resource = 'object';
  // useEffect(() => {
  //   setRecords(testData.records); // TESTING: remove
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}${resource}=${formInput}&apikey=${apiKey}`);
        const jsonData = await response.json();
        const fetchedRecords = jsonData.records;
        console.log(fetchedRecords);
        setRecords(fetchedRecords);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(formInput) {
      fetchData();
    }
  }, [formInput]);
  return (
    <div className="overflow-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {records &&
          records.map((record) => (
            <ResultsItem key={record.objectid} record={record} />
          ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
