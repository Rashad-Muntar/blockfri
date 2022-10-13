import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import CurrentTime from './currentTime'

function PerformanceSection() {
  return (
    <Box color="textGray" width="100%" m="20px" box-sizing="border-box">
      <Text width='100%' borderBottom="1px" borderColor="textGray">Performance</Text>
      <Flex>
        <CurrentTime />
        
      </Flex>
    </Box>
  )
}

export default PerformanceSection
