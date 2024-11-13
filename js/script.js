function CheckPass(){
    const password = document.getElementById("password").value;
    const correctpassword = "D3Z3MBR0";

    if (password === correctpassword)
    {
        window.location.href = "access_garanted.html"
    } else {
        alert("senha incorreta")
    }
}