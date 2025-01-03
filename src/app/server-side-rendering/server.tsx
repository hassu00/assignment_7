import React from 'react'

const server = () => {
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
    }
    console.log()
  return (
    <div></div>
  )
}

export default server