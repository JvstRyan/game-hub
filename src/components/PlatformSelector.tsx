import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'

const PlatformSelector = () => {

const {data, error} = usePlatforms()

if (error) return null

    
  return (
   
    <Menu>
        <MenuButton marginLeft={4} as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
        <MenuList>
            {data.map((platform) => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
    
  )
}

export default PlatformSelector