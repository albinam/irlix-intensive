const initialState = {
    drinks: [],
    filteredDrinks: [],
    selectedCategory:null,
    searchTitle:"",
    drink:null,
    loadingDrinks:true,
    loadingDrink:true
}
export default function drinksReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DRINKS':
            return {
                ...state,
                loadingDrinks: false,
                drinks: action.payload
            };
        case 'SET_FILTERED_DRINKS':
            return {
                ...state,
                filteredDrinks: action.payload
            };
        case 'SET_DRINK':
            return {
                ...state,
                loadingDrink: false,
                drink: action.payload
            };
        case 'SET_DRINK_LOADING':
            return {
                ...state,
                loadingDrink: action.payload
            };
        case 'SET_DRINKS_LOADING':
            return {
                ...state,
                loadingDrinks: action.payload
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload,
                filteredDrinks: state.drinks.filter(item => (action.payload===4 || action.payload===null)? item : item.categoryId === action.payload)
                    .filter(item => (state.searchTitle==="")? item : item.title.toLowerCase().startsWith(state.searchTitle.toLowerCase()))
            };
        case 'SET_TITLE_SEARCH':
            return {
                ...state,
                searchTitle: action.payload,
                filteredDrinks: state.drinks.filter(item => (state.selectedCategory===4 || state.selectedCategory===null)? item : item.categoryId === state.selectedCategory)
                    .filter(item => (action.payload==="")? item : item.title.toLowerCase().startsWith(action.payload.toLowerCase()))
            };
        default:
            return state;
    }
}