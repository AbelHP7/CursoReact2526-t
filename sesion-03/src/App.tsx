
import { Suspense, useState } from 'react';
import Header from './components/header';
import { fetchPlatos } from './utils/api';
import LoadingFallback from './components/LoadingFallback';
import PlatosList from './components/platosList';


const App = () => {
  const [PlatoPromise, setPlatoPromise] = useState(() => fetchPlatos());
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6'>
      <div>
        <Header />
        <Suspense fallback={
          <LoadingFallback message="Cocinado platos para ti" />
        }>
          <PlatosList platosPromise={PlatoPromise} />
        </Suspense>
      </div>
    </div>
  )
};

export default App