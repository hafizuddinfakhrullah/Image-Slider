let prev = document.getElementById('previous');
let next = document.getElementById('next');

let arr = ["img/Diona.webp", "img/Klee.webp", "img/Qiqi.webp", "img/raiden.webp", "img/Sayu.webp", "img/Venti.webp", "img/yaoyao.png.png", "img/Zhongli.webp"]

let i = 0;

//PREVIOUS
prev.addEventListener('click', function(){
    i--;
    if (i < 0) {
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})


//NEXT
next.addEventListener('click', function(){
    i++;
    if (i > arr.length - 1) {
        i = 0;
    }
    document.getElementById('image').src = arr[i];
})
