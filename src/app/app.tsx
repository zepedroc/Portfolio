'use client';

import { useCursorLightEffect } from '../hooks/use-cursor-light-effect';

const App = ({ children }: any) => {
  useCursorLightEffect();

  return (
    <>
      <div id="cursor-light-effect"></div>
      {children}
    </>
  );
};

export default App;
