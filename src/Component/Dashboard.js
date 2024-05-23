import React, { useState, useEffect } from 'react';
import {
  Box,
  Select,
  Text,
  useColorMode,
  Flex,
  Heading,
  CircularProgress,
} from '@chakra-ui/react';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const { colorMode } = useColorMode();

  useEffect(() => {
    const usersFromStorage = Object.entries(localStorage)
      .map(([key, value]) => {
        try {
          return { id: key, ...JSON.parse(value) };
        } catch (error) {
          console.error(`Error parsing user data with key ${key}: ${error}`);
          return null;
        }
      })
      .filter(user => user !== null)
      .sort((a, b) => a.name.localeCompare(b.name));
    setUsers(usersFromStorage);
  }, [selectedUser, users]);

  useEffect(() => {
    if (selectedUser) {
      const selectedUserData = users.find(user => user.name === selectedUser);
      setUserDetails(selectedUserData || {});
    } else {
      setUserDetails({});
    }
  }, [selectedUser, users]);

  const handleUserChange = event => {
    setSelectedUser(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
  
      margin="10px"
     width="97%"
      bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
      borderRadius="md"
      boxShadow="md"
    >
      <Select
        placeholder="Select a user"
        value={selectedUser}
        onChange={handleUserChange}
        mb={4}
      >
        <option value="">None</option>
        {users.map(user => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </Select>

      {users.length === 0 ? (
        <Flex direction="column" align="center">
         <h3 style={{marginBottom:"15px"}}>Please Fill out the form with the user's information and select a user.</h3>
          <CircularProgress isIndeterminate color="blue.500" />
          
          <Text mt={2}>Loading users...</Text>
         
        </Flex>
      ) : Object.keys(userDetails).length > 0 ? (
        <Box style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px', zIndex: "10", color: colorMode === 'light' ? 'black' : 'black' }}>

        <Heading size="md" mb={2}>
          {userDetails.name}
        </Heading>
        <Text>ID: {userDetails.id}</Text>
        <Text>Email: {userDetails.email}</Text>
        <Text>Phone: {userDetails.phone}</Text>
        <Text>Address: {userDetails.address}</Text>
      </Box>
      
      ) : (
        <Text>No user selected.</Text>
      )}
    </Box>
  );
};

export default Dashboard;