import ResultsItem from './ResultItem';
function ResultsGrid({ records }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 overflow-auto">
        {records.map((record) => (
          <ResultsItem key={record.objectid} record={record} />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
