import { useWeb3React } from '@web3-react/core'
import { updateWeb3Context } from '../redux/slices/web3Context'
import { useAppDispatch } from '../redux/store'
import { FC, useEffect, useMemo } from 'react'
import { hooks } from '../connectors/metaMask'

const SyncWeb3Context = () => {
    // const { connector } = useWeb3React()
    const { useChainId } = hooks
    const dispatch = useAppDispatch()
    const chainId = useChainId()

    const objToSync = useMemo(
        () => ({ chainId }),
        [chainId]
    )

    useEffect(() => {
        dispatch(updateWeb3Context(objToSync))
    }, [dispatch, objToSync])
}

/* Component designed to sync high level react hooks with Redux that can later be composed in selectors */
export const SyncWithRedux: FC = () => {
    SyncWeb3Context()
    return <></>
}
