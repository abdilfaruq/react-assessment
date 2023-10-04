import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './components/Layout';
import ToDoList from './components/ToDoList';
import PassengerTable from './components/PassengerTable';
import Item from './components/Item';
import ItemContext from './components/ItemContext';

const colors = {
    brand: {
        900: '#1a365d',
    },
  }
  
const theme = extendTheme({ colors })

function App() {
  const itemData = {
    name: 'Bread',
    qty: 20,
    price: '$3',
  };

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <ItemContext.Provider value={itemData}>
          <Layout>
            <Routes>
              <Route path="/" element={<ToDoList />} />
              <Route path="/passenger" element={<PassengerTable />} />
              <Route path="/item" element={<Item />} />
              <Route path="/todo" element={<ToDoList />} />
            </Routes>
          </Layout>
        </ItemContext.Provider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
