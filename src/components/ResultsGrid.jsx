import ResultsItem from "./ResultItem";
function ResultsGrid ({ records }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
      </div>
    </div>
  )
}

export default ResultsGrid;