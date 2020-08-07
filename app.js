var relogio;
var periodo;
var compHora;
var imagemAtual;
/* Caminho Imagens */
var images = new Array();
images[0] = 'https://source.unsplash.com/1600x900/?nature';
images[1] = 'https://source.unsplash.com/1600x900/?nature';
images[2] = './img/dia.jpg';

/* -----------------------------Pegar a hora do Windows---------------------- */

function horario() {
  compHora = new Date();
  var hora = compHora.getHours();
  var minuto = compHora.getMinutes();
  var segundo = compHora.getSeconds();

  /* Coloca o 0 para formatar a hora */
  if (hora < 10) {
    hora = '0' + hora;
  }
  if (minuto < 10) {
    minuto = '0' + minuto;
  }
  if (segundo < 10) {
    segundo = '0' + segundo;
  }
  /* -------------------------------------------------------------------------- */

  /* Junta os elementos formatados da hora */
  var horaCompleta = hora + ':' + minuto + ':' + segundo;

  /* Coloca a hora dentro do h1 */
  document.getElementById('relogio').innerText = horaCompleta;

  /* --------Mensagem em que periodo do dia estamos manhã/tard/noite ------------*/

  if (hora >= 0 && hora <= 11) {
    msg = 'Bom Dia !';
    imagemAtual = 2;

    document.body.style.backgroundImage = 'url(' + images[imagemAtual] + ')';
  }
  if (hora >= 12 && hora < 18) {
    msg = 'Boa Tarde !';
    imagemAtual = 0;
    document.body.style.backgroundImage = 'url(' + images[imagemAtual] + ')';
  }

  if (hora >= 18 && hora <= 23) {
    msg = 'Boa Noite !';
    imagemAtual = 1;
    document.body.style.backgroundImage = 'url(' + images[imagemAtual] + ')';
  }
  /* -------------------------------------------------------------------------- */

  /* Coloca a hora dentro do h2 */
  document.getElementById('msg').innerText = msg;
}
/* A cada 1 segundo atualiza a hora */
setInterval(horario, 1000);
