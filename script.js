function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDel: document.querySelector('btn-del'),
    btnEq: document.querySelector('btn-eq'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    //pressiona Enter para realizar a operacao
    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    //clear the value
    clearDisplay() {
      this.display.value = '';
    },

    //apagar o ultimo numero
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    //realizar a conta
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert('Conta invalida');
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert('Conta invalida');
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculaldora = criaCalculadora();
calculaldora.inicia();
