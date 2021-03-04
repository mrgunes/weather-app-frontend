import './App.css';
import SearchBar from './components/SearchBar';
import WeatherStatus from './components/WeatherStatus'

function App() {
  return (
    <div>
        <h1 className='h1ForApp'>5-Day Weather Forecast</h1>
        <SearchBar/>
        <WeatherStatus/>
    </div>
  );
}

export default App;
