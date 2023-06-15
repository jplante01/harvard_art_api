function ResultsItem({ record }) {
  return (
    <div>
      {record.images[0] &&
        <img src={record.images[0].baseimageurl}></img>
      }
      <h3>Century: {record.century}</h3>
    </div>
  ) 
}

export default ResultsItem;