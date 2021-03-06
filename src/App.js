import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenForceRouter from './routes'
import Header from './components/header/header';
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div>
      <Header />
      <WomenForceRouter />
      <Footer />
    </div>
  );
}
export default App;
