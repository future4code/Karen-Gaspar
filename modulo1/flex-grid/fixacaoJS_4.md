```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const numerosRepetidos = arrayDeNumeros.reduce((total, valor)=> {
  if(valor === numeroEscolhido) {
    return `O número ${numeroEscolhido} aparece ${total + 1}x`
  }else{
    return `Número não encontrado`
  }  
  })
  contaOcorrencias()
}
```