// app/ServerComponent.tsx
import React from "react";
import Client from "../ClientComponent/ClientComponent";

interface Todo {
  name: string;
  id: number;
  type: string;
  available: boolean;

}


const ServerComponent = async()=> {
  const Response = await fetch("https://simple-books-api.glitch.me/books/");
  const ParsedResponse: Todo[] = await Response.json();

 

  return <Client data={ParsedResponse}/>

};

export default ServerComponent;