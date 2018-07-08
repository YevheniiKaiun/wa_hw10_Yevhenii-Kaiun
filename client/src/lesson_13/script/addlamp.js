import { Lamp } from "./Lamp";
export function add_lamp(target) {
    const btn = document.createElement('button');
    btn.classList.add('.add-Lamp');
    btn.innerHTML = 'add-Lamp';

    target.appendChild(btn);
    btn.addEventListener('click', ()=>{
        Lamp(target)
    });

}