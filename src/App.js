import logo from './logo.svg';
import './App.css';
import Search from './Components/Search'
import MoviesList from './Components/MoviesList';
import SearchDetails from './Components/SearchDetails';
import { useSelector } from 'react-redux';

function App() {
const displayDetails=useSelector(state=>state.displayDetails);
const displaySearch=useSelector(state=>state.displaySearch)

  return (
   <div className="relative h-full w-full">
     {!displayDetails&&<Search></Search>}
     {!displayDetails&&<MoviesList></MoviesList>}
     {displayDetails && <SearchDetails></SearchDetails> }
   </div>

  );
}

export default App;
