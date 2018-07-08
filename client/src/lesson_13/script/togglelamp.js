export function toggle_lamp (target) {
const btn = document.createElement('button');
btn.classList.add('.toggle-all');
btn.innerHTML = 'Toggle-all';
const active_btn = 'active-btn';
const active_lamp = 'Lamp__active-lamp';

target.appendChild(btn);

btn.addEventListener('click', ()=>{
    let turn_on = Array.from(target.querySelectorAll('.active'));
    let lamp = Array.from(target.querySelectorAll('.Lamp'));
    if (turn_on.length === 0){
        for (let i = 0; i < lamp.length; i++){
            lamp[i].classList.add('active');
            lamp[i].childNodes[0].classList.add(active_lamp);
            lamp[i].childNodes[1].classList.add(active_btn);
        }
    }
    else {
        for (let i = 0; i < turn_on.length; i++){
            turn_on[i].classList.remove('active');
            turn_on[i].childNodes[0].classList.remove(active_lamp);
            turn_on[i].childNodes[1].classList.remove(active_btn);
        }
    }
});
}
