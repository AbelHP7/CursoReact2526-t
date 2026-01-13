import React, { Fragment } from 'react';
import header from './components/header';

const App = () => {
  return (
    <>
    <Header />
    <Saludo nombre="Pepe" edad={34}/>
      <div className='min-h-screen bg-gray-200 flex items-center justificy-center'>
      <h1 className='text-4xl font-bold text-blue-600'>
        React 19+ Typecript
      </h1>
    </div>
    </>
  )
}

export default App