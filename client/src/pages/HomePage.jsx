import { useState, useEffect } from 'react';
//import axios from 'axios';
import { listPets } from '../services/pet';


//const api = axios.create({ baseURL: 'http://localhost:3010' });

const HomePage = () => {

  const [pets, setPets] = useState([]);

  const data = () => {
    listPets()
      .then((result) => {
        const data = result.pets;
        setPets(data)
      });
  }

  // const listPets = () => {
  //   api.get('/pet/list')
  //     .then((response) => {
  //       const data = response.data.pets
  //       setPets(data);
  //     })
  // }

  useEffect(() => {
    data()
  }, [])

  return (

    <div className='list-container'>

      {pets.map((pet) => {
        const { _id, name, species, picture } = pet;
        return (
          <div key={_id}>
            <h1>My name is {name}</h1>
            <p>I am a <strong>{species[0].toUpperCase() + species.substring(1)}</strong></p>
            <figure>
              {
                picture ? <img src={picture} alt={name} /> : <div className='placeholder' />
              }
            </figure>
          </div>
        )
      })
      }




    </div>
  );
};

export default HomePage;
