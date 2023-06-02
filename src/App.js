import './App.css';
import Homescreen from './Components/HomeScreen/Homescreen';
import { Routes ,Route } from 'react-router-dom';
import Showscreen from './Components/ShowScreen/Showscreen';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Homescreen/>}/>
      <Route path='/show/:imdb' element={<Showscreen/>}/>

    </Routes>
    </div>
  );
}

export default App;
