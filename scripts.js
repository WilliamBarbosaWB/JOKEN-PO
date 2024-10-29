const result = document.querySelector(".result");
const pontoHumano = document.querySelector("#humano-point")
const pontoMaquina = document.querySelector("#maquina-point")


let humanoNumero = 0
let maquinaNumero = 0

const playHumano = (escolhaHumana) => {
  jogo(escolhaHumana, playMaquina());
};

const playMaquina = () => {
  const opcoes = ["rock", "paper", "tesoura"];

  const randomNumber = Math.floor(Math.random() * 3); //arredondando para baixo o valor que sortear

  return opcoes[randomNumber];
};

const jogo = (humano, maquina) => {
  console.log("Humano: " + humano + " Maquina:" + maquina);

  if (humano === maquina) {
    result.innerHTML = "Deu empate";

  } else if (
    (humano === "paper" && maquina === "rock") ||
    (humano === "rock" && maquina === "tesoura") ||
    (humano === "tesoura" && maquina === "paper")
  ) {

    humanoNumero ++ //toda vez que o humano ganhar adicionar mais 1
    pontoHumano.innerHTML = humanoNumero //adiciona no paragrafo dos pontos do humano.
    result.innerHTML = "Você ganhou!";

  } else {

    maquinaNumero ++
    pontoMaquina.innerHTML = maquinaNumero
    result.innerHTML = "A máquina ganhou!";
  }
};
