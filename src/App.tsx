import React, { useState } from 'react';
import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import { navItems } from './utils/constants';

function App() {
  

  const [page, setPage] = useState<string>(navItems[0].item);

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <div className='container-fluid'>
      <Header onPageChange={handlePageChange} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

export default App;