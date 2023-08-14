import React from 'react'
import Image from 'next/image'
import profileImage from '../../../public/images/profile-pic-edited.png'
import { Box } from '@mui/material'

export const ProfileSVG = ({ theme }) => {
  const width = '100%'
  return (
      <Box
          sx={{
            transform: {
              xs: 'translateY(0)'
            },
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            alignItems: 'end',
            justifyContent: 'end'
          }}
      >
          <svg
              viewBox="0 0 2035 2050"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ gridRow: 1, gridColumn: 1, width }}
          >
              <path
                  d="M934.166 355.205C1315.68 38.9823 1847.09 -181.433 1905.68 209.633C1964.28 600.699 1407.69 1975.84 1036.09 2031.52C664.484 2087.2 62.5557 1213.33 3.95863 822.267C-54.6384 431.201 552.65 671.427 934.166 355.205Z"
                  fill={theme.palette.primary.main}
              />
          </svg>
          <Image
              alt="text"
              style={{
                clipPath: 'url(#myClip)',
                gridRow: 1,
                gridColumn: 1,
                width,
                aspectRatio: 1,
                height: 'auto',
                objectFit: 'cover'
              }}
              src={profileImage}
          />
          <svg width="0" height="0">
              <clipPath
                  id="myClip"
                  clipPathUnits="objectBoundingBox"
                  style={{ transform: 'scale(4.9075)' }}
              >
                  <path d="M0 0.0005205C0.031568 0.00089823 0.184709 -0.1081433 0.190568 0.0109633C0.196428 0.0600699 0.140769 0.197584 0.103609 0.203152C0.0664484 0.20872 0.00625557 0.121333 0.000395863 0.0822267C-0.00546384 0.0431201 0.055265 0.0671427 0.0934166 0.0055205 Z" />
              </clipPath>
          </svg>
      </Box>
  )
}
