import { Box, HStack, Image, List, ListItem } from '@chakra-ui/react'
import logo from '../assets/MSH.png'
import { GrCart } from "react-icons/gr"
import Counter from '../counter/Counter'
import { Link } from 'react-router-dom'
import useCounterStore from '../counter/store'
const NavBar = () => {
    const { counter } = useCounterStore()
    return (
        <>
            <Box boxShadow='lg' p='6' rounded='md' bg='white' marginBottom={7} position="fixed" w="100%" top="0"
                left="0"
                right="0"
                zIndex="1"
            >
                <HStack justifyContent='space-between' px='20px' textColor={'black'}>
                    <div >
                        <Link to='/'>
                            <Image src={logo} boxSize='60px' alt='CYI Discipleship Logo' />
                        </Link>
                    </div>

                    <div>
                        <List spacing={19}>
                            <HStack className='list-unstyled' >

                                <ListItem>Contact</ListItem>
                                <ListItem></ListItem>
                                <ListItem></ListItem>
                                <HStack padding={0} margin={0}>
                                    <Link to='/orders'>
                                        {counter !== 0 && <GrCart color='green' />}
                                    </Link>
                                    <Link to='/orders'>
                                        <Counter />
                                    </Link>

                                </HStack>
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