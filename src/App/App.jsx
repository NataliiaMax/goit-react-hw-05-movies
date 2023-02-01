import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';
import Cast from 'components/Cast/Cast';
import NoPageFound from 'components/NoPageFound/NoPageFound';
import Reviews from 'components/Reviews/Reviews';
import { ToastContainer } from 'react-toastify';

// import style from './App.module.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />{' '}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
