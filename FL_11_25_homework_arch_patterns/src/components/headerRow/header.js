import './style.scss';

export default function headerR (table) {
    const mainRow = document.createElement("tr");
    const pic = document.createElement("th");
    pic.innerHTML = "Picture";
    const name = document.createElement("th");
    name.innerHTML = "Name";
    const location = document.createElement("th");
    location.innerHTML = "Location";
    const email = document.createElement("th");
    email.innerHTML = "Email";
    const phone = document.createElement("th");
    phone.innerHTML = "Phone";
    const timezone = document.createElement("th");
    timezone.innerHTML = "Timezone";
    const action = document.createElement("th");
    action.innerHTML = "Actions";
    mainRow.appendChild(pic);
    mainRow.appendChild(name);
    mainRow.appendChild(location);
    mainRow.appendChild(email);
    mainRow.appendChild(phone);
    mainRow.appendChild(timezone);
    mainRow.appendChild(action);

    return table.appendChild(mainRow)    
}