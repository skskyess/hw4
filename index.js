document.addEventListener("DOMContentLoaded", function(e) {
   console.log("onload");
   setContent();
});

const getRes = async() => {
    const res = await fetch('https://catfact.ninja/fact');
    if (!res.ok) {
        throw new Error(`status: ${res.status}`);
    }

    return await res.json(); 
}

function logout() {
    localStorage.setItem('login', "false");
    window.location.href = 'login.html';
}

function setContent() {
    let login = localStorage.getItem('login');
    console.log(login);
    if (login != "true") {
        alert("Вы не прошли авторизацию");
        window.location.href = 'login.html';
        return;
    }
    console.log(login, "true");
    let catsUrl = ["cat10.jfif",
    "cat1.jpg",
    "cat2.jpeg", 
    "cat3.jfif", 
    "cat4.jpg", 
    "cat5.jfif",
    "cat6.jfif",
    "cat7.jpeg",
    "cat8.jpg",
    "cat9.jpeg"];
    for (let i  = 0; i < 10; i++) {
        getRes().then(data =>  {
            console.log(data);
            const newDiv = document.createElement("div");
            const imgElement = document.createElement("img");
            imgElement.src = catsUrl[i];
            //imgElement.width = "20%";
            const newContent = document.createTextNode(data.fact);
        
            newDiv.appendChild(newContent);
            newDiv.appendChild(imgElement);
            newDiv.style = "width: 20%; display: inline-block";
            document.body.appendChild(newDiv);
        });
    }
   

} 
