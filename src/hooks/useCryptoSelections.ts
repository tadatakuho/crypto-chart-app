import { useState } from 'react';
import { useQuery } from 'react-query';

import { fetchCoinPrice } from '@/api/cryptoApi';
import { CoinName, SelectedCoins } from '@/types/types';

const initSelectedCoins: SelectedCoins = {
  bitcoin: false,
  ethereum: false,
};

export const useCryptoSelections = () => {
  const [selectedCoins, setSelectedCoins] = useState(initSelectedCoins);

  const toggleSelectedCoins = (coin: CoinName) => {
    setSelectedCoins((prevState) => ({
      ...prevState,
      [coin]: !prevState[coin],
    }));
  };

  const { data: btcData1 } = useQuery('coinPrice', () =>
    fetchCoinPrice('bitcoin', '25-06-2022')
  );
  const { data: btcData2 } = useQuery('coinPrice', () =>
    fetchCoinPrice('bitcoin', '26-06-2022')
  );
  const { data: btcData3 } = useQuery('coinPrice', () =>
    fetchCoinPrice('bitcoin', '27-06-2022')
  );

  const { data: ethData1 } = useQuery('ethereumPrice', () =>
    fetchCoinPrice('ethereum', '25-06-2022')
  );
  const { data: ethData2 } = useQuery('ethereumPrice', () =>
    fetchCoinPrice('ethereum', '26-06-2022')
  );
  const { data: ethData3 } = useQuery('ethereumPrice', () =>
    fetchCoinPrice('ethereum', '27-06-2022')
  );

  const btcPrice1 = btcData1?.market_data.current_price.jpy;
  const btcPrice2 = btcData2?.market_data.current_price.jpy;
  const btcPrice3 = btcData3?.market_data.current_price.jpy;

  const ethPrice1 = ethData1?.market_data.current_price.jpy;
  const ethPrice2 = ethData2?.market_data.current_price.jpy;
  const ethPrice3 = ethData3?.market_data.current_price.jpy;

  return { selectedCoins, toggleSelectedCoins, btcPrice1, ethPrice1 };
};
