import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const apiKey = process.env.FRESHFLYER_NEWS_API_KEY;
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} key="top" country='in' category='top' />} />
          <Route exact path='/domestic' element={<News apiKey={apiKey} key="domestic" country='in' category='domestic' />} />
          <Route exact path='/sports' element={<News apiKey={apiKey} key="sports" country='in' category='sports' />} />
          <Route exact path='/business' element={<News apiKey={apiKey} key="business" country='in' category='business' />} />
          <Route exact path='/politics' element={<News apiKey={apiKey} key="politics" country='in' category='politics' />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} key="entertainment" country='in' category='entertainment' />} />
          <Route exact path='/world' element={<News apiKey={apiKey} key="world" country='in' category='world' />} />
          <Route exact path='/crime' element={<News apiKey={apiKey} key="crime" country='in' category='crime' />} />
          <Route exact path='/food' element={<News apiKey={apiKey} key="food" country='in' category='food' />} />
          <Route exact path='/lifestyle' element={<News apiKey={apiKey} key="lifestyle" country='in' category='lifestyle' />} />
          <Route exact path='/technology' element={<News apiKey={apiKey} key="technology" country='in' category='technology' />} />
          <Route exact path='/tourism' element={<News apiKey={apiKey} key="tourism" country='in' category='tourism' />} />
          <Route exact path='/other' element={<News apiKey={apiKey} key="other" country='in' category='other' />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
