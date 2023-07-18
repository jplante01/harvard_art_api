import { v4 as uuidv4 } from 'uuid';

function Paginator({ numPages, activePage, nextPage, prevPage }) {
  const elements = [];

  for (let i = 1; i <= numPages; i++) {
    if (activePage === i) {
      elements.push(
        <button key={uuidv4()} className="join-item btn btn-active">
          {i}
        </button>
      );
    } else {
      elements.push(
        <button key={uuidv4()} className="join-item btn">
          {i}
        </button>
      );
    }
  }
  return (
    <div className="mb-4 flex flex-row justify-center">
      <div className="join flex-wrap">{elements}</div>
    </div>
  );
}

export default Paginator;
