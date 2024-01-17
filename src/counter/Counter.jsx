import useCounterStore from "./store"
import { Text } from "@chakra-ui/react";

const Counter = () => {
  const { counter } = useCounterStore();
  if (counter === 0) return null
  return (
    <div>
      <Text textColor="green">
        <sup>({counter})</sup>
      </Text>
    </div>
  )
}

export default Counter