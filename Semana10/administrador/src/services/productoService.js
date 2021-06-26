import axios from "axios"

//const URL = "https://609f105d5f32be00171cd33b.mockapi.io/Productos"
const URL = "https://60b404a64ecdc100174801d1.mockapi.io/api/v1/users"


const obtenerProductos = async () => {
  try {
    let {data} = await axios.get(URL)
    return data
  } catch (error) {
    throw error
  }
  
}


export {
    obtenerProductos
  }