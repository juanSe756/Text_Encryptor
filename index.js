document.querySelector("textarea").focus();
function encrypt() {
  var text = document.getElementById("text1").value.toLowerCase();
  if (text.length != 0) {
    untoggle();
    toggle();
    console.log("entréxd");
    document.getElementById("msg-result").innerHTML = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("text1").value = "";
  } else {
    untoggle();
    alert("Please enter a text");
  }
  document.querySelector("textarea").focus();
}
function decrypt() {
  var text = document.getElementById("text1").value.toLowerCase();
  if (text.length != 0) {
    toggle();
    document.getElementById("msg-result").innerHTML = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.getElementById("text1").value = "";
  } else {
    untoggle();
    alert("Please enter a text");
  }
  document.querySelector("textarea").focus();
}
function toggle() {
  var img = document.getElementById("person");
  var text = document.getElementById("msg-result");
  var info = document.getElementById("encrypted-msg");
  var copy = document.getElementById("copy-space");
  if (img.style.visibility === "visible") {
    img.style.visibility = "hidden";
    info.style.visibility = "hidden";
    text.style.visibility = "visible";
    copy.style.visibility = "visible";
  }
}
function untoggle() {
  var img = document.getElementById("person");
  var info = document.getElementById("encrypted-msg");
  var text = document.getElementById("msg-result");
  var copy = document.getElementById("copy-space");

  img.style.visibility = "visible";
  info.style.visibility = "visible";
  text.style.visibility = "hidden";
  copy.style.visibility = "hidden";
}
function copy() {
  var text = document.getElementById("msg-result");
  text.select();
  // Copiar el texto seleccionado al portapapeles usando el API Clipboard
  navigator.clipboard
    .writeText(text.value)
    .then(() => {
      // Alerta al usuario que el texto ha sido copiado
      alert("El texto ha sido copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
  document.querySelector("textarea").focus();
}
