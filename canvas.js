var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
var maxradius = 55;
var minradius = 5;

var cor = [
    '#ffaa33',
    '#99ffaaa',
    '#00ff00', 
    '#4411aa',
    '#ff1100',
]



function Circle(x, y, velox, veloy,radius){
    this.x = x;
    this.y = y;
    this.velox = velox;
    this.veloy = veloy;
    this.radius= radius;
    this.color = cor[Math.floor(Math.random()* cor.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        c.strokeStyle = "blue";
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ){
            this.velox = -this.velox;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.veloy = -this.veloy;
        }
        this.x+=this.velox;
        this.y+=this.veloy;

        if(mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y - this.y > -80){
            if(this.radius < maxradius){
            this.radius +=2;
        }}else if(this.radius > minradius){
            this.radius-=1;
        }
        this.draw();
    }
}



circleArray=[]
for(var i =0; i <= 400; i++){
    var x = Math.random()*(innerWidth - radius *2) + radius;
    var y = Math.random()*(innerHeight - radius *2) + radius;
    var velox = (Math.random() - 0.5)*8;
    var veloy = (Math.random() - 0.5)*8;
    var radius = 30;
    circleArray.push(new Circle(x,y,velox,veloy,radius));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for(var i =0; i <= circleArray.length; i++){
        circleArray[i].update();
    }
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false); 
    c.strokeStyle = "blue";
    c.stroke();
    
}
animate();





