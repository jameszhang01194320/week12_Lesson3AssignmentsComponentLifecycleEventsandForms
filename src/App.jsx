import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
// import ComicList from './components/ComicList';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
        {/* <Route path="/comics" element={<ComicList />} /> */}

        {/* Needs to be at the bottom, it's a catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
