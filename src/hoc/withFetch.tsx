import React, { useState, useEffect } from 'react';

const withFetch = (url) => (WrappedComponent) => {
  return function WithFetch(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }, [url]);

    return (
      <WrappedComponent 
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
};

export default withFetch;
