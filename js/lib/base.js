const windowWidth =  window.innerWidth && document.documentElement.clientWidth ? 
    Math.min(window.innerWidth, document.documentElement.clientWidth) : 
    window.innerWidth || 
    document.documentElement.clientWidth || 
    document.getElementsByTagName('body')[0].clientWidth;

function scrolledToDiv(div) {
    return (window.scrollY > (div.offsetHeight + div.offsetTop)) ? true : false;
}

export { windowWidth, scrolledToDiv };