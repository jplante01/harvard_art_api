import { useEffect, useState } from 'react';
import ResultsGrid from './components/ResultsGrid'
import testData from './data/testing_data.json' // TESTING: remove
import SearchForm from './components/SearchForm';
import Paginator from './components/Paginator'
import OptionsMenu from './components/OptionsMenu';
import OptionsDialog from './components/OptionsDialog'
import ApiKeyEntryDialog from './components/ApiKeyEntryDialog';

function App() {

  const [resource, setResource] = useState('object');
  const [data, setData] = useState(null);
  // setData(testData);
  // const apiKey = '5e0a18c4-3d19-439b-abd9-7ed55f755093';
  const apiUrl = 'https://api.harvardartmuseums.org/object?';

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}${resource}=${input}&apikey=${apiKey}`);
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  console.log('App rendered');
  return (
    <>
      <div className="grid min-h-screen grid-rows-layout bg-base-100">
        <div className="min-h-80px w-full row-start-1 row-end-2">
          <div className="navbar px-4 top-0 min-h-[80px] w-full bg-primary flex items-center">
            <a className="text-3xl ">Harvard</a>
            <SearchForm />
            <OptionsMenu />
          </div>
        </div>

        <div id="main">
          <Paginator />
          {data && <ResultsGrid />}
          </div>
        <footer className="flex flex-col items-center justify-center">
          <div className="space-around flex flex-row gap-8">
            <a>Home</a>
            <a>Friends</a>
            <a>Support</a>
          </div>

          <span>copyright 2023</span>
        </footer>
      <ApiKeyEntryDialog />
      </div>
    </>
  ); 

}

export default App;

// data.records => array of record objects
// record.objectid => database id?
// record.images => array of images inside each record
// record.primaryimageurl => ?
// record.images[n].iiifbaseuri => url for an iiif request
// 