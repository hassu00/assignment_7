// "use client"
// import React, { useState } from 'react';
import Header from './component-header/header';
import Client from './client-side-rendering/client';
import Server from './server-side-rendering/server';

const Page = () => {
  // const [showClient, setShowClient] = useState(true); // Track Client button visibility
  // const [showServer, setShowServer] = useState(true); // Track Server button visibility

  // const handleClientClick = () => {
  //   console.log('Client clicked, hiding Server');
  //   setShowServer(false); // Hide the Server button when Client is clicked
  // };

  // const handleServerClick = () => {
  //   console.log('Server clicked, hiding Client');
  //   setShowClient(false); // Hide the Client button when Server is clicked
  // };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center w-full h-full">
       <Client  />
       <Server />
      </div>
    </div>
  );
};

export default Page;
