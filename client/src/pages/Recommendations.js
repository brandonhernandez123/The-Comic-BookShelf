import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import NewRecommendation from './MakeRecommendation'
function Recommendations(props) {
  const [recommended, setRecommendations] = useState([])

  useEffect(() => {
    async function getRecommendations() {
      const res = await axios.get(`${BASE_URL}/comicrecommendations`)
      setRecommendations(res.data.recommendations)
    }
    getRecommendations()
  }, [])

  const deleteReco = async (index) => {
    try {
      const id = `${recommended[index]._id}`
      const res = await axios.delete(`${BASE_URL}/comicrecommendations/${id}`)
      window.location.reload()
    } catch (error) {
      alert('nothing deleted')
    }
  }

  return (
    <div>
      <h2>Recommended Comicbooks</h2>
      <br />
      <div className="grid">
        {recommended.map((reco, index) => (
          <div key={reco.title} className="comicCard">
            <h2>{reco.title}</h2>
            <h3>{reco.name}</h3>

            <img src={`${reco.image}`} alt={reco.title} />
            <p>{reco.description}</p>
            <button onClick={() => deleteReco(index)}>
              Delete Recommendation
            </button>
          </div>
        ))}
        <br />
        <div>
          <NewRecommendation />
        </div>
      </div>
    </div>
  )
}
export default Recommendations
