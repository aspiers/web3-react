import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import GnosisSafeCard from '../components/connectorCards/GnosisSafeCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import NetworkCard from '../components/connectorCards/NetworkCard'
import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import ProviderExample from '../components/ProviderExample'
import { Counter } from '../components/Counter'
import { SyncWithRedux } from '../components/SyncWithRedux'

import store from '../redux/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <Provider store={store}>
      <ProviderExample />
      <SyncWithRedux />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard />
      </div>
      <Counter />
    </Provider>
  )
}
