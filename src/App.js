
import './App.css';
import './Cards.css'
import Fetch from './components/Fetch'
import AxiosFetch from './components/AxiosFetch';
import AsyncAwait from './components/AsyncAwait';
import CustomHook from './components/CustomHook';

function App() { 
  return (
    <div className="App">

      {/* <Fetch />
      <AxiosFetch /> */}
      <AsyncAwait />
      {/* <CustomHook /> */}
      
    </div>
  );
}

export default App;
