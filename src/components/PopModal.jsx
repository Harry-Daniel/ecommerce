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

const PopModal = (data) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { increment, reset } = useCounterStore();
    const [quantity, setQuantity] = useState(false);
    console.log(quantity);


    const handleClick = () => {

        onClose();
        increment();
        setQuantity(false);
    }

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue'>
                Create Order
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCards data={data} />

                    <Input type='number' placeholder='quantity' onChange={() => setQuantity(true)} marginRight={3} />
                    {quantity && <Button onClick={handleClick} colorScheme='blue'>Add to Cart</Button>}
                </ModalContent>
            </Modal>

        </>
    )
}

export default PopModal