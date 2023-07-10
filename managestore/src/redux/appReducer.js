
const appReducer = (state = { products : [],customers:[],purchases:[]} , action) =>
{
    switch(action.type)
    {
        case "ADD_PRODUCT":
            return {
              ...state,
              products: action.payload.products
            
            };
        default:
            return state;
    }
}


export default appReducer