import {React, useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../globals'

function MyComics (props){
const [myComics, setMyComics] = useState([])
 useEffect(()=>{
     async function myShelf (){
         const res = await axios.get(`${BASE_URL}/mycomicbookshelf`)
setMyComics(res.data.results)
     }
 },[])
}