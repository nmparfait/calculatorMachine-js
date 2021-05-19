function Calculadora() {
  this.display = document.querySelector('.display');

  this.capturaCliques = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };
  //iniciar a operacao
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  // capturarEnter
  this.capturaEnter = () => {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  //addicionando o numero
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  //clear o valor
  this.clear = () => (this.display.value = '');

  //deletar o valor na tela
  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  //realiza a conta
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('conta inválida');
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  };
}

const comeca = new Calculadora();
comeca.inicia();
