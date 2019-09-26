

function table (state = [], action) {
  
    if (action.type == "DELETE_USER") {
      let index = state.indexOf(action.obj);
      state.splice(index, 1);
      return state;
    } else if (action.type == "UPDATE_USERS") {
      return state.map((users, index, arr) => {
        if (arr[index].id.toString() === action.obj.id) {
          let obj = {};
          obj[action.obj.name] = action.obj.value;
          return Object.assign({}, users, obj);
        }
        return users
      })
  
    } else {
      return state;
    }
  
}


  



export default table
