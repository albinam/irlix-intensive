export const filter = (category, title, drinks) => {
    if ((category === 4) || (title !== "" && category === null)) {
        return drinks.filter((drink) => {
            return drink.title.toLowerCase().startsWith(title.toLowerCase());
        });
    }
    if (title !== "" && category !== null) {
        const resultsByCategory = drinks.filter((drink) => {
            return drink.categoryId === category;
        });
        return resultsByCategory.filter((drink) => {
            return drink.title.toLowerCase().startsWith(title.toLowerCase());
        });
    }
    if (title === "" && category !== null) {
        const resultsByCategory = drinks.filter((drink) => {
            return drink.categoryId === category;
        });
        return resultsByCategory.filter((drink) => {
            return drink.title.toLowerCase().startsWith(title.toLowerCase());
        });
    }
    if (category !== null) {
        return drinks.filter((drink) => {
            return drink.categoryId === category;
        });
    }
};