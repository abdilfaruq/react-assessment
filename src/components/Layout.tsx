import { Link } from 'react-router-dom';
import { Box, Flex, Link as ChakraLink, Spacer } from '@chakra-ui/react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" align="center" p="4" bg="blue.500">
      <Box w="100%" py="4">
        <Flex justify="space-between" align="center" maxW="800px" mx="auto">
          <ChakraLink as={Link} to="/" color="white" textDecoration="none" fontWeight="bold">
            Home
          </ChakraLink>
          <ChakraLink as={Link} to="/passenger" color="white" textDecoration="none" fontWeight="bold">
            Passenger
          </ChakraLink>
          <ChakraLink as={Link} to="/item" color="white" textDecoration="none" fontWeight="bold">
            Item
          </ChakraLink>
          <ChakraLink as={Link} to="/todo" color="white" textDecoration="none" fontWeight="bold">
            To-Do
          </ChakraLink>
        </Flex>
      </Box>
      <Spacer />
      <Box w="100%" maxW="800px" p="4" bg="white" rounded="lg" boxShadow="md">
        {children}
      </Box>
    </Flex>
  );
}

export default Layout;
