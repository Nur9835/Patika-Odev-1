import getData from './getData.js';

(async () => {
  const result = await getData(1);
  console.log(result);
})();