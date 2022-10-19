let moveP = document.querySelector("p");
let moveS = document.querySelector("span");

window.addEventListener('scroll',function(){
    let how = this.window.scrollY
    console.log("scrollY", how)

    if(how > 300){
        moveP.style.animation = 'moveOut 1s ease-out forwards';
        moveS.style.animation = 'moveOut 2s ease';
    }else{
        moveP.style.animation = 'moveIn 1s ease-out'
        moveS.style.animation = 'moveIn 2s ease'
    }
});

//forwards 안 넣으면 다시 돌아옴!!