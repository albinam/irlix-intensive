export function setDrinks(drinks) {
    return {
        type: 'SET_DRINKS',
        payload: drinks
    }
}

export function setFilteredDrinks(filteredDrinks) {
    return {
        type: 'SET_FILTERED_DRINKS',
        payload: filteredDrinks
    }
}

export function setCategory(category) {
    return {
        type: 'SET_CATEGORY',
        payload: category
    }
}

export function setSearchTitle(title) {
    return {
        type: 'SET_TITLE_SEARCH',
        payload: title
    }
}