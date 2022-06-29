import { Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import { getRPC } from './RPC';

export const defaultProvider = (): Provider => {
  return new ethers.providers.JsonRpcProvider(getRPC());
};
