function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Koin kiri 
    const koinA = {
        colorAtas : [0.820, 0.812, 0.812], 
        colorBawah : [0.540, 0.545, 0.545], 

        A : [-0.866, -0.37],
        B : [-0.813, -0.33],
        C : [-0.693, -0.28],
        D : [-0.513, -0.26],
        E : [-0.313, -0.28],
        F : [-0.16, -0.33],
        G : [-0.133, -0.37],
        H : [-0.133, -0.43],
        I : [-0.16, -0.48],
        J : [-0.313, -0.53],
        K : [-0.513, -0.55],
        L : [-0.693, -0.53],
        M : [-0.813, -0.48],
        N : [-0.866, -0.43],
        O : [-0.866, -0.5],
        P : [-0.813, -0.55],
        Q : [-0.693, -0.61],
        R : [-0.513, -0.63],
        S : [-0.313, -0.61],
        T : [-0.16, -0.55],
        U : [-0.133, -0.5]
    }

    // Koin kanan
    const koinB = { 
        colorAtas : [0.820, 0.812, 0.812], 
        colorBawah : [0.540, 0.545, 0.545], 
 
        A : [0.12, -0.36],
        B : [0.173, -0.31],
        C : [0.293, -0.26],
        D : [0.473, -0.24],
        E : [0.673, -0.26],
        F : [0.82, -0.31],
        G : [0.853, -0.36],
        H : [0.853, -0.41],
        I : [0.82, -0.46],
        J : [0.673, -0.51],
        K : [0.473, -0.53],
        L : [0.293, -0.51],
        M : [0.173, -0.46],
        N : [0.12, -0.41],
        O : [0.12, -0.47],
        P : [0.173, -0.53],
        Q : [0.293, -0.59],
        R : [0.473, -0.61],
        S : [0.673, -0.59],
        T : [0.82, -0.53],
        U : [0.853, -0.47]
    }

  
    const vertices = [
        ...koinA.A, ...koinA.colorAtas,
        ...koinA.N, ...koinA.colorAtas,
        ...koinA.B, ...koinA.colorAtas,

        ...koinA.N, ...koinA.colorAtas,
        ...koinA.B, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas, //30

        ...koinA.B, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas,
        ...koinA.C, ...koinA.colorAtas,

        ...koinA.C, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas, //60

        ...koinA.C, ...koinA.colorAtas,
        ...koinA.D, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        
        ...koinA.D, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        ...koinA.K, ...koinA.colorAtas, //90

        ...koinA.D, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.K, ...koinA.colorAtas, 

        ...koinA.K, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas, //120

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas, 

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas, //150

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas,
        ...koinA.G, ...koinA.colorAtas, 

        ...koinA.G, ...koinA.colorAtas,
        ...koinA.H, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas, //180
        
// BAYANGAN

        ...koinA.N, ...koinA.colorBawah,
        ...koinA.O, ...koinA.colorBawah,
        ...koinA.M, ...koinA.colorBawah,

        ...koinA.O, ...koinA.colorBawah,
        ...koinA.M, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah, //210

        ...koinA.M, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah,
        ...koinA.L, ...koinA.colorBawah,

        ...koinA.L, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah,
        ...koinA.Q, ...koinA.colorBawah, //240

        ...koinA.L, ...koinA.colorBawah,
        ...koinA.Q, ...koinA.colorBawah,
        ...koinA.K, ...koinA.colorBawah,

        ...koinA.Q, ...koinA.colorBawah,
        ...koinA.K, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah, //270

        ...koinA.K, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah,
        ...koinA.J, ...koinA.colorBawah,

        ...koinA.J, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah,
        ...koinA.S, ...koinA.colorBawah, //300

        ...koinA.J, ...koinA.colorBawah,
        ...koinA.S, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,

        ...koinA.S, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,
        ...koinA.T, ...koinA.colorBawah, //330

        ...koinA.T, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,
        ...koinA.U, ...koinA.colorBawah,

        ...koinA.I, ...koinA.colorBawah,
        ...koinA.U, ...koinA.colorBawah,
        ...koinA.H, ...koinA.colorBawah, //360

// KOIN B 
        ...koinB.A, ...koinB.colorAtas, 
        ...koinB.N, ...koinB.colorAtas,
        ...koinB.B, ...koinB.colorAtas,

        ...koinB.N, ...koinB.colorAtas,
        ...koinB.B, ...koinB.colorAtas,
        ...koinB.M, ...koinB.colorAtas, //390

        ...koinB.B, ...koinB.colorAtas,
        ...koinB.M, ...koinB.colorAtas,
        ...koinB.C, ...koinB.colorAtas,

        ...koinB.C, ...koinB.colorAtas,
        ...koinB.L, ...koinB.colorAtas,
        ...koinB.M, ...koinB.colorAtas, //420

        ...koinB.C, ...koinB.colorAtas,
        ...koinB.D, ...koinB.colorAtas,
        ...koinB.L, ...koinB.colorAtas,
        
        ...koinB.D, ...koinB.colorAtas,
        ...koinB.L, ...koinB.colorAtas,
        ...koinB.K, ...koinB.colorAtas, //450

        ...koinB.D, ...koinB.colorAtas,
        ...koinB.E, ...koinB.colorAtas,
        ...koinB.K, ...koinB.colorAtas, 

        ...koinB.K, ...koinB.colorAtas,
        ...koinB.E, ...koinB.colorAtas,
        ...koinB.J, ...koinB.colorAtas, //480

        ...koinB.F, ...koinB.colorAtas,
        ...koinB.E, ...koinB.colorAtas,
        ...koinB.J, ...koinB.colorAtas, 

        ...koinB.F, ...koinB.colorAtas,
        ...koinB.J, ...koinB.colorAtas,
        ...koinB.I, ...koinB.colorAtas, //510

        ...koinB.F, ...koinB.colorAtas,
        ...koinB.I, ...koinB.colorAtas,
        ...koinB.G, ...koinB.colorAtas, 

        ...koinB.G, ...koinB.colorAtas,
        ...koinB.H, ...koinB.colorAtas,
        ...koinB.I, ...koinB.colorAtas, //540
// BAYANGAN
        ...koinB.N, ...koinB.colorBawah,
        ...koinB.O, ...koinB.colorBawah,
        ...koinB.M, ...koinB.colorBawah,

        ...koinB.O, ...koinB.colorBawah,
        ...koinB.M, ...koinB.colorBawah,
        ...koinB.P, ...koinB.colorBawah, //570

        ...koinB.M, ...koinB.colorBawah,
        ...koinB.P, ...koinB.colorBawah,
        ...koinB.L, ...koinB.colorBawah,

        ...koinB.L, ...koinB.colorBawah,
        ...koinB.P, ...koinB.colorBawah,
        ...koinB.Q, ...koinB.colorBawah, //600

        ...koinB.L, ...koinB.colorBawah,
        ...koinB.Q, ...koinB.colorBawah,
        ...koinB.K, ...koinB.colorBawah,

        ...koinB.Q, ...koinB.colorBawah,
        ...koinB.K, ...koinB.colorBawah,
        ...koinB.R, ...koinB.colorBawah,

        ...koinB.K, ...koinB.colorBawah,
        ...koinB.R, ...koinB.colorBawah,
        ...koinB.J, ...koinB.colorBawah,

        ...koinB.J, ...koinB.colorBawah,
        ...koinB.R, ...koinB.colorBawah,
        ...koinB.S, ...koinB.colorBawah, //660

        ...koinB.J, ...koinB.colorBawah,
        ...koinB.S, ...koinB.colorBawah,
        ...koinB.I, ...koinB.colorBawah,

        ...koinB.S, ...koinB.colorBawah,
        ...koinB.I, ...koinB.colorBawah,
        ...koinB.T, ...koinB.colorBawah,

        ...koinB.T, ...koinB.colorBawah,
        ...koinB.I, ...koinB.colorBawah,
        ...koinB.U, ...koinB.colorBawah,

        ...koinB.I, ...koinB.colorBawah,
        ...koinB.U, ...koinB.colorBawah,
        ...koinB.H, ...koinB.colorBawah //720
    ]

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick);

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0120;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[711] > 1.0 || vertices[361] < -1.0) {
            speed = speed * -1;
        }
        for (let i = 361; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        if (!freeze) {
            moveVertices();
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        
        change = change + speed;

        gl.uniform1f(uChange, change);

        gl.clearColor(0.440, 0.869, 1.0, 1.0); 
        gl.clear(gl.COLOR_BUFFER_BIT);

        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 500;

        gl.drawArrays(primitive, offset, nVertex);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}









