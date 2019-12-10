import { activeNavItemColor, darkerPrimaryColor, navItemColor, primaryColor } from '../../configs/colors'

export const container = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
}

export const sidebarContainer = {
  backgroundColor: primaryColor,
  width: '100px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
}

export const sidebarContainerWithEntries = {
  backgroundColor: primaryColor,
  width: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
}

export const navContainer = {
  width: '100px',
  height: '100%',
  backgroundColor: darkerPrimaryColor,
}

export const navMenu = {
  backgroundColor: 'transparent',
  boxShadow: '0',
  border: 0,
  borderRadius: 0,
}

export const navMenuItemCommon = {
  borderRadius: 0,
  border: 0,
  boxShadow: 0,
}

export const navMenuItem = {
  ...navMenuItemCommon,
  color: navItemColor,
}

export const activeNavMenuItem = {
  ...navMenuItemCommon,
  color: activeNavItemColor,
}
