import axios from 'axios';

export const fetchProgramacoes = () => {
  return axios.get('http://127.0.0.1:8000/api/programacoes/')
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    });
};
export const fetchRadio = () => {
  return axios.get('http://127.0.0.1:8000/CadastroRadio/')
  .then(response => response.data)
  .catch(error => {
    console.log(error);
    return []
  })
};

