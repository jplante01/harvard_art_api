import { v4 as uuidv4 } from 'uuid';

function Paginator({
  numPages, activePage, nextPage, prevPage
}) {
  const elements = [];

  for (let i = 1; i <= numPages; i++) {
    elements.push(
      <button key={uuidv4()} className="join-item btn">
        {i}
      </button>
    );
  }
  return (
    <div className="flex flex-row justify-center mb-4">
      <div className="join">
        {/* {numbers.map((el, idx) => (
          <button key={uuidv4()} className="join-item btn">
            {idx}
          </button>
          <button key={pageNumber} className="btn-active join-item btn">
            {pageNumber}
          </button>

        ))} */}
        {elements}
      </div>
    </div>
  );
}

export default Paginator;
