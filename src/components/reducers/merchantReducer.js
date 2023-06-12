const initialState = {
    merchant: null,
  };
  
  const merchantReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MERCHANT':
        return {
          ...state,
          merchant: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default merchantReducer;
  