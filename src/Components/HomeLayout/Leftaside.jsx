import React, { Suspense } from 'react';
import Categories from './Categories';

const Leftaside = () => {
  return (
    <div>
    <Suspense fallback={<span className="loading loading-spinner text-6xl text-error"></span>}>
    <Categories></Categories>
    </Suspense>
    </div>
  );
};

export default Leftaside;