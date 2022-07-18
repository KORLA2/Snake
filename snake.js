let can=document.getElementById('snake')
let ctx=can.getContext('2d');
can.width=window.innerWidth;
can.height=window.innerHeight;

class Snake{

  constructor(y,x,dir){
this.x=x;
this.y=y;
this.dir=dir
if(this.dir==0)this.x+=30;
else if(this.dir==1)this.x-=30;
else if(this.dir==2)this.y+=30;
else if(this.dir==3)this.y-=30;
  }
draw(){
    ctx.beginPath()
    ctx.arc(this.y,this.x,30,0,Math.PI*2);
ctx.fill();

}
up(){
 this.x-=10;   
}
down(){
    this.x+=10
}
left(){this.y-=10;}
right(){this.y+=10;}
}


ctx.save();
ctx.fillStyle='pink'
ctx.fillRect(0,0,can.width,can.height);
ctx.fill()
ctx.restore();
ctx.rect(0,0,can.width,can.height);
ctx.lineWidth=50
ctx.strokeStyle='brown'
ctx.stroke();let y,x;

function newball(){
 y=Math.random()*(can.width-30),
x=Math.random()*(can.height-30);}
newball();
function ball(){
ctx.save()
ctx.beginPath();
ctx.arc(y,x,15,0,Math.PI*2);
ctx.fillStyle='green';
ctx.fill();
ctx.restore();}
let snake=[];
snake.push(new Snake(Math.random()*(can.width-80),Math.random()*(can.height-80)));
snake[0].draw();

let i=undefined;
window.addEventListener('keyup',(e)=>{
  console.log('key pressed')
    if(e.key=='ArrowUp')
i=0;
else if(e.key=='ArrowDown')i=1;
else if(e.key=='ArrowLeft')i=2;
else i=3;
})
function dir(j){
    
   if(j!==undefined){

for(let i=0;i<snake.length;++i){
if(j==0)snake[i].up()
else if(j==1)snake[i].down();
else if(j==2)snake[i].left();
else snake[i].right();


}}}
function collision(j){

   let centdist=Math.sqrt((snake[0].x-x)*(snake[0].x-x)+(snake[0].y-y)*(snake[0].y-y));
if(centdist<=45){newball();snake.push(new Snake(snake[snake.length-1].y,snake[snake.length-1].x,j));}
}
function animate(){

    ctx.save()
    ctx.fillStyle='pink'
ctx.fillRect(25,25,can.width-50,can.height-50)
  ctx.fill();
    ctx.restore()
ball();
dir(i)

for(let i=0;i<snake.length;++i){
snake[i].draw();
}
collision(i);
requestAnimationFrame(animate)
}
animate()
