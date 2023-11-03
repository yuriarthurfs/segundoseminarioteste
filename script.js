function login() {
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("senha").value;
  
    if (username === "") {
      openPopup("loginErrorPopup");
    } else if (password === "") {
      openPopup("passwordErrorPopup");
    } else {
      window.location.href = "logado.html";
    }
  }
  
  function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  }
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
  }