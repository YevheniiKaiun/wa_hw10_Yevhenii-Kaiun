export function Lamp (target) {
   const lamp = document.createElement('div');
   const item = document.createElement('div');
   const btn = document.createElement('button');
   const active_lamp = 'Lamp__active-lamp';
   const active_btn = 'active-btn';


   lamp.classList.add('Lamp');
   item.classList.add('Lamp__item');
   btn.classList.add('Lamp__button');

   btn.textContent = 'on/off';

   target.insertBefore(lamp, target.firstChild);
   lamp.appendChild(item);
   lamp.appendChild(btn);

   btn.addEventListener('click', ()=>{
      let start =lamp.querySelector('.active-btn');
      if (start === null) {
         turn_on();
      }
      else {
         turn_off();
      }
   });

    function turn_on() {
        lamp.classList.add('active');
        item.classList.add(active_lamp);
        btn.classList.add(active_btn);
    }

    function turn_off() {
        lamp.classList.remove('active');
        item.classList.remove(active_lamp);
        btn.classList.remove(active_btn);
    }
}