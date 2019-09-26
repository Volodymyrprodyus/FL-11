import './style.scss';
import { INPUT_PLACEHOLDER } from '../../Constants/constants'
import { INPUT_LABEL } from '../../Constants/constants'

export const searchComponent = () => {
    const root = document.getElementById("root");
    const searchDiv = document.createElement("div");
    searchDiv.id = "search_div";
    const label = document.createElement("label");
    label.innerText = INPUT_LABEL;
    const input = document.createElement("input");
    input.placeholder = INPUT_PLACEHOLDER;
    input.id = "search";
    input.addEventListener('change', (event) =>{
        console.log(event.target.value);
    })

    searchDiv.appendChild(label);
    searchDiv.appendChild(input);

    root.appendChild(searchDiv);
    return searchDiv;
}