import { Box } from "@chakra-ui/react"
import { wrapperProp } from "../../types"

const Wrapper = ({children}: wrapperProp) => {
    return (
        <Box maxW='1366px' margin="0 auto" my="0" py="0">
            {children}
        </Box>
    )
}

export default Wrapper