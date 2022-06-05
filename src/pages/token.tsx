import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectDataList,
  tokenManagementAction,
} from '../redux/slices/tokenSlice';
import { Text } from '../ui/components/Text';
import DefaultLayout from '../ui/layouts/DefaultLayout';

export default function TokenPage() {
  const dispatch = useDispatch();
  const { data } = useSelector(selectDataList);

  const updateListToken = () => {
    const newItem = [
      ...data,
      {
        chain: 'BSC',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19891.png',
        name: 'Decentralized USD',
        symbol: 'USDD',
        token: '0xd17479997f34dd9156deef8f95a52d81d265be9c',
        decimals: 18,
        usd: 1.001,
        usd_24h_change: -0.025774117569074963,
      },
      {
        chain: 'ETH',
        token: '0x15d4c048f83bd7e37d49ea4c83a07267ec4203da',
        decimals: 8,
        symbol: 'GALA',
        logo:
          'https://assets.coingecko.com/coins/images/12493/thumb/GALA-COINGECKO.png?1600233435',
        name: 'Gala',
      },
    ];

    dispatch(tokenManagementAction.updateListToken(newItem));
  };

  return (
    <Container>
      <h1>Home page</h1>
      <div>
        <button onClick={updateListToken}>update list</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledText = styled(Text).attrs({
  fontSize: 25,
  regular: true,
})``;

TokenPage.Layout = DefaultLayout;
