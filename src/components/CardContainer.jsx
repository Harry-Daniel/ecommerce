import { useEffect } from 'react'
import Cards from './Cards'
import useProducts from '../hooks/useProducts'
import { Spinner, SimpleGrid, useToast } from '@chakra-ui/react';

import useProductStore from '../store/store';

const CardContainer = () => {
    const { data, isLoading, error } = useProducts();
    const { total } = useProductStore();
    if (isLoading) return <Spinner />
    if (error || !data) throw error;









    return (
        <>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} marginTop='175px' >

                {
                    data.map(
                        (product) =>
                            <Cards key={product.id} data={product} />

                    )

                }
            </SimpleGrid>
        </>

    )
}

export default CardContainer;