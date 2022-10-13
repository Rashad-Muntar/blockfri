import { useState } from "react";
import { Box, Text, Flex, ScaleFade } from "@chakra-ui/react";
import { menusItems } from "../shared/menItems";

const DashMenu = () => {
  const [active, setActive] = useState({ current: 0 });

  const [isHovering, setHovering] = useState(false)
        
  // function handleMouseEnter() {

  //     setHovering(true)

  // }
  // function handleMouseLeave() {

  //     setHovering(false)

  // }
  
  const toggleActive = (index: number) => {
    setActive({ ...active, current: index });
  };


  const setActiveStyle = (index: number) => {
    if (active.current === menusItems[index].id) {
      return "activeIcon";
    } else {
      return "";
    }
  };
  return (
    <Box my="10px" >
      {menusItems.map((menu, index) => (
        <Flex  alignItems="center" fontWeight="semibold" className={setActiveStyle(index)} key={index} onClick={() => toggleActive(index)}>
          <Box bg="black" p="10px">
            <Box className={setActiveStyle(index)} p="5px" rounded="md">
              <menu.icon fontSize="23px"  />
            </Box>
          </Box>
          <Text p="10px" ml="10px">
            {menu.name}
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default DashMenu;
