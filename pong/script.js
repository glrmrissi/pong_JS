
let ctx, p_1y, p_2y, p_1points, p_2points;
let w = 900, h = 600, p_w = 25, p_h = 200, p_1x = 10, p_2x = w - p_w - 10;

function rissi() {
    let c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    p_1y = p_2y = (h / 2) - (p_h / 2)


    p_1points = 0;
    p_2points = 0;

    setInterval(loop, 1000 / 60)

    console.log(`${p_1points} vs ${p_2points}`)
}

function loop() {

    if (p_1key == 87 && p_1key > 0) {
        p_1y -= 10
    } else if (p_1key == 83 && p_1y + p_h < h) {
        p_1y += 10
    }

    if (p_2key == 38 && p_2key > 0) {
        p_2y -= 10
    } else if (p_2key == 40 && p_2y + p_h < h) {
        p_2y += 10
    }


    draw()
}


let ball_x_orientation, ball_y_orientation, ball_x, ball_y;

function ball() {
    ball_x_orientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ball_y_orientation = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3
    ball_x = w / 2 - 10
    ball_y = h / 2 - 10
}


function rect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = "#000";
}

function draw() {
    rect(0, 0, w, h, "#000");
    rect(p_1x, p_1y, p_w, p_h, "#fff");
    rect(p_2x, p_2y, p_w, p_h, "#fff");
    rect(w / 2 - 5, 0, 5, h, "#fff")
    rect(ball_x, ball_y, 15, 15, "#fff");
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