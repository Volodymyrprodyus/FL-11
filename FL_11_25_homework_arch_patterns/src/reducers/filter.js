function filter(state = "", action) {

    if (action.type == FILTER_USERS) {
  
      return action.text;
    } else {
      return state;
    }
  
  }
  
  export default filter