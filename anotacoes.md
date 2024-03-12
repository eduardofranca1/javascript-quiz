innerHTML = adicionar um valor em uma tag html atribuída a uma class ou id

Uma classe não precisa estar definida no HTML para ela existir no CSS e vice-e-versa. A class option é uma classe, e a options é outra, simples assim, o nome delas é diferente, logo elas são classes diferentes.

O atributo data-\* permite ao autor armazenar informações extras em elementos HTML sem a necessidade de uso de um elemento não semântico ou de poluir os nomes de classes, como fazíamos na HTML anterior com o uso de atributos personalizados.

ex:

    for (let i in q.options) {
      optionsHtml += `<div data-op=${i} class="option"><span>${
        parseInt(i) + 1
      }</span> ${q.options[i]}</div>`;
    }
