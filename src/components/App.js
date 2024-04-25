import React, {useState, useEffect } from "react";


function App() {
const [isLoaded, setIsLoaded] = useState(false)
const [dog, setDog] = useState(null)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        setDog(data.message)
        setIsLoaded(!isLoaded)
    }
    )
}, [])



  return (
    <div className="App">
      {isLoaded ? <img src={dog} alt="A Random Dog"/> : <p>Loading...</p>}
    </div>
  );
}

export default App;