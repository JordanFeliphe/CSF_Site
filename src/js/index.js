function sendMail() {
  var e = document.getElementById("sendButton"),
    t = document.getElementById("name").value.trim(),
    a = document.getElementById("email").value.trim(),
    n = document.getElementById("message").value.trim();
  if (!t || !a || !n) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  (e.innerText = "Enviando..."),
    (e.disabled = !0),
    emailjs
      .send("service_v5hqxhg", "template_zzh69qm", {
        name: t,
        email: a,
        message: n,
      })
      .then((t) => {
        (document.getElementById("name").value = ""),
          (document.getElementById("email").value = ""),
          (document.getElementById("message").value = ""),
          (e.innerText = "Enviado"),
          (window.location.href =
            "https://csfdigital.com.br/Beta/thanksemail.html");
      })
      .catch((t) => {
        console.error(t),
          alert(
            "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
          ),
          (e.innerText = "Enviar"),
          (e.disabled = !1);
      });
}
