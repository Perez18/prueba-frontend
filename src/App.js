// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import Page404 from './views/pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' name='Layout' element={<Layout />} />
        <Route exact path='*' name='Not Match' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
