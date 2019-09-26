import './style.scss';

export default function countInfo (loadCountInf)  {
    let usersDisplayed = 5; // need to remake
    let currentUsers = 21;  // need to remake

    const loadDiv = document.createElement("div");
    loadDiv.id = "count_div";
    const loadSpan = document.createElement("span");
    loadSpan.id = "load_span";
    loadSpan.innerText = "Displayed " + usersDisplayed + " users out of " + currentUsers;

    loadDiv.appendChild(loadSpan);
    return loadCountInf.appendChild(loadDiv);
}