"use client";

import { useState } from "react";
import Image from "next/image";

interface Todo {
  title: string;
  id: number;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

// interface ServerProps {
//   onClick: () => void;
// }

const Client = ()=> {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
 const [showCard, setShowCard] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products",
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const parsedResponse: Todo[] = await response.json();
      setData(parsedResponse);
     
      setTimeout(() => {
        setShowCard(true);
        setLoading(false);
      }, 3000); 
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
      setLoading(false)
    }
  };

  const handleButtonClick = () => {
    fetchData();
  //  {onClick()}
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!showCard && !loading && (
        <button
          onClick={handleButtonClick}
          className="hover:scale-[1.1] bg-blue-500 w-[280px] h-[80px] text-lg font-bold text-white px-4 py-2 rounded-lg mb-4"
        >
          CLIENT-SIDE-RENDERING
        </button>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-blue-500 text-3xl font-bold">Loading...</p>}
      {!loading && showCard && (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {data.map((todo) => (
            <div
              key={todo.id}
              className="bg-white shadow-lg rounded-lg p-6 w-[400px] hover:scale-[1.1]"
            >
              <div className="relative w-full h-48">
                <Image
                  src={
                    todo.image ||
                    `https://via.placeholder.com/150?text=No+Image`
                  }
                  alt={todo.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">ID: {todo.id}</h2>
              <h2 className="text-lg font-normal mb-2">Title: {todo.title}</h2>
              <h2 className="text-lg font-normal mb-2">Price: ${todo.price}</h2>
              <h2 className="text-lg font-normal mb-2">
                Available: {todo.available ? "Yes" : "No"}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Client;
