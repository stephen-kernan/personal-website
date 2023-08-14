import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded'

import styles from './globalNav.module.css'

export const MobileDrawer = ({ links, activeLink }) => {
  const theme = useTheme()

  return (
      <Box
          sx={{
            bgcolor: 'eraserHead',
            flexGrow: 1,
            flexShring: 0,
            padding: '1em',
            display: { xs: 'flex', md: 'none' },
            flexFlow: 'column'
          }}
      >
          {links.map((link) => (
              <Typography
                  variant="body2"
                  component="a"
                  className={'global-nav__link'}
                  sx={{
                    color: 'bakugoLight',
                    borderBottom: `4px solid ${
              activeLink === link.path
                ? theme.palette.primary.main
                : 'transparent'
            }`,
                    marginBottom: '1rem'
                  }}
                  href={link.path}
                  underline="none"
              >
                  {link.label}
              </Typography>
          ))}
          <Divider variant="middle" sx={{ marginTop: '2rem' }} />
      </Box>
  )
}

const MobileNav = ({ links, activeLink, open, toggleMenu }) => {
  return (
      <div>
          <IconButton id="openmenu" onClick={toggleMenu}>
              <MenuIcon sx={{ color: 'bakugoLight' }} />
          </IconButton>
          <Drawer
              anchor="left"
              sx={{
                width: 'max(50%, 180px)',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: 'max(50%, 180px)',
                  boxSizing: 'border-box'
                }
              }}
              open={open}
              variant="temporary"
              onClose={toggleMenu}
          >
              <MobileDrawer activeLink={activeLink} links={links} />
          </Drawer>
      </div>
  )
}

export const GlobalNav = ({ activeLink }) => {
  const [displayMenu, setDisplayMenu] = useState(false)
  const theme = useTheme()

  const links = [
    {
      label: 'about',
      path: '/about'
    },
    {
      label: 'blog',
      path: '/blog'
    }
    // {
    //   label: "projects",
    //   path: "/projects",
    // },
  ]

  const toggleMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
      <AppBar position="static" className={'page-nav global-nav'}>
          <Toolbar
              className={styles['global-nav__container']}
              sx={{ bgcolor: 'eraserHead' }}
          >
              <Box sx={{ display: { xs: 'flex', md: 'none' }, width: 'min-content' }}>
                  <MobileNav
                      activeLink={activeLink}
                      links={links}
                      open={displayMenu}
                      toggleMenu={toggleMenu}
                  />
              </Box>
              <Typography
                  variant="h3"
                  component={Link}
                  className={`${styles['global-nav__page-header']} ${styles['global-nav__link']}`}
                  sx={{ color: 'bakugoLight' }}
                  href="/"
                  underline="none"
              >
                  stephen kernan
              </Typography>

              <Box
                  className={styles['global-nav__middle-section']}
                  sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                  {links.map((link) => (
                      <Typography
                          variant="body2"
                          component={Link}
                          className={'global-nav__link'}
                          sx={{
                            display: { xs: 'none', md: 'flex' },
                            color: 'bakugoLight',
                            borderBottom: `4px solid ${
                  activeLink === link.label
                    ? theme.palette.primary.main
                    : 'transparent'
                }`
                          }}
                          href={link.path}
                          underline="none"
                      >
                          {link.label}
                      </Typography>
                  ))}
              </Box>
          </Toolbar>
      </AppBar>
  )
}
