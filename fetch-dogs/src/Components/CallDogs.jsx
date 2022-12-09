import { useEffect, useState } from "react";

import './CallDogs.css'

const callDogs = () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const [dogs, setDogs] = useState({});
    const [dogImg, setDogImg] = useState({});

    async function fetchData(){
        const res = await fetch(url)
        const data = await res.json()
        setDogs(data)
    }

    useEffect(()=>{
        fetchData()
    }, [dogImg] )

    function handleClick(){
        let dog = {
            message : '',
            status : ''
        }
        dog = dogs
        setDogImg(dog)
    }

  return (
    <div>
        <button onClick={() => handleClick() }> Click me </button>
        <div>
            <img src={ dogImg.message } className='img' />
        </div>
    </div>
  )
}

export default callDogs