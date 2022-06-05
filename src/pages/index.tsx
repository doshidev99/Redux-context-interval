import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectDataList } from '../redux/slices/tokenSlice';
import { Text } from '../ui/components/Text';
import DefaultLayout from '../ui/layouts/DefaultLayout';
import Link from 'next/link';
export default function Landing() {
  const { data } = useSelector(selectDataList);

  return (
    <Container>
      <h1>Home page</h1>
      <div>
        <ol>
          {data.map((token) => {
            if (!token) return null;
            return (
              <li key={token.token + token.chain}>
                <small>
                  <strong>{token.name}</strong>
                </small>
                <small>------------ {token.usd || 0} $</small>
              </li>
            );
          })}
        </ol>
      </div>
      <Link href="/token">Token page</Link>
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

Landing.Layout = DefaultLayout;
