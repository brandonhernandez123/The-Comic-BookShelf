import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from '../components/NewRecommendation'
import { BASE_URL } from '../globals'

const NewRecommendation = () => {
  const [newRecommendation, setNewRecommendation] = useState({
    name: '',
    title: '',
    image: '',
    description: ''
  })

  const onSubmit = async () => {
    const res = await axios.post(
      `${BASE_URL}/comicrecommendations`,
      newRecommendation
    )
  }

  const handleChangeName = (e) => {
    setNewRecommendation({ ...newRecommendation, name: e.target.value })
  }
  const handleChangeTitle = (e) => {
    setNewRecommendation({ ...newRecommendation, title: e.target.value })
  }
  const handleChangeImage = (e) => {
    setNewRecommendation({ ...newRecommendation, image: e.target.value })
  }
  const handleChangeDescription = (e) => {
    setNewRecommendation({ ...newRecommendation, description: e.target.value })
  }
  console.log(newRecommendation)
  return (
    <div>
      <h1>Add a Comic Recommendation below</h1>
      <br />
      <form onSubmit={onSubmit}>
        <Input
          onChange={handleChangeName}
          value={newRecommendation.name}
          placeholder="name"
          type="text"
        />
        <br />
        <Input
          onChange={handleChangeTitle}
          value={newRecommendation.title}
          placeholder="title"
          type="text"
        />
        <br />
        <Input
          onChange={handleChangeImage}
          value={newRecommendation.image}
          placeholder="image url"
          type="text"
        />
        <br />
        <Input
          onChange={handleChangeDescription}
          value={newRecommendation.description}
          placeholder="description"
          type="text"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewRecommendation
