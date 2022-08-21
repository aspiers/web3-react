import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface Web3ReactContext {
  chainId?: number
}

const initialState: Web3ReactContext = {}

export const web3ContextSlice = createSlice({
  name: 'web3Context',
  initialState,
  reducers: {
    updateWeb3Context: (state, action: PayloadAction<Web3ReactContext>) => {
      return action.payload
    },
  },
})

export const { updateWeb3Context } = web3ContextSlice.actions

export const selectWeb3Context = (state: RootState) => state.web3Context

export default web3ContextSlice.reducer
