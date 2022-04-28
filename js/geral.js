const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

const inputNome = document.getElementById("nome");
const inputBanner = document.getElementById("banner");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");

const parseQueryString = (queryString) => {
  const tmpQueryString = queryString.slice(1);

  return Object.fromEntries(
    tmpQueryString.split("&").map((param) => {
      return param.split("=");
    })
  );
};

const populaCampos = (data) => {
  const { name, poster, attractions, description, scheduled, number_tickets } =
    data;

  inputNome.value = name;
  inputBanner.value = poster;
  inputAtracoes.value = attractions.join(", ");
  inputDescricao.value = description;
  inputData.value = scheduled.split(".")[0];
  inputLotacao.value = number_tickets;
};

const getEventoPorId = (id) => {
  fetch(`${BASE_URL}/events/${id}`)
    .then((response) => response.json())
    .then(populaCampos);
};