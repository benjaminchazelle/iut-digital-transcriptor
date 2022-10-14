const input = document.querySelector("input")
const submit = document.querySelector("button")

const pre = document.querySelector("pre")

submit.onclick = () => {

  const search = input.value

  pre.textContent = "Résultat"

}