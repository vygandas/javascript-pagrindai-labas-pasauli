import axios from 'axios';

(function() {
  axios.get('https://raw.githubusercontent.com/vygandas/javascript-pagrindai-labas-pasauli/master/Data/knygos.json#')
    .then(function (response) {
      console.log(response);
      let knygos = JSON.parse(response.data);
      console.log(knygos);
      console.log(knygos.length);
    })
    .catch(function (error) {
      console.log(error);
    });
})();
