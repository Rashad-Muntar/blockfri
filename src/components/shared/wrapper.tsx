import { Box } from "@chakra-ui/react"
import { wrapperProp } from "../../types"

const Wrapper = ({children}: wrapperProp) => {
    return (
        <Box maxW='1366px'>
            {children}
        </Box>
    )
}

export default Wrapper