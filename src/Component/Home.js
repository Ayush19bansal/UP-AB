// Home.jsx
import React from "react";
import Counter from "./Counter";
import Navbar from "./Navbar";
import RichTextEditor from "./RichTextEditor";
import UserForm from "./UserForm";
import Dashboard from "./Dashboard";
import { Getctx } from "./UserContext";
import { animated } from 'react-spring';
import { useSpring } from 'react-spring';
import { Box, useColorMode } from '@chakra-ui/react';

function Home() {
  const ctx = Getctx();
  const { colorMode } = useColorMode();

  const backgroundAnimation = useSpring({
    height: `calc(min(100%, calc(${ctx.data * 60}px)))`,
    backgroundColor: `rgba(0, 0, 255, ${ctx.data / 40})`,
    config: { tension: 210, friction: 20 },
  });

  return (
    // <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} minH="100vh">
  <div className="maincont" style={{backgroundColor:`colorMode === 'light' ? 'gray.100' : 'gray.900'` , minHeight:"100vh"} }>
              <animated.div
         style={{
           position: 'absolute',
         //   zIndex: 0,
           width:"100%",
         //   width: '600px',
        
           ...backgroundAnimation,
         }}
       />
       <Navbar />

       <div className="container">
         <div className="upper">
         <div className="counterdiv items" style={{ border: colorMode === 'dark' ? '2px solid gray' : 'none' }}>

             <Counter />
           </div>
           <div className="textEditordiv items" style={{ border: colorMode === 'dark' ? '2px solid gray' : 'none' }}>
             <RichTextEditor />
           </div>
         </div>
 
         <div className="lower">
           <div className="dash items" style={{ border: colorMode === 'dark' ? '2px solid gray' : 'none' }}>
             <Dashboard/>
           </div>
           <div className="userform items" style={{ border: colorMode === 'dark' ? '2px solid gray' : 'none' }}>
             {/* <RichTextEditor /> */}
             <UserForm/>
           </div>
         </div>
 
 
       </div>
     </div>
    // </Box>
  );
}

export default Home;


