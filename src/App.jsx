import ResultsGrid from './components/ResultsGrid';
import Paginator from './components/Paginator';
import ApiKeyEntryDialog from './components/ApiKeyEntryDialog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemCloseUp from './components/ItemCloseUp';

function App() {
  return (
    <div className="grid min-h-screen grid-rows-layout bg-base-100">
      <Navbar />
      <div id="main">
        <Paginator />
        <ResultsGrid />
      </div>
      <Footer />
      <ApiKeyEntryDialog />
      <ItemCloseUp />
    </div>
  );
}

export default App;

// data.records => array of record objects
// record.objectid => database id?
// record.images => array of images inside each record
// record.primaryimageurl => ?
// record.images[n].iiifbaseuri => url for an iiif request
//
