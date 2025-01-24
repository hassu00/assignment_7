"use client"; 

import React, { useState } from "react";
import Image from "next/image";

interface Todo {
  name: string;
  id: number;
  type: string;
  available: boolean;
}


interface ServerProps {
  data: Todo[];
 
}

const ClientComponent:React.FC<ServerProps> = ({ data }) => {
  const [showCards, setShowCards] = useState(false);
  const [showButton, setShowButton] = useState(true);

 

  return (
    <div className="p-4">
      {showButton && (
        <button
          onClick={() => {
            setShowCards(!showCards);
            setShowButton(false);
            // onClick();
           
          }}
          className="bg-blue-500 text-white px-4 hover:scale-[1.1] py-2 rounded-lg mb-4 font-bold w-[280px] h-[80px] text-lg"
        >
          SERVER-SIDE-RENDERING
        </button>
      )}

      {showCards && (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {data.map((todo: Todo) => (
            <div key={todo.id} className="bg-white shadow-lg rounded-lg p-6 w-64 hover:scale-[1.1]">
              <div className="relative w-full h-48">
                <Image
                  src={`https://picsum.photos/200/300?random=${todo.id}`}
                  alt={todo.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">ID: {todo.id}</h2>
              <h2 className="text-lg font-normal mb-2">Name: {todo.name}</h2>
              <h2 className="text-lg font-normal mb-2">Type: {todo.type}</h2>
              <h2 className="text-lg font-normal mb-2">Available: {todo.available ? "Yes" : "No"}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientComponent;
