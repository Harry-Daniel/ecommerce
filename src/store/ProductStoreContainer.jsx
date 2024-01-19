import React from 'react'
import { Spinner, SimpleGrid } from '@chakra-ui/react';
import ProductStore from './ProductStore';

const ProductStoreContainer = () => {
    return (
        <SimpleGrid columns={{ base: 1 }} spacing={5} marginTop='175px' >
            <ProductStore />

        </SimpleGrid>
    )
}

export default ProductStoreContainer