import React from 'react';
import { Flex, Box, Image, useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import darkLogo from "./logo.png"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Perform logout actions here
    // Example:
    // Clear any session data or perform logout-related tasks
    console.log("User logged out successfully");
    toast.success("User logged out successfully", {
      position: "top-center",
    });
    // Redirect to login page after logout
    navigate("/login");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem 2rem"
      backgroundColor={colorMode === 'light' ? '#9FB6C3' : '#9FB6C3'}
      color={colorMode === 'light' ? 'black' : 'white'}
      zIndex={10}
    >
      <Box
        _hover={{
          transform: 'scale(1.1)',
          transition: 'transform 0.2s',
        }}
      >
        <Image
          src={colorMode === 'light' ? "https://upliance.ai/cdn/shop/files/purple_upliance.png?height=42&v=1705328918" : darkLogo}
          alt="Logo"
          height="40px"
          className="logo"
        />
      </Box>
      <Box style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}><IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <Tooltip label="Logout" hasArrow placement="bottom">
        <IconButton
          aria-label="Logout"
          icon={<ArrowBackIcon />}
          onClick={handleLogout}
        />
      </Tooltip></Box>
    </Flex>
  );
};

export default Navbar;
