import axios from 'axios'

const url = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, { content, important: false})
  return response.data
}

const update = async (id, note) => {
  const response = await axios.put(`${url}/${id}`, note)
  return response.data
}


export default {
  getAll, createNew, update
}