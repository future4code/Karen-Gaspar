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