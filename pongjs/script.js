let ctx, p1_y, p2_y, p1_points, p2_points;
let w = 1000, h = 700, pw = 20, ph = 100, p1_x = 7, p2_x = w - pw - 7;
let p1_key, p2_key;
let ballX, ballY, ballX_ori, ballY_ori;
let gameStarted = false;




function init() {
    let c = document.getElementById("canva");
    ctx = c.getContext("2d");

    p1_y = (h / 2 -50)
    p2_y = (h / 2 -50)

    p1_points = 0
    p2_points = 0

    drawStartScreen();

    document.addEventListener("keydown", function screen (event) {
        if (event.keyCode === 32 && !gameStarted) {
            gameStarted = true;
            setInterval(fps, 1000 / 60); // Definindo quantos quadros em média 16,66 ms
        }
    });


    console.log(`${p1_points}`)
    ball()
}

function el(x, y, w, h, color) { /// definindo os parametros para o draw()
    ctx.fillStyle = color;
    if (w === h) {
        // Se a largura e altura forem iguais, desenha um círculo
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, Math.PI * 2);
        ctx.fill();
    } else {
        // Caso contrário, desenha um retângulo
        ctx.fillRect(x, y, w, h);
    }
}

function drawStartScreen() {
    el(0, 0, w, h, "#000"); // Background
    ctx.font = "30px Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText("Pressione a barra de espaço para começar", w / 4, h / 2);
}




function points() {
    ctx.font = "50px Arial"
    ctx.fillStyle = "#fff"
    ctx.fillText(p1_points, w / 4, 50)
    ctx.fillText(p2_points, 3 * (w / 4), 50)
}

function draw() {
    el(0, 0, w, h, "#000"); //Background
    el(p1_x, p1_y, pw, ph, "#ff0000")  //Barra 1
    el(p2_x, p2_y, pw, ph, "#0000ff")  //Barra 2
    el(w / 2 - 5, 0, 5, h, "#ff0000") //Linha
    el(w / 2 + 5, 0, 5, h, "#0000ff")
    el(h / 2 - 5)
    el(ballX, ballY, 20, 20, "#fff")    //Bola
    points(); // pontos
}

function ball() {
    ballX_ori = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ballY_ori = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ballX = w / 2 - 10
    ballY = h / 2 - 10
}





function fps() {

    if (p1_key == 87 && p1_y > 0) {
        p1_y -= 10  //Calcula para cima
    } else if (p1_key == 83 && p1_y + ph < h) {
        p1_y += 10   //Calcula para baixo
    }

    if (p2_key == 38 && p2_y > 0) {
        p2_y -= 10  //Calcula para cima
    } else if (p2_key == 40 && p2_y + ph < h) {
        p2_y += 10//Calcula para baixo
    }

    //Verificação de colisão
    if (ballX + 10 >= p1_x && ballX <= p1_x + pw && ballY + 10 >= p1_y && ballY <= p1_y + ph) {
        ballX_ori = 1;
    }
    if (ballX + 10 >= p2_x && ballX <= p2_x + pw && ballY + 10 >= p2_y && ballY <= p2_y + ph) {
        ballX_ori = -1;
    }


    //Colisão do teto e chão

    if (ballY + 10 >= h || ballY <= 0) ballY_ori *= - 1

    //Velocidade aplicada na saida
    ballX += 5 * ballX_ori
    ballY += 5 * ballY_ori


    //pontos
    if (ballX + 10 > w) {
        p1_points++
        ball()
    } else if (ballX < 0) {
        p2_points++
        ball()
    }


    draw()
}



document.addEventListener("keydown", function (ky) { // Definindo as teclas
    if (ky.keyCode == 87) {
        p1_key = ky.keyCode;    // W
    } else if (ky.keyCode == 83) {
        p1_key = ky.keyCode;    // S
    } else if (ky.keyCode == 38) {
        p2_key = ky.keyCode;    // CIMA
    } else if (ky.keyCode == 40) {
        p2_key = ky.keyCode;    // BAIXO
    }


})

document.addEventListener("DOMContentLoaded", init);