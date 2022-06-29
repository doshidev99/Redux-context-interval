import { useSelector, useDispatch } from 'react-redux';
import {
  selectDataList,
  tokenManagementAction,
} from '../redux/slices/tokenSlice';

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 2000)
  );
}

export const useGetBalance = () => {
  const { data: _data } = useSelector(selectDataList);

  const dispatch = useDispatch();

  const getBalance = () => {
    console.log('getBalance');
    Promise.all(
      [1].map(async () => {
        await fetchCount(2);
        const newData = _data.map((item: any) => {
          return {
            ...item,
            usd: Math.random().toFixed(2),
          };
        });
        return newData;
      })
    ).then((data) => {
      dispatch(tokenManagementAction.updateListToken(data[0]));
    });
  };

  return { getBalance };
};
