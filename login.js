
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Exibe o alerta
    alert('Bem-vindo a WEBCONFERENCE\n Estamos muito felizes em recebê-lo em nossa plataforma, onde você poderá participar de conferências virtuais de forma fácil e segura. Nossa missão é proporcionar a você uma experiência única, onde você poderá se conectar com pessoas de todo o mundo, compartilhar conhecimento e aprender em um ambiente virtual moderno e colaborativo.\n Explore nossa variedade de conferências disponíveis e encontre aquelas que mais lhe interessam. Com a nossa plataforma, você poderá participar de conferências sobre diversos temas, desde tecnologia e negócios até saúde e educação.\n Não perca tempo, junte-se a nós agora e comece a sua jornada de aprendizado e networking online!');
    
    // Aguarda 3 segundos (3000 milissegundos) antes de redirecionar
    setTimeout(function() {
        // Redireciona para a página "Apoiantes.html"
        window.location.href = "home.html";
    }, 10);
});



