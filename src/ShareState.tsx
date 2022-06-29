import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetBalance } from './hooks/useGetBalance';
import { fetchDataUserList, selectDataList } from './redux/slices/tokenSlice';

export const ShareState = (props: { children: React.ReactNode }) => {
  const [cRef, setCRef] = useState(true);
  const { getBalance } = useGetBalance();

  const dispatch = useDispatch();

  const { data } = useSelector(selectDataList);
  useEffect(() => {
    dispatch(fetchDataUserList())
      // @ts-ignore
      .then(unwrapResult)
      .then((data: any) => {
        console.log({ data });
      });
  }, []);

  useEffect(() => {
    if (data.length <= 0) return;

    let intervalId: NodeJS.Timer;
    if (cRef) {
      getBalance();
      setCRef(false);
    } else {
      // @ts-ignore
      intervalId = setInterval(() => {
        getBalance();
      }, 10000);
    }

    return () => clearInterval(intervalId);
  }, [cRef, data]);

  return <div>{props.children}</div>;
};
