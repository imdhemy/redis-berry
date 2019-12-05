import { stdPadding } from '../../../../configs/dimensions'

export const container = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const backupContainer = {
  padding: stdPadding,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export const actionButton = {
  marginBottom: 0.5 * stdPadding,
  position: 'relative',
}

export const actionLabel = {
  fontSize: '0.8rem',
  fontStyle: 'normal',
  color: 'white',
  fontWeight: 600,
}
