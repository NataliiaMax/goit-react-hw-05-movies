import { Routes, Route } from 'react-router-dom';
// import NotFound from 'path/to/pages/NotFound';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Home/Home';
import Movies from 'components/Movies/Movies';
import NoPageFound from 'components/NoPageFound/NoPageFound';

// import style from './App.module.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='movies' element={<Movies />} />
          <Route path='*' element={<NoPageFound/>} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
