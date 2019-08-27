const API = 'https://jsonplaceholder.typicode.com/';
const usersCard = document.querySelector('#user_cards');
const spinner = document.getElementById("spinner");
const posts_comments_container = document.getElementById("posts_container");
posts_comments_container.removeAttribute("id", "posts_container");
const results_posts = document.querySelector('#results_posts');
const results_comments = document.querySelector('#results_comments');
let users = [];
let userPosts = [];
let userPostsComments = [];

const getUsers = () => {
    showSpinner();
    return fetch(API + 'users').then(res => {
        hideSpinner();
        return res.json();
    })
    .catch(err => {
        console.log('Cant find users', err);
        hideSpinner();
        return [];
    })
}

const showSpinner = () => {
    spinner.removeAttribute('hidden');
}

const hideSpinner = () => {
    spinner.setAttribute('hidden', '');
}

const renderUsers = () => {
    usersCard.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.classList.add('user');
        
        const inputUserName = document.createElement(`input`);
        inputUserName.classList.add(`inputUserName`);
        inputUserName.setAttribute('id', 'inputUserNameId');
        inputUserName.type = 'text';
        inputUserName.value = `${user.username}`;

        const inputName = document.createElement(`input`);
        inputName.classList.add(`inputName`);
        inputName.setAttribute('id', 'inputNameId');
        inputName.type = 'text';
        inputName.value = `${user.name}`;
        inputName.addEventListener('click', () => {
            postsComentFilter(user.id)
        });

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit_button');
        editBtn.innerHTML = '<i class="material-icons">add</i>';
        editBtn.addEventListener('click', () => {
            editUser(user.id)
        });

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove_button');
        removeBtn.innerHTML = '<i class="material-icons">delete</i>';
        removeBtn.addEventListener('click', () => {
            deleteUser(user.id, userItem)
        });

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save_button');
        saveBtn.innerHTML = '<i class="material-icons">save</i>';
        saveBtn.addEventListener('click', createUser);

        const imageAvatar = document.createElement('div');
        imageAvatar.classList.add('image_avatar');
        imageAvatar.innerHTML = `<img src="https://api.adorable.io/avatars/68/${user.name}.png">`;

        userItem.append(saveBtn);
        userItem.append(editBtn);
        userItem.append(removeBtn);
        userItem.append(inputUserName);
        userItem.append(inputName);
        userItem.append(imageAvatar);
        usersCard.append(userItem);
      });
    }

const loadUsers = async () => {
    users = await getUsers();
    renderUsers();
}

const deleteUser =  async (userId, userItem) => {
    try {
        showSpinner();
        const res = await fetch(API + 'posts/' + userId, { 
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if (res.status !== 200) throw new Error();
        users = users.filter((user) => user.id !== userId);
        userItem.remove();
        hideSpinner();
    } catch (err) {
        console.log(`Can't delete a user`, err); 
        hideSpinner();  
    }
}


const createUser = () => {
    const name = document.querySelector(`#name`).value;
    const username = document.querySelector(`#userName`).value;
    showSpinner();
    fetch(API + 'users', {
        method: `POST`,
        body: JSON.stringify({name: name, username: username}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'}
    }).then(res => {
        hideSpinner();
        return (res.json());
    }).then(({id}) => {
        const user = {
            name,
            username,
            id
        };
        users.unshift(user);
        renderUsers();
        hideSpinner();
    })
    .catch(err => {
        console.log(`Can't create user`, err);
        hideSpinner();
    })
}


const editUser =  (userId) => {
    const name = document.querySelector(`#inputNameId`).value;
    const username = document.querySelector(`#inputUserNameId`).value;
    showSpinner();
    fetch(API + 'posts/' + userId, {
        method: 'PUT',
        body: JSON.stringify({name: name, username: username}),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res => {
        hideSpinner();
        return (res.json());
    }).then(({id}) => {
        const user = {
            name,
            username,
            id
        };
        users.unshift(user);
        renderUsers();
        hideSpinner();
    }).catch(err => {
        console.log(`Can't edit user`, err);
        hideSpinner();
    })
}


const getPosts = (userId) => {
    showSpinner();
    return fetch(API + 'posts?userId=' + userId)
    .then(res => {
        hideSpinner();
        return res.json();
    })
    .then(posts => {
        const userPosts = posts;
        return userPosts;
    })
    .catch(err => {
        console.log('Cant find posts', err);
        hideSpinner();
    })
}

const getComments = (userId) => {
    showSpinner();
    return fetch(API + 'posts/'+userId+'/comments')
    .then(res => {
        hideSpinner();
        return res.json();
    }).then(comments => {
        const userComments = comments;
        return userComments;
    })
    .catch(err => {
        console.log('Cant find comments', err);
        hideSpinner();
    })
}

const postsComentFilter = async(userId) => {
    showSpinner();
    try {
        const result = await Promise.all([getPosts(userId), getComments(userId)]);
        console.log('result', result);
        let posts = result[0];
        let comments = result[1];
        [posts,comments] = result;
        console.log('posts', posts);
        console.log('comments', comments);
        for (var i = 0; i < comments.length; i++) {
        for (var j = 0; j < posts.length; j++) {
            if (comments[i].postId === posts[j].id) {
                userPostsComments.push(comments[i]);
            }
        }
    }
    console.log('myArrayFiltered :',userPostsComments);
    postsComentDisplay(userId, userPostsComments);
    hideSpinner(); 
    } catch (err){
        console.log(`Can't get posts/comments`, err);
        hideSpinner(); 
    }
}

const postsComentDisplay = (userId, upc) => {
    posts_comments_container.setAttribute("id", "posts_container");
    showSpinner();
    results_posts.innerHTML = '';
    results_comments.innerHTML = '';
    upc.forEach (result => {
        results_posts.innerHTML += `Posts of user id ${userId} : ${result.name}` + '\n';                  
        results_comments.innerHTML += `Comments of post id ${result.postId} : ${result.body}` + '\n';
    })
    renderUsers();
    hideSpinner();
}
   
document.addEventListener('DOMContentLoaded', () => {
    const load = document.querySelector('#load_users')
    load.addEventListener('click', loadUsers);
    const createUserBtn = document.querySelector('#create_user')
    createUserBtn.addEventListener('click', createUser);
});
