import React, { useState, useEffect } from 'react';
import { Button, Input, Box, useColorMode } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
  const [userData, setUserData] = useState({ name: '', address: '', email: '', phone: '' });
  const [isDirty, setIsDirty] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleSubmit = () => {
    // Check if any field is empty
    if (!userData.name || !userData.address || !userData.email || !userData.phone) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
  
    const userId = new Date().getTime().toString();
    localStorage.setItem(userId, JSON.stringify(userData));
  
    toast.success(`UserId: ${userId}`, {
      position: "top-center",
      autoClose: 2000,
    });
    setIsDirty(false);
  };
  

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      margin="10px"
      bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
      color={colorMode === 'light' ? 'black' : 'white'}
      borderRadius="md"
      boxShadow="md"
    >
      <Input name="name" placeholder="Name" value={userData.name} onChange={handleChange} mb={2} />
      <Input name="address" placeholder="Address" value={userData.address} onChange={handleChange} mb={2} />
      <Input name="email" placeholder="Email" value={userData.email} onChange={handleChange} mb={2} />
      <Input name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} mb={4} />
      <Button variant="solid" colorScheme="blue" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
