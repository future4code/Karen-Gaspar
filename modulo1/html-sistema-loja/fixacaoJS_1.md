```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const salario = 2000;
  const comissaoPercentual = valorTotalVendas * 0.05;
  const comissaoFixa = 100 * qtdeCarrosVendidos;
  const comissaoFinal = comissaoFixa + comissaoPercentual
  const salarioFinal = salario + comissaoFinal;
  
  return salarioFinal;
}
```

```
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  if (quantidade < 12) {
    return 1.30 * quantidade
  }else{
    return 1.00 * quantidade
  }
  calculaPrecoTotal()
}
```