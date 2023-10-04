import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const passengerList = [
  {
    id: 'KJSD93',
    name: 'Maria Anders',
    age: 20,
  },
  {
    id: 'KJSD94',
    name: 'Francisco Chang',
    age: 35,
  },
  {
    id: 'KJSD95',
    name: 'Anna Angelo',
    age: 28,
  },
];

function PassengerTable() {
  return (
    <Box minH="50vh" p={4}>
      <Heading as="h1" mb={4}>
        Passenger Table
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
          </Tr>
        </Thead>
        <Tbody>
          {passengerList.map((passenger) => (
            <Tr key={passenger.id}>
              <Td>{passenger.id}</Td>
              <Td>{passenger.name}</Td>
              <Td>{passenger.age}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default PassengerTable;
