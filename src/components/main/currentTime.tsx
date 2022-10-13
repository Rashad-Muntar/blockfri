import React, { useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import  {format} from 'date-fns'
function CurrentTime() {
    const date  = new Date()
    const current = format(date, 'MMMM, dd, y')

  return (
    <Box>
      <Text>{current}</Text>
    </Box>
  )
}

export default CurrentTime
