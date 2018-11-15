const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickyNavigation(){
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.screenY);
}

window.addEventListener('scroll', stickyNavigation);