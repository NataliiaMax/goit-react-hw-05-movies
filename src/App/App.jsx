import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const NoPageFound = lazy(() => import('components/NoPageFound/NoPageFound'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Loader = lazy(() => import('components/Loader/Loader'));
// import style from './App.module.css';

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <ToastContainer type="error" theme="colored" autoClose={3000} />
    </div>
  );
}

export default App;
