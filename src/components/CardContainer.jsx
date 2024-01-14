import React from 'react'
import Cards from './Cards'
import useProducts from '../hooks/useProducts'
import { Spinner, SimpleGrid } from '@chakra-ui/react';

const CardContainer = () => {
    const { data, isLoading, error } = useProducts();
    if (isLoading) return <Spinner />
    if (error || !data) throw error;
    console.log(data)

    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} marginTop='175px' >

            {
                data.map(
                    (product) =>
                        <Cards key={product.id} data={product} />

                )

            }
        </SimpleGrid>

    )
}

export default CardContainer;