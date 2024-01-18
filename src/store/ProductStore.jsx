
import { Text, HStack, Button } from "@chakra-ui/react";
import useProductStore from "./store";
import Cards from "../components/Cards";
import ProductCard from "./ProductCard";

const ProductStore = () => {
  const { total } = useProductStore();
  const { cart } = useProductStore();

  if (cart.length === 0) return null
  return (
    <div>
      {cart.map((product) =>
        <ProductCard key={product.data.data.id} data={product} />
      )}

      <HStack padding={5} justify={'center'} >
        <Text marginRight={7}>Total: {total}</Text>
        <Button colorScheme="blue">Confirm</Button>
      </HStack>

    </div>
  )
}

export default ProductStore