import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    useCounter

} from '@chakra-ui/react'
import ModalCards from './ModalCards'
import useCounterStore from '../counter/store'
import { useState } from 'react'
import useProductStore from '../store/store'

const PopModal = (data) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { increment, reset } = useCounterStore();
    const [quantity, setQuantity] = useState(false);
    const [quantityAmount, setQuantityAmount] = useState(0);
    const { cart, addToCart, totaling, total } = useProductStore();


    const dataAccess = data.data.data;
    const handleClick = () => {

        onClose();
        increment();
        totaling(dataAccess.price * quantityAmount)
        addToCart({ ...data, quantity: quantityAmount });
        setQuantity(false);
    }

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue'>
                Place Order
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCards data={data} />

                    <Input type='number' placeholder='quantity (Only Numbers are allowed)' onChange={(e) => {
                        setQuantity(true)
                        setQuantityAmount(e.target.value)
                    }} marginRight={3} />
                    {quantity && <Button onClick={handleClick} colorScheme='blue'>Add to Cart</Button>}
                </ModalContent>
            </Modal>

        </>
    )
}

export default PopModal