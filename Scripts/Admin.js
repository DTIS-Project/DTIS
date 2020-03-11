function giris(){
	var kadi = document.getElementById("kadi").value;
	var sifre = document.getElementById("sifre").value;
	if (kadi == "admin" && sifre == "admin")
		{
			window.open("KullaniciKayit.html");
		}
	else
	{
			alert("kullanıcı adı ya da şifre hatalı");
		}
}