function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Kotak kiri 
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


    const koinB = { 
        colorAtas : [0.820, 0.812, 0.812], 
        colorBawah : [0.540, 0.545, 0.545], 

 
        A : [0.1, 0.12],
        B : [0.44, 0.34],
        C : [0.1, -0.08],
        D : [0.207, -0.07],
        E : [0.407, 0.09],
        F : [0.567, 0.22],
        G : [0.187, -0.18],
        H : [0.173, -0.24],
        I : [0.353, -0.34],
        J : [0.88, -0.08],
        K : [0.353, -0.6],
        L : [0.88, -0.34]
    }

  
    const vertices = [

        ...koinA.A, ...koinA.colorAtas,
        ...koinA.N, ...koinA.colorAtas,
        ...koinA.B, ...koinA.colorAtas,

        ...koinA.N, ...koinA.colorAtas,
        ...koinA.B, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas, 

        ...koinA.B, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas,
        ...koinA.C, ...koinA.colorAtas,

        ...koinA.C, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        ...koinA.M, ...koinA.colorAtas, 

        ...koinA.C, ...koinA.colorAtas,
        ...koinA.D, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        
        ...koinA.D, ...koinA.colorAtas,
        ...koinA.L, ...koinA.colorAtas,
        ...koinA.K, ...koinA.colorAtas, 

        ...koinA.D, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.K, ...koinA.colorAtas, 

        ...koinA.K, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas, 

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.E, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas, 

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.J, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas, 

        ...koinA.F, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas,
        ...koinA.G, ...koinA.colorAtas, 

        ...koinA.G, ...koinA.colorAtas,
        ...koinA.H, ...koinA.colorAtas,
        ...koinA.I, ...koinA.colorAtas,
// BAYANGAN
        ...koinA.N, ...koinA.colorBawah,
        ...koinA.O, ...koinA.colorBawah,
        ...koinA.M, ...koinA.colorBawah,

        ...koinA.O, ...koinA.colorBawah,
        ...koinA.M, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah,

        ...koinA.M, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah,
        ...koinA.L, ...koinA.colorBawah,

        ...koinA.L, ...koinA.colorBawah,
        ...koinA.P, ...koinA.colorBawah,
        ...koinA.Q, ...koinA.colorBawah,

        ...koinA.L, ...koinA.colorBawah,
        ...koinA.Q, ...koinA.colorBawah,
        ...koinA.K, ...koinA.colorBawah,

        ...koinA.Q, ...koinA.colorBawah,
        ...koinA.K, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah,

        ...koinA.K, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah,
        ...koinA.J, ...koinA.colorBawah,

        ...koinA.J, ...koinA.colorBawah,
        ...koinA.R, ...koinA.colorBawah,
        ...koinA.S, ...koinA.colorBawah,

        ...koinA.J, ...koinA.colorBawah,
        ...koinA.S, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,

        ...koinA.S, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,
        ...koinA.T, ...koinA.colorBawah,

        ...koinA.T, ...koinA.colorBawah,
        ...koinA.I, ...koinA.colorBawah,
        ...koinA.U, ...koinA.colorBawah,

        ...koinA.I, ...koinA.colorBawah,
        ...koinA.U, ...koinA.colorBawah,
        ...koinA.H, ...koinA.colorBawah,
// KOIN B



      
  
    ]

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

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
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
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
        if (vertices[206] < -1.0 || vertices[176] > 1.0) {
            speed = speed * -1; 
        }

        for (let i = 400; i < vertices.length; i += 5) { 
            vertices[i] = vertices[i] + speed; 
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.910, 0.827, 0.555, 1.0); //warna krem
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 63; 
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
