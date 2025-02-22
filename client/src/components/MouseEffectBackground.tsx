import React from 'react';
import './gridCell.css';

const MouseEffectBackground: React.FC = () => {
  const rows = 12;
  const columns = 20;

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="grid sm:grid-cols-7 md:grid-cols-14 xl:grid-cols-17 gap-0 w-full h-full">
        {Array.from({ length: rows * columns }).map((_, index) => (
          <div
            key={index}
            className="box"
            style={{
              aspectRatio: '1 / 1',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { MouseEffectBackground };
