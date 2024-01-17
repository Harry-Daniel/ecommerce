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

const PopModal = (data) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { increment, reset } = useCounterStore();

    const handleClick = () => {

        onClose();
        increment();
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

                    <Input type='number' placeholder='quantity' marginRight={3} />
                    <Button onClick={handleClick} colorScheme='blue'>Add to Cart</Button>
                </ModalContent>
            </Modal>

        </>
    )
}

export default PopModal