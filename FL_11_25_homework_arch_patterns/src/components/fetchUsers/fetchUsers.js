import USERS from '../../store/data';
import headerR from '../headerRow/header';
import load from '../LoadMore/load';
import countInfo from '../footerCounInfo/countInfo';
import { DEFAULT_USERS_DISPLAY } from '../../Constants/constants'
import './style.scss';


export const  fetchUsers = () => {
    const users = [...USERS];
    const root = document.getElementById("root");
    const usersTbl = document.createElement("table");
    usersTbl.align = "center";
    const loadBtn = document.createElement("div");
    const loadCountInf = document.createElement("div");
   
    
    headerR(usersTbl);
    load(loadBtn);
    countInfo(loadCountInf);

    users.length = DEFAULT_USERS_DISPLAY;
    

    users.forEach((user) => {
        const row = document.createElement("tr");
        row.key = user.id;
        console.log("row.key ",row.key);
        const buttonCell = document.createElement("td");
        const button = document.createElement("button");
        button.innerText = " Remove ";
        button.id = "remove_button";
        const newUser = {
            'picture': user.picture,
            'name': user.name,
            'location': user.location,
            'email': user.email,
            'phone': user.phone,
            'timezone': user.timezone,
            'id': user.id,
          };
        user = newUser;
        for (const key in user) {
            if (key === 'picture') {
                let tdBlock = document.createElement("td");
                const photo = document.createElement("img");
                photo.src = user[key];
                tdBlock.appendChild(photo);
                row.appendChild(tdBlock);
            } else {
                if(key === 'id'){
                    continue;
                }
                let tdBlock = document.createElement("td");
                tdBlock.id = "td_dlock";
                tdBlock.innerHTML = user[key];
                row.appendChild(tdBlock);
            }
        
        }
       
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);
        usersTbl.appendChild(row);
    })
    root.appendChild(usersTbl);
    root.appendChild(loadCountInf);
    root.appendChild(loadBtn);

    return usersTbl;
}
