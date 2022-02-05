import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import About from './Pages/About';
import Article from './Pages/Article';
import ArticleList from './Pages/ArticleList';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';

function App() {
  return (<Router>
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/article/:name' element={<Article />}/>
      <Route path='/articles-list' element={<ArticleList />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
