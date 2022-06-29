import { CHAIN_ID } from '../configWeb3';

export const RPC = {
  56: 'https://bsc-dataseed1.ninicoin.io',
  // 97: 'https://speedy-nodes-nyc.moralis.io/2b3d187d1e37fe5084871be7/bsc/testnet',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  3: 'https://ropsten.eth.aragon.network',
  4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  4002: 'https://rpc.testnet.fantom.network',
};

export const getRPC = (): string => {
  return RPC[CHAIN_ID];
};
