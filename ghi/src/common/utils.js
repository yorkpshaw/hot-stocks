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
