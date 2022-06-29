type CHAIN = 56 | 4002;

export const CHAIN_ID: CHAIN = parseInt(
  process.env.NEXT_PUBLIC_CHAIN_ID || '4002'
) as CHAIN;

export enum ChainId {
  MAINNET = 56,
  TESTNET = 4002,
}
