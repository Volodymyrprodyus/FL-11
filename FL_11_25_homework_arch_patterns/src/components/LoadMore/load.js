import './style.scss';
import { LOAD_MORE } from '../../Constants/constants'

export default function load (loadBtn)  {
    const loadDiv = document.createElement("div");
    loadDiv.id = "load_div";
    const loadButton = document.createElement("button");
    loadButton.id = "load_button";
    loadButton.innerText = LOAD_MORE;
    loadButton.addEventListener('click', (event) =>{
        console.log(event.target.value);
    })

    loadDiv.appendChild(loadButton);
    return loadBtn.appendChild(loadDiv);
}