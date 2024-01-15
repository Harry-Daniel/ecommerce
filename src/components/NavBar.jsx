import { Box, HStack, Image, List, ListItem } from '@chakra-ui/react'
import logo from '../assets/MSH.png'
import { GrCart } from "react-icons/gr"
const NavBar = () => {
    return (
        <>
            <Box boxShadow='lg' p='6' rounded='md' bg='white' marginBottom={7} position="fixed" w="100%" top="0"
                left="0"
                right="0"
                zIndex="1"
            >
                <HStack justifyContent='space-between' px='20px' textColor={'black'}>
                    <div >
                        <Image src={logo} boxSize='60px' alt='CYI Discipleship Logo' />
                    </div>

                    <div>
                        <List spacing={19}>
                            <HStack className='list-unstyled' >
                                <GrCart color='green' />
                                <ListItem>Cart</ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                                <ListItem>Contact</ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                                <ListItem>Profile</ListItem>
                            </HStack>
                        </List>
                    </div>


                </HStack >

            </Box >

        </>
    )
}

export default NavBar