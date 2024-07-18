document.getElementById('sim').addEventListener('click', function() {
  enviarResposta('Sim');
  document.getElementById('resposta').textContent = 'Ótimo! Vamos assistir Deadpool e Wolverine juntos!';
});

document.getElementById('nao').addEventListener('click', function() {
  enviarResposta('Não');
  document.getElementById('resposta').textContent = 'Que pena! Talvez outra hora.';
});

function enviarResposta(resposta) {
  document.getElementById('inputResposta').value = resposta;
  document.getElementById('form').submit();
}

function atualizarContador() {
  const dataFutura = new Date('2024-07-24T00:00:00').getTime();
  const agora = new Date().getTime();
  const distancia = dataFutura - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById('tempoRestante').textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
      clearInterval(intervalo);
      document.getElementById('tempoRestante').textContent = 'O evento já começou!';
  }
}

const intervalo = setInterval(atualizarContador, 1000);
