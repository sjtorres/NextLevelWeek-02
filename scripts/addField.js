// Procurar o botao ->  executar uma ação
document.querySelector("#add-time")
// Quando clicar no botao ->
.addEventListener('click', cloneField)

  // Executar uma ação
  function cloneField() {
    // Duplicar campos. Que campos?->
    const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, Limpar
    fields.forEach(function(field) {
      field.value = ""
    })
    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
  }