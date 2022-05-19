import axios from 'axios'

const host = 'https://api.alphabet-typer.com'

axios.defaults.headers.common = {
  'x-api-key': 'valid-key'
}

export function getAll ({ commit }, { limit = 10, filter = 0, offset = 0 }) {
  return new Promise((resolve, reject) => {
    commit('GET_RECORDS')
    axios
      .get(`${host}/api/records?limit=${limit}&filter=${filter}&offset=${offset}`)
      .then((response) => {
        commit('RECEIVE_RECORDS', { records: response.data, offset })
        resolve()
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}

export function store ({ commit }, record) {
  return new Promise((resolve, reject) => {
    commit('POST_RECORD', record)
    axios
      .post(`${host}/api/records`, record)
      .then((response) => {
        commit('RECORD_POSTED', response.data)
        resolve()
      })
      .catch((err) => {
        console.log(err)
        reject(err)
      })
  })
}
