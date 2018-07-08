import './lesson_13.scss';

import {Lamp} from "./script/Lamp";
import {add_lamp} from "./script/addlamp";
import {toggle_lamp} from "./script/togglelamp";

const target = document.querySelector('.Lamps-page');

for (let i=0; i < 5; i++){
    Lamp(target);
}
toggle_lamp(target);
add_lamp(target);