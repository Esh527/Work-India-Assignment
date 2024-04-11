

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/HomeComponent/Home';
import TopRated from './Components/TopRatedComponent/TopRated';
import UpcomingMovies from './Components/UpcomingMoviesComponent/UpcomingMovies';
import MovieDetails from './Components/MovieDetailsComponent/MovieDetails'
import './App.css';

function App() {

  
  return (
    <Router>
        <div>
            <Header />
            <Routes >
                <Route path="/popular" element={<Home />} />
                <Route path="/top-rated" element={<TopRated />} />
                <Route path="/upcoming" element={<UpcomingMovies />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
