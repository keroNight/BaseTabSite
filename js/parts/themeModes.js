function themeModes() {
    let $button = document.querySelector('#themeMode');
    let $body = document.body;
    $button.addEventListener('click', function(a){
        if ($body.classList.contains("lightMode")) {
            localStorage.setItem("lightMode", 0);
            $body.classList.toggle('lightMode');
        } else {
            localStorage.setItem("lightMode", 1);
            $body.classList.toggle('lightMode');
        }
    });
}

export { themeModes };