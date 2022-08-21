import { useEffect, useState } from 'react'
import { hooks, metaMask } from '../../connectors/metaMask'
import { Card } from '../Card'
import { selectWeb3Context } from '../../redux/slices/web3Context'
import { useSelector } from 'react-redux'

const { useAccounts, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskCard() {
  const web3Context = useSelector(selectWeb3Context)
  const chainId = web3Context.chainId
  console.log('chainId from Redux:', chainId)
  const accounts = useAccounts()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  const [error, setError] = useState(undefined)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])

  return (
    <Card
      connector={metaMask}
      chainId={chainId}
      isActivating={isActivating}
      isActive={isActive}
      error={error}
      setError={setError}
      accounts={accounts}
      provider={provider}
      ENSNames={ENSNames}
    />
  )
}
