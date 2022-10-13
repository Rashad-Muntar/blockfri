import React, { useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import  {format} from 'date-fns'
function CurrentTime() {
    const date  = new Date()
    const current = format(date, 'MMMM, dd, y')

  return (
    <Flex px="5px" w="25%" alignItems="center" border="1px" borderColor="textGray">
      <Text>{current}</Text>
    </Flex>
  )
}

export default CurrentTime
