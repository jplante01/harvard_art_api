import ResultsItem from "./ResultItem";
function ResultsGrid ({ records }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {records.map(record => (
          <ResultsItem key={record.objectid} record={record} />
        ))}
      </div>
    </div>
  )
}

export default ResultsGrid;