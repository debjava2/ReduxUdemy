import './styles.css';
import MoviePlaylist from './component/MoviePlaylist';
import SongPlaylist from './component/SongPlaylist';
import { useDispatch} from "react-redux";
import { reset } from './store/action';



function App() {
  const dispatch=useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
    //
  };
  return (
    <div className="container is-fluid">
    <button onClick={() => handleResetClick()} className="button is-danger">
      Reset Both Playlists
    </button>
    <hr />
    <MoviePlaylist />
    <hr />
    <SongPlaylist />
  </div>
  );
}

export default App;
