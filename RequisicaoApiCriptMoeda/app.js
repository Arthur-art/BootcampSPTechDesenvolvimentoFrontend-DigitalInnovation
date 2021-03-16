/*Fetch */

//My api key
let apikey = {
  key: "d3bb19d1-043b-404c-a1a9-ede9cf72d580",
};

//GET Fetch Requisition
fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apikey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisicao, status" + response.status
      );
    return response.json();
  })
  .then((api) => {
    //console.log(api);
    let texto = "";
    //GET 10 coins and symbols
    for (let i = 0; i < 10; i++) {
      //Show API information

      texto =
        texto +
        `
        <div class="media">
        <img src="./dollar.png" class="align-self-center mr-3" alt="coin" width="100" height="60">
        <div class="media-body">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>${api.data[i].symbol}</p>
        </div>
    </div>
        `;
        document.getElementById("coins").innerHTML = texto;
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
