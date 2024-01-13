import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, Text, Image, ButtonGroup, Button } from '@chakra-ui/react'

const Cards = (data) => {
    console.log(data);
    return (
        <div><Card maxW='sm'>
            <CardBody>
                <Image
                    src={data.data.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{data.data.title}</Heading>
                    <Text>
                        {data.data.description}
                    </Text>
                    <Text color='white' fontSize='2xl'>
                        GHC {data.data.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card></div>
    )
}

export default Cards;