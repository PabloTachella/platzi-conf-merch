import { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAddress = address => {
    const [map, setMap] = useState({})
    const credentials = 'keyGeocode'
    //GeoCode es una API que nos permite pasarle una direccion y nos devuelve 
    //un array con informacion como latitud y longitud correspondientes a dicha direccion
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${credentials}`

    useEffect(async () => {
        //axios es una herramienta que nos ayuda a manejar peticiones a APIs en la nube, similar a un fetch
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location)
    }, [])
    return map
}

export default useGoogleAddress