import React from 'react'
import { CircularProgress, Box, Typography } from '@material-ui/core'

const NumberAvatar = ({ total }) => {
  return (
    <Box position="relative" display="flex" paddingTop={2} m="auto">
      <Box
        top={300}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size={300} />
      </Box>
      <Box
        top={300}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1" component="div" color="textSecondary">
          {total}
        </Typography>
      </Box>
    </Box>
  )
}

export default NumberAvatar
