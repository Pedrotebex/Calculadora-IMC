document.getElementById('imc-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o reload da página
  
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoDiv = document.getElementById('resultado');
  
    // Remover todas as classes anteriores
    resultadoDiv.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidade');
  
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
      resultadoDiv.textContent = 'Por favor, insira valores válidos.';
      resultadoDiv.style.display = "block";
      return;
    }
  
    const imc = (peso / (altura * altura)).toFixed(2);
  
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      resultadoDiv.style.display = "block";
      resultadoDiv.classList.add('abaixo');
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
      resultadoDiv.style.display = "block";
      resultadoDiv.classList.add('normal');
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
      resultadoDiv.style.display = "block";
      resultadoDiv.classList.add('sobrepeso');
    } else {
      classificacao = 'Obesidade';
      resultadoDiv.style.display = "block";
      resultadoDiv.classList.add('obesidade');
    }
  
    resultadoDiv.textContent = `Seu IMC é ${imc} (${classificacao})`;
  });

  // Função para resetar os campos e o resultado
document.getElementById('reset-btn').addEventListener('click', function () {
    // Limpa os valores dos inputs usando as variáveis
    altura.value = '';
    peso.value = '';
  
    // Esconde o resultado e remove classes
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'none';
    resultadoDiv.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidade');
  
    // Limpa o conteúdo da div resultado
    resultadoDiv.textContent = '';
  });
  