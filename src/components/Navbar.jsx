import SearchForm from './SearchForm';

function Navbar() {
  return (
    <div className="min-h-80px row-start-1 row-end-2 w-full">
      <div className="navbar top-0 flex min-h-[80px] w-full items-center bg-primary px-4">
        <span className="text-3xl">Harvard Museum Image Browser</span>
        <SearchForm />
      </div>
    </div>
  );
}

export default Navbar;
