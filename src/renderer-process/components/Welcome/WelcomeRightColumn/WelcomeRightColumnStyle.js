import { stdHeight, stdPadding } from '../../../configs/dimensions'

export const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxHeight: '100%',
  padding: 0,
}

export const connectionsListContainer = {
  maxHeight: '90%',
  overflowY: 'scroll',
  padding: stdPadding,
}

export const createConnectionContainer = {
  height: stdHeight,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
