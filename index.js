//obtener el text area y el boton

const boton = document.getElementById("boton");
const textarea = document.getElementById("textarea");
const tablacabeza = document.getElementById("tablacabeza");
const tablacuerpo = document.getElementById("tablacuerpo");

boton.addEventListener("click", (event) => {
  const lineas = textarea.value.split("\n") || [];
  if (lineas) {
    for (let i = 0; i < lineas.length; i++) {
      const palabras = lineas[i].split(",");
      const tr = document.createElement("tr");
      palabras.forEach((element) => {
        if (i === 0) {
          const th = document.createElement("th");
          th.innerHTML = element;
          tablacabeza.appendChild(th);
        } else {
          const td = document.createElement("td");
          td.innerHTML = element
          tr.appendChild(td)
        }
      });
      tablacuerpo.appendChild(tr)
    }
  }
});
