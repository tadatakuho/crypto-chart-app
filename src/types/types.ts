// TODO:型付をどこまでやるか考える
export type CryptoHistoryResponse = {
  id: string;
  symbol: string;
  name: string;
  localization: {
    [key: string]: string;
  };
  image: {
    thumb: string;
    small: string;
  };
  market_data: {
    current_price: {
      [key: string]: number;
    };
    market_cap: {
      [key: string]: number;
    };
    total_volume: {
      [key: string]: number;
    };
  };
  community_data: {};
  developer_data: {};
  public_interest_stats: {};
};

export type CoinName = 'bitcoin' | 'ethereum';

export type SelectedCoins = {
  [key in CoinName]: boolean;
};
