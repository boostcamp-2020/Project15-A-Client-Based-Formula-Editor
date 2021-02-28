import React, { MutableRefObject, useEffect, useRef } from 'react';

const useInterval = (
  callback: MutableRefObject<HTMLDivElement>,
  delay: number
) => {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
};

export default useInterval;
