import { useContext, useEffect } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import ItemContext from './ItemContext';

function Item() {
  const item = useContext(ItemContext);

  useEffect(() => {
    console.log("data", item);
  }, [item]);

  return (
    <Flex justify="center" align="center" minH="50vh">
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bgColor="teal.100"
        color="teal.900"
        maxW="xl"
        w="100%"
      >
        <Heading as="h1" mb={4}>
            Item Details
        </Heading>       
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Name: {item?.name}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Qty: {item?.qty}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Price: {item?.price}
        </Text>
      </Box>
    </Flex>
  );
}

export default Item;
