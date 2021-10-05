function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    
    (function(){
    var canv = document.getElementById('myCanvas'),
        c = canv.getContext('2d'),
        gravity = 0.1,
        dampening = 0.99,
        pullStrength = 0.01,
        circles = [ ],
        numCircles = 10,
        repulsion = 1,
        mouseDown = false,
        mouseX, mouseY;
  
    function initializeCircles(){
      // Initialize the array of circle objects
      for(var i = 0; i < numCircles; i++){
        circles.push({
          x: Math.random() * canv.width,
          y: Math.random() * canv.height,
          // (vx, vy) = Velocity vector
          vx: 0,
          vy: 0,
          radius: 20
        });
      }
    }
  
  
   var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
        
           canv.addEventListener('mousedown', function(e){
      mouseDown = true;
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  
    canv.addEventListener('mouseup', function(e){
      mouseDown = false;
    });
    canv.addEventListener('mousemove', function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  
    // Pulls circles toward the mouse when it is down.
    function executeInteraction(){
      var dx, dy, i, circle;
      if(mouseDown){
        for(i = 0; i < numCircles; i++){
          circle = circles[i];
          dx = mouseX - circle.x;
          dy = mouseY - circle.y;
          circle.vx += dx * pullStrength;
          circle.vy += dy * pullStrength;
        }
      }
    }
        
        
    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 63; 
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
     requestAnimationFrame(render);
}
