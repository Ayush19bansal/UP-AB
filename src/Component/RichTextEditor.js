// RichTextEditor.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, useToast, useColorMode } from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const toast = useToast();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }
  }, []);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    localStorage.setItem('editorContent', editorContent);
    toast({
      title: 'Content saved.',
      description: 'Your content has been saved to local storage.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const editorSpring = useSpring({ opacity: 1, from: { opacity: 0 }, config: { tension: 200, friction: 20 } });

  return (
    <animated.div style={editorSpring}>
      <Flex direction="column" align="center" justify="center" zIndex="10" padding="5px" borderRadius="10px">
        <Box zIndex="10" width="95%" p="3" bg={colorMode === 'light' ? 'white' : 'white'} color={colorMode === 'light' ? 'black' : 'black'}>
          <ReactQuill
            value={editorContent}
            onChange={handleEditorChange}
            theme="snow"
            style={{ height: '150px', backgroundColor: colorMode === 'light' ? 'white' : 'white' ,zIndex:"10"}}
          />
          <Button colorScheme="blue" mt="18" p={5} onClick={handleSave}>Save</Button>
        </Box>
      </Flex>
    </animated.div>
  );
};

export default RichTextEditor;