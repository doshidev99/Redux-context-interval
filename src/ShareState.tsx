import React, { useEffect, useState } from 'react';
import { useGetBalance } from './hooks/useGetBalance';

export const ShareState = (props: { children: React.ReactNode }) => {
  const [cRef, setCRef] = useState(true);
  const { getBalance } = useGetBalance();
  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (cRef) {
      getBalance();
      setCRef(false);
    } else {
      intervalId = setInterval(() => {
        getBalance();
      }, 10000);
    }

    return () => clearInterval(intervalId);
  }, [cRef]);

  return <div>{props.children}</div>;
};
