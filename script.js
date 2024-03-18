const pointer = document.getElementById('scroll');
pointer.style.top = '4.6%'

//quando scrollar
window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;

    let top = pointer.style.top;
    let topInt = parseInt(top.split('.'))
    console.log(top, topInt)

    if(topInt <= 94){
        pointer.style.top = ((scrollTop/1290)*88.3+4.6) + '%'
    }else if(topInt >94){
        pointer.style.top = '93.5%'   
    }else {
        pointer.style.top = '93.5%'
    }
}

const pointerHome = document.getElementById('pointer-home').addEventListener('click', ()=>{
    let section = document.getElementById('home');
    section.scrollIntoView({ behavior: 'smooth' });
})
const pointerSobre = document.getElementById('pointer-sobre').addEventListener('click',()=>{
    let section = document.getElementById('sobre');
    section.scrollIntoView({ behavior: 'smooth' });
})
const pointerProjetos = document.getElementById('pointer-projetos').addEventListener('click',()=>{
    let section = document.getElementById('projetos');
    section.scrollIntoView({ behavior: 'smooth' });
})

document.addEventListener("DOMContentLoaded", function() {
    var box = document.querySelector('.texto-sobre-mim');

    window.addEventListener('scroll', function() {
        if (isInViewport(box)) {
            box.classList.add('visible');
        }
    });

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
