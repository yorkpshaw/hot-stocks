export function preventDefault(callback, selector) {
    selector = selector || (x => x);
    return event => {
        event.preventDefault();
        callback(selector(event));
    };
}

export function eventTargetSelector(event) {
    return event.target;
}

export function handlePortfolioClick(e) {
    e.preventDefault();
    console.log('portfolio clicked');
}

export function handleSavedClick(e) {
    e.preventDefault();
    console.log('saved clicked');
    const value = e.target.value;
    console.log(value);
}

export function handleDeleteSavedClick(e) {
    e.preventDefault();
    console.log('delete saved clicked');
    const value = e.target.value;
    console.log(value);
}
