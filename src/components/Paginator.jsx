function Paginator() {
  return (
    <div className="flex flex-row justify-center">
      <div className="join">
        <button className="btn-sm join-item btn">1</button>
        <button className="btn-active btn-sm join-item btn">2</button>
        <button className="btn-sm join-item btn">3</button>
        <button className="btn-sm join-item btn">4</button>
      </div>
    </div>
  );
}

export default Paginator;