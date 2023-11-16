      function exercicio1(){
         let somar = 100 + 10;
         let sub = 100 - 10;
         let div = 100 / 10;
         let multiplicar = 10 * 100;
         alert(`Soma: ${somar} \nSubtração: ${sub} \nDivisão: ${div} \nMultiplicação: ${multiplicar}`)
      }

      function exercicio2() {
         var array = "";
         for (let index = 10; index <= 100; index++) {
          if (index != 100) {
              array += index + ", ";
            }
          else if(index == 100){
              array += index + ".";
            }
          }
        alert(array)

      }
      function exercicio3(){
        const a = 5;
        var tabuada = "";
        for(let i = 1; i <= 10; i++){
            tabuada += `5 X ${i} = ${a * i} \n`;
        }
        alert(tabuada)
      }
      function exercicio4(){
        var numEx4 = parseFloat(document.getElementById('numEx4').value);
        var tabuadaEx4 = "";
        for(let i = 1; i <= 10; i++){
            tabuadaEx4 += `${numEx4} x ${i} = ${numEx4 * i} \n`;
        }
        alert(tabuadaEx4)
      }
      function exercicio5() {
        var num1 = parseFloat(document.getElementById('num1').value);
        var num2 = parseFloat(document.getElementById('num2').value);
        var operacao = document.getElementById('operacao').value;
        var resultadoElement = document.getElementById('resultado');
        var resultado = 0;
        switch (operacao) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    alert("Não é possível realizar divisões por zero!");
                    return;
                }
                break;
        }  
        resultadoElement.value = resultado;
      }
        function exercicio6() {
          let a = [1,2,3,4,5,6,7,8,9,10]
          var par = "";
          a.forEach(num => {

            if(num % 2 == 0){
              par += num + " "
            }
          });
          alert(par)
        }
        function exercicio7() {
          var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
          var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
          var percImpostos = parseFloat(document.getElementById('percImpostos').value);
          
          var valorFinal = 0;

          if (percImpostos <= 100 && percDistribuidor <= 100 && percImpostos >= 0 && percDistribuidor >= 0) {
              valorFinal = custoFabrica + (custoFabrica * (percImpostos / 100) + (custoFabrica * (percDistribuidor / 100)));
              document.getElementById('valorFinal').value = valorFinal;
          } else {
              alert("Porcentagem inválida.");
          }
      }
