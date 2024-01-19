import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Heading, Text, Box, HStack } from '@chakra-ui/react'
import useProductStore from './store';
import useCounterStore from '../counter/store';

const ProductCard = (data) => {
    const { removeFromCart, totaling } = useProductStore();
    const { decrease } = useCounterStore();
    const dataAccess = data.data.data.data;

    const handleClick = () => {
        totaling(-(data.data.quantity * dataAccess.price));
        removeFromCart(dataAccess.id);
        decrease();

    }

    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={dataAccess.image}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{dataAccess.title}</Heading>

                        <Text py={2}>
                            {dataAccess.description}
                        </Text>

                        <Box as='Text' borderRadius='md' bg='tomato' color='white' padding={1} >
                            Quantity Ordered: {data.data.quantity}
                        </Box>
                    </CardBody>

                    <CardFooter>
                        <Text color='white' fontSize='2xl'>
                            Total: GHC {data.data.quantity * dataAccess.price}
                        </Text>
                        <Button marginLeft={5} colorScheme='blue' onClick={() => { handleClick() }}>Remove Item</Button>

                    </CardFooter>

                </Stack>
            </Card >


        </>
    )
}

export default ProductCard