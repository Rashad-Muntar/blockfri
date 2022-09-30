const cryptoReducer = (state = { data: [] }, action:any) => {
    switch (action.type) {
      case 'GET-ACTIVITY':
        return {
          ...state,
          data: action.data,
        };

      default:
        return state;
    }
  };
  
  export default cryptoReducer;