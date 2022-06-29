import { CryptoHistoryResponse } from '@/types/types';

/**
 * コインの価格を日時指定で取得するfetch関数
 * @returns Promise<CryptoHistoryResponse>
 */
export const fetchCoinPrice = async (
  coinId: string,
  date: string
): Promise<CryptoHistoryResponse> => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${date}`;
  const res = await fetch(url);
  return res.json();
};
