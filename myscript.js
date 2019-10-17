var design = document.querySelector(".design");

design.addEventListener('click',function(){
    design.classList.add('designanimation');
    
    setTimeout(function(){
        window.location.href="media.html"
    },1000);
})



var main = document.querySelector(".main");

main.addEventListener('click',function(){
    main.classList.add('mediaanimation');
    
    setTimeout(function(){
        window.location.href="media.html"
    },1000);
})


var fashion = document.querySelector(".fashion");

fashion.addEventListener('click',function(){
    fashion.classList.add('fashionanimation');
    
    setTimeout(function(){
        window.location.href="media.html"
    },1000);
})

var music = document.querySelector(".music");

music.addEventListener('click',function(){
    music.classList.add('musicanimation');
    
    setTimeout(function(){
        window.location.href="media.html"
    },1000);
})