export function TrafficLight() {
    const Light = document.querySelector('.Light');
    const LightRed = document.querySelector('.Light__Red');
    const LightYellow = document.querySelector('.Light__Yellow');
    const LightGreen = document.querySelector('.Light__Green');

    function focusRed() {
        Light.classList.add('Light__focusRed');
    }

    function blurRed() {
        Light.classList.remove('Light__focusRed');
    }

    function focusYellow() {
        Light.classList.add('Light__focusYellow');
    }

    function blurYellow() {
        Light.classList.remove('Light__focusYellow');
    }
    function focusGreen() {
        Light.classList.add('Light__focusGreen');
    }

    function blurGreen() {
        Light.classList.remove('Light__focusGreen');
    }

    LightRed.addEventListener('focus', focusRed);
    LightRed.addEventListener('blur', blurRed);
    LightYellow.addEventListener('focus', focusYellow);
    LightYellow.addEventListener('blur', blurYellow);
    LightGreen.addEventListener('focus', focusGreen);
    LightGreen.addEventListener('blur', blurGreen);
}