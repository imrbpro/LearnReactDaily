import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './Components/Theme/Content/Content';
import Footer from './Components/Theme/Footer/Footer';
import Navigation from './Components/Theme/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
