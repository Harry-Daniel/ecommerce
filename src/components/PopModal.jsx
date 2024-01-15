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
    Input

} from '@chakra-ui/react'
import ModalCards from './ModalCards'

const PopModal = (data) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>

                    <ModalCards data={data} />

                    <Input type='number' placeholder='quantity' marginRight={3} />
                    <Button onClick={onClose} colorScheme='blue'>Buy</Button>
                </ModalContent>
            </Modal>

        </>
    )
}

export default PopModal