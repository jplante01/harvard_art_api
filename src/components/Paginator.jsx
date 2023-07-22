import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

function Paginator({ numPages, activePage, nextPage, prevPage }) {
  const { url, setUrl } = useContext(AppContext);

  const elements = [];

  function handleClick(e) {
    console.log(url);
    const pageNumber = e.target.textContent;
    const requestUrl = `${url.slice(0, -1)}${pageNumber}`;
    console.log(requestUrl);
    setUrl(requestUrl);
  }

  for (let i = 1; i <= numPages; i++) {
    if (activePage === i) {
      elements.push(
        <button key={uuidv4()} className="btn-active join-item btn" onClick={handleClick}>
          {i}
        </button>
      );
    } else {
      elements.push(
        <button key={uuidv4()} className="join-item btn" onClick={handleClick}>
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
