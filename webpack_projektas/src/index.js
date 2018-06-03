import axios from 'axios';

(function() {
  axios.get('https://raw.githubusercontent.com/vygandas/javascript-pagrindai-labas-pasauli/master/Data/knygos.json?dsfsdf=455')
    .then(function (response) {
      console.log(response);
      let knygos = response.data;
      console.log(knygos);
      console.log(knygos.length);

      knygos.map(function(k) {
        console.log('Pavadinimas', k.title);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
})();
