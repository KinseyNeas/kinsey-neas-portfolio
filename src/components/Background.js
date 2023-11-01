import React from 'react';
import squiggles from "../images/bg-squiggle.png";

const Background = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-0"
      style={{
        backgroundImage: squiggles,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    > 
    </div>
  );
};

export default Background;
