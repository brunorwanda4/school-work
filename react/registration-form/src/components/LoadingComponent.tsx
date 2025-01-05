import React, { useState, useEffect } from 'react';

const LoadingComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setData('Data has been loaded!'), 2000); // Simulates loading
  }, []);

  return <h2>{data || 'Loading...'}</h2>;
};

export default LoadingComponent;
