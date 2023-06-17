function ResultsItem({ record }) {
  const century = record.century ? record.century : 'not provided';
  const title = record.title ? record.title : 'none';
  const culture = record.culture ? record.culture : 'not provided';
  return (
    <div>
        <div className="card bg-secondary shadow-xl rounded-lg">
      {record.images[0] &&
        <figure className="px-2 pt-2">
          <img src={record.images[0].baseimageurl}></img>
        </figure>
      }
          <div className="card-body">
            <h3  className="card-title text-secondary-content">{title}</h3>
            <h3 className="textsecondary-content">{culture}</h3>
            <h3 className="textsecondary-content">Century: {century}</h3>
          </div>
        </div>
      
    </div>
  ) 
}

export default ResultsItem;