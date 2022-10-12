function validarUsuario() {
    var password = document.getElementById("password").value;
    var mail = document.getElementById("email").value;
  
    if (password == "Corsario" && mail == "corsariooscar4@gmail.com") {
      window.open("index.html");
    } else {
      alert("Usuario o contraseña incorrecta");
      console.log("error");
    }
  }

  function enviarMensaje() {
    var nombre = document.getElementById("input").value;
    var texto = document.getElementById("textarea").value;
  
    if (input.value != "" && textarea.value != "") {
      alert("Se abrira una ventana para enviar tu mensaje");
      window.location.href =
        "mailto:corsariooscar4@gmail.com?subject=" +
        "Alura Geek - Mensaje" +
        "&body=" +
        encodeURIComponent("Nombre: " + nombre + "\r" + "Comentarios: " + texto);
  
      document.getElementById("input").value = "";
      document.getElementById("textarea").value = "";
    } else {
      alert("Ingrese su nombre y mensaje");
    }
  }