
let ctx, p_1y, p_2y, p_1points, p_2points;
let w = 900, h = 600, p_w = 25, p_h = 200, p_1x = 10, p_2x = w - p_w - 10;
let ball_x_orientation, ball_y_orientation, ball_x, ball_y;
let ball_color = "#FFF"
function rissi() {
    let c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    p_1y = p_2y = (h / 2) - (p_h / 2)


    p_1points = 0;
    p_2points = 0;

    setInterval(loop, 1000 / 60)

    console.log(`${p_1points} vs ${p_2points}`)
    ball()

}

function loop() {

    if (p_1key == 87 && p_1y > 0) {
        p_1y -= 10;
    } else if (p_1key == 83 && p_1y + p_h < h) {
        p_1y += 10;
    }

    if (p_2key == 38 && p_2y > 0) {
        p_2y -= 10;
    } else if (p_2key == 40 && p_2y + p_h < h) {
        p_2y += 10;
    }


    //Está verificando se bate nas barras
    if (ball_x >= p_1x && ball_x <= p_1x + 10 && ball_y >= p_1y && ball_y <= p_1y + p_h) {
        ball_x_orientation = 1
        ball_color = "#7451ec"
    } else if (ball_x >= p_2x && ball_x <= p_2x + 10 && ball_y >= p_2y && ball_y <= p_2y + p_h) {
        ball_x_orientation = -1
        ball_color = "#4ff795"
    }

    //Está verificando se bate no teto ou chão
    if (ball_y + 10 >= h || ball_y <= 0) ball_y_orientation *= -1

    //Faz com que se a bola se mova do eixo X e eixo Y
    ball_x += 5 * ball_x_orientation
    ball_y += 5 * ball_y_orientation

    //Retorna bola para o inicio
    if (ball_x + 10 > w) {
        p_1points++
        ball()
    } else if (ball_x < 0) {
        p_2points++
        ball()
    }



    draw()
}



function ball() {
    ball_x_orientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ball_y_orientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ball_x = w / 2 - 10
    ball_y = h / 2 - 10
}


//Placar
function points() {
    ctx.font = "50px Arial"
    ctx.fillStyle = "#fff"
    ctx.fillText(p_1points, w / 4, 50)
    ctx.fillText(p_2points, 3 * (w / 4), 50)
}

function rect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function draw() {
    rect(0, 0, w, h, "#0f0d22");
    rect(p_1x, p_1y, p_w, p_h, "#4ff795");
    rect(p_2x, p_2y, p_w, p_h, "#7451ec");
    rect(w / 2 - 5, 0, 5, h, "#fff")
    rect(ball_x, ball_y, 20, 20, ball_color);
    points()
}

let p_1key, p_2key

document.addEventListener("keydown", function (rs) {
    if (rs.keyCode == 87) { // "W" para jogador 1
        p_1key = rs.keyCode;
    } else if (rs.keyCode == 83) { // "S" para jogador 1
        p_1key = rs.keyCode;
    } else if (rs.keyCode == 38) { // Seta para cima para jogador 2
        p_2key = rs.keyCode;
    } else if (rs.keyCode == 40) { // Seta para baixo para jogador 2
        p_2key = rs.keyCode;
    }
});

rissi();