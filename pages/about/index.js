import React from 'react'
import { Container, Grid, Link, Typography, useTheme } from '@mui/material'
import { EquipmentSVG } from '../../src/Components/SVGs/EquipmentSVG'
import { HobbiesSVG } from '../../src/Components/SVGs/HobbiesSVG'
import { SEO } from '../../src/Components/SEO/SEO'
import { GlobalNav } from '../../src/Components/GlobalNav/GlobalNav'
import styles from './about.module.css'

const pageTitle = 'About Me'
const description =
  "I'm a software engineer living in Saint Louis, MO. Here, you can learn more about me and see the equipment I use to help with my work as a full-time software engineer."

export const About = () => {
  const theme = useTheme()
  return (
      <div className={'page-container'}>
          <SEO pageTitle={pageTitle} description={description} />

          <GlobalNav />

          <Container maxWidth="lg" className={'content-container'}>
              <Typography variant="semiHuge" component="h1" color="primary">
                  About Me
              </Typography>

              {/* CURRENT HOBBIES */}
              <Grid
                  container
                  spacing={0}
                  className={styles['about-me__category-container']}
              >
                  <Grid item s={9}>
                      <Typography
                          variant="h2"
                          component="h2"
                          color="primary"
                          className={styles['sub-header']}
                      >
                          Current Hobbies
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Anime</strong> - Mob Psycho 100 (Season 3)
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>TV Show</strong> - Abbott Elementary
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Book</strong> - Atomic Habits
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Most Recent Movie</strong> - M3GAN
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Next Movie</strong> - Knock at the Cabin
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Learning</strong> - Webflow
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Current Video Game</strong> - Cult of the Lamb
                      </Typography>
                  </Grid>
                  <Grid
                      item
                      xs={3}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        visibility: { xs: 'hidden', md: 'visible' }
                      }}
                  >
                      <HobbiesSVG theme={theme} />
                  </Grid>
              </Grid>

              {/* EQUIPMENT */}
              <Grid
                  container
                  spacing={0}
                  className={styles['about-me__category-container']}
              >
                  <Grid item s={9}>
                      <Typography
                          variant="h2"
                          component="h2"
                          color="primary"
                          className={styles['sub-header']}
                      >
                          My Equipment
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Monitor</strong> -
                          <Link href="https://amzn.to/3lS1gqe">
                              {' '}
                              ASUS VA24DQ Monitor x 2
                          </Link>
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Keyboard</strong> -{' '}
                          <Link href="https://amzn.to/3lUqjZL">Logitech MX Keys</Link>
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Monitor Arm</strong> -{' '}
                          <Link href="https://amzn.to/3AVqt7e">
                              Northern Bayou Monitor Arms x 2
                          </Link>
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Mouse</strong> -{' '}
                          <Link href="https://amzn.to/3BVyvOJ">Logitech MX Master 3</Link>
                      </Typography>
                      <Typography variant="body1" component="p">
                          <strong>Microphone</strong> -{' '}
                          <Link href="https://amzn.to/3BWIwLM">Blue Yeti Microphone</Link>
                      </Typography>
                  </Grid>
                  <Grid
                      item
                      xs={3}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        visibility: { xs: 'hidden', md: 'visible' }
                      }}
                  >
                      <EquipmentSVG theme={theme} />
                  </Grid>
              </Grid>
          </Container>
      </div>
  )
}

export default About
