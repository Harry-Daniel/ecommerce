
import { Text, HStack, Button, Box } from "@chakra-ui/react";
import useProductStore from "./store";
import Cards from "../components/Cards";
import ProductCard from "./ProductCard";
import { Navigate } from "react-router-dom";

const ProductStore = () => {
  const { total } = useProductStore();
  const { cart } = useProductStore();

  if (cart.length === 0) return <Navigate to='/' />;
  return (
    <div>
      {cart.map((product) =>
        <ProductCard key={product.data.data.id} data={product} />
      )}

      <HStack padding={5} justify={'center'} >
        <Box as='Text' borderRadius='md' bg='white' color='black' padding={3} fontSize={17} >
          <b>Total= GHC {total}</b>
        </Box>
        <Button colorScheme="blue">Order</Button>
      </HStack>

    </div>
  )
}

export default ProductStore