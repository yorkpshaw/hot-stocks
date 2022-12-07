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
