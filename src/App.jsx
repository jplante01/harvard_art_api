import { useEffect, useState } from 'react';
import ResultsGrid from './components/ResultsGrid'
import testData from './data/testing_data.json' // TESTING: remove

function App() {
  const [input, setInput] = useState('cat');
  const [resource, setResource] = useState('object');
  const [data, setData] = useState(null);
  const apiKey = '5e0a18c4-3d19-439b-abd9-7ed55f755093';
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
  useEffect(() => {
    setData(testData);
  }, [])
  // console.log(`${apiUrl}${input}&apikey=${apiKey}`);
  console.log(data);
  return (
    <>
      <div className="grid min-h-screen grid-rows-layout bg-theme-50">
        <div className="min-h-80px w-full row-start-1 row-end-2">
          <div className="navbar fixed top-0 min-h-[80px] w-full bg-sky-100 bg-theme-300">
            <a className="text-xl">Harvard</a>
          </div>
        </div>

        <div id="main">{data && <ResultsGrid records={data.records} />}</div>
        <footer className="flex flex-col items-center justify-center">
          <div className="space-around flex flex-row gap-8">
            <a>Home</a>
            <a>Friends</a>
            <a>Support</a>
          </div>

          <span>copyright 2023</span>
        </footer>
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