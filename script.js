//your code here 

//Place duplicate of one image
let imgClass=["img1","img2","img3","img4","img5"]
let randomInd=Math.floor(Math.random()*imgClass.length)
imgClass.push(imgClass[randomInd])

//Create random images when page reloads
let arr=[]
let k=0;
while(k<imgClass.length){
let randomIndex=Math.floor(Math.random()*imgClass.length)
if(arr[randomIndex]==undefined){
    arr[randomIndex]=imgClass[k]
    k++
}
else{
    continue
}
}

//render image on the screen
let images=document.querySelectorAll('img')
for(let i=0;i<images.length;i++){
    images[i].setAttribute('class',arr[i])
    images[i].setAttribute('id',i)
}

//Clicking on one of the pic
for(let i=0;i<images.length;i++){
    images[i].addEventListener('click',userOrRobo)
}
let count=0
let previd=""
function userOrRobo(e){
    
    let currentid=e.target.id
    if(currentid==previd){
        return
    }
    else{
        count++
        previd=currentid
        if(count>2){
            let verbtn=document.querySelector('#verify')
            verbtn.style.display='none'
            alert("Can't select more than 2 images.Click RESET button")
            return
        }
        let rstbtn=document.getElementById('reset')
        rstbtn.style.display='inline'
        let id=e.target.id
        images[id].classList.add('selected')
        if(count==2){
            let verbtn=document.querySelector('#verify')
            verbtn.style.display='inline'

        }
    }
}

//click on reset button
let rstbtn=document.getElementById('reset')
rstbtn.addEventListener('click',rst)

function rst(e){
    e.target.style.display='none'
    let verbtn=document.querySelector('#verify')
    verbtn.style.display='none'
    let selectedImg=document.querySelectorAll('.selected')
    for(let x of selectedImg){
        x.classList.remove('selected')
    }
    count=0
    let p=document.querySelector('#para')
    p.remove()
    verbtn.disabled=false
}

//verify button

let verbtn=document.querySelector('#verify')
verbtn.addEventListener('click',check)

function check(){
    verbtn.disabled=true
    let slctimgs=document.querySelectorAll('.selected')
    let class1=slctimgs[0].className //all class names of element in the form of string
    let class2=slctimgs[1].className
    let p=document.createElement('p')
    p.setAttribute('id','para')
    let div=document.querySelector('.output')
    if(class1==class2){
        p.innerText="You are a human. Congratulations!"
    }
    else{
        p.innerText="We can't verify you as a human. You selected the non-identical tiles"
    }
    div.appendChild(p) 
}


