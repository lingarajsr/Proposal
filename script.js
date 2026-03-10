const canvas=document.querySelector("#space")

const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

const renderer=new THREE.WebGLRenderer({canvas:canvas})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

// stars

function addStar(){

const geometry=new THREE.SphereGeometry(0.1,24,24)

const material=new THREE.MeshBasicMaterial({color:0xffffff})

const star=new THREE.Mesh(geometry,material)

const [x,y,z]=Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(200))

star.position.set(x,y,z)

scene.add(star)

}

Array(800).fill().forEach(addStar)

// shooting stars

function shootingStar(){

const geo=new THREE.SphereGeometry(0.2)

const mat=new THREE.MeshBasicMaterial({color:0xffffaa})

const star=new THREE.Mesh(geo,mat)

star.position.set(-100,50,-50)

scene.add(star)

let speed=0

function move(){

speed+=1

star.position.x+=2
star.position.y-=1

if(speed<100) requestAnimationFrame(move)

else scene.remove(star)

}

move()

}

setInterval(shootingStar,5000)

// animation loop

function animate(){

requestAnimationFrame(animate)

scene.rotation.y+=0.0005

renderer.render(scene,camera)

}

animate()

// mouse hearts

document.addEventListener("mousemove",function(e){

const heart=document.createElement("div")

heart.innerHTML="💖"

heart.style.position="fixed"

heart.style.left=e.clientX+"px"
heart.style.top=e.clientY+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),800)

})

// proposal

function showProposal(){

document.getElementById("proposal").style.display="block"

const fire = document.getElementById("fireSound")

fire.currentTime = 0
fire.play().catch(error => console.log("Audio blocked:", error))

launchFireworks()

}

// cake

function cutCake(){

document.getElementById("cake").innerHTML="🍰"

const song = document.getElementById("birthdaySong")

song.currentTime = 0
song.play().catch(error => console.log("Audio blocked:", error))

alert("Happy Birthday My Love ❤️")

}

// mini game

let score=0

function spawnHeart(){

const heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="I LOVE YOU❤️"

heart.style.left=Math.random()*350+"px"
heart.style.top=Math.random()*200+"px"

heart.onclick=function(){

score++


document.getElementById("score").innerText=score+' sala oppidi'

heart.remove()

}

document.getElementById("gameArea").appendChild(heart)

setTimeout(()=>heart.remove(),1000)

}
/*function launchFireworks(){

for(let i=0;i<30;i++){

setTimeout(()=>{

const fire=document.createElement("div")

fire.innerHTML="🎆"

fire.className="firework"

fire.style.left=Math.random()*window.innerWidth+"px"

fire.style.top=Math.random()*window.innerHeight+"px"

document.body.appendChild(fire)

setTimeout(()=>fire.remove(),1200)

},i*120)

}

}*/
function launchFireworks(){

const fire=document.createElement("div")

fire.innerHTML="🎆"

fire.style.position="fixed"

fire.style.left=Math.random()*window.innerWidth+"px"

fire.style.top=Math.random()*window.innerHeight+"px"

fire.style.fontSize="40px"

document.body.appendChild(fire)

setTimeout(()=>{

fire.remove()

},1200)

}

function playSound(){

const sound=document.getElementById("celebrationSound")

sound.currentTime=0

sound.play()

}

function releaseBalloons(){

for(let i=0;i<1;i++){

const balloon=document.createElement("div")

balloon.innerHTML="🎈"

balloon.className="balloon"

balloon.style.left=Math.random()*window.innerWidth+"px"

balloon.style.bottom="-50px"

document.body.appendChild(balloon)

setTimeout(()=>balloon.remove(),5000)

}

}

function cutCakeAnimation(){

const cake=document.getElementById("cakeBox")

cake.classList.add("cakeCut")

setTimeout(()=>{

cake.innerHTML="🍰"

},100)

}

function showSurpriseSequence(){

const box = document.getElementById("surpriseBox")
const img = document.getElementById("surpriseImage")
const text = document.getElementById("surpriseText")

box.style.display="block"

setTimeout(()=>{
img.classList.add("show")
},100)

setTimeout(()=>{
text.classList.add("show")
},5000)

setTimeout(()=>{
box.style.display="none"
img.classList.remove("show")
text.classList.remove("show")
},10000)

}
function startCelebration(){

playSound()

//launchFireworks()
setInterval(launchFireworks,200)

setInterval(releaseBalloons,200)

cutCakeAnimation()

}

setInterval(spawnHeart,1000)