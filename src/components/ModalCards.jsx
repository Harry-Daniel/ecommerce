import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Image, Text, Input } from '@chakra-ui/react'

const ModalCards = (data, onClose) => {
    console.log(data)
    const dataAccess = data.data.data.data;
    return (
        <div><Card
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

                    <Text py='2'>
                        {dataAccess.description}
                    </Text>
                    <Text color='white' fontSize='2xl'>
                        GHC {dataAccess.price}
                    </Text>
                </CardBody>

                <CardFooter>

                </CardFooter>
            </Stack>
        </Card></div>
    )
}

export default ModalCards