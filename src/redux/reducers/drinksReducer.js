const initialState = {
    drinks: [],
    filteredDrinks: [],
    selectedCategory:null,
    searchTitle:""
}
export default function drinksReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DRINKS':
            return {
                ...state,
                drinks: action.payload
            };
        case 'SET_FILTERED_DRINKS':
            return {
                ...state,
                filteredDrinks: action.payload
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload
            };
        case 'SET_TITLE_SEARCH':
            return {
                ...state,
                searchTitle: action.payload
            };
        default:
            return state;
    }
}