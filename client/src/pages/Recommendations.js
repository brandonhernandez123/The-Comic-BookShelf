import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
function Recommendations(props) {
  const [recommended, setRecommendations] = useState([])

  useEffect(() => {
    async function getRecommendations() {
      const res = await axios.get(`${BASE_URL}/comicrecommendations`)
      setRecommendations(res.data.recommendations)
    }
    console.log(recommended)
    getRecommendations()
  }, [])

  return (
    <div>
      <h2>Recommended Comicbooks</h2>
      <br />
      <div className="grid">
        {recommended.map((reco) => (
          <div key={reco.title} className="comicCard">
            <h2>{reco.title}</h2>
            <h3>{reco.name}</h3>
            <img src={`${reco.image}`} alt={reco.title} />
            <p>{reco.description}</p>
            <button>Delete Recommendation</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Recommendations
