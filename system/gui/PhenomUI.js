export default PhenomUI = () => {
    const states = [];

    return {
        /**
         * @template T
         * @param {T} value
         * @returns {[() => T, (T) => void]}
         */
        createState: (value) => {
            const index = states.push(value) - 1;
            return [
                () => states[index],
                (v) => void (states[index] = v),
            ];
        },
        /**
         * @param {Object} options
         * @param {string} options.type
         * @param {string} options.className
         * @param {string} options.id
         * @param {CSSStyleDeclaration} options.style
         * @param {HTMLElement[]} options.children
         * @returns {HTMLElement}
         */
        constructEl: ({
            type = "div",
            className = "",
            id = "",
            style = {},
            children = [],
        } = {}) => {
            const element = document.createElement(type);
            element.className = className;
            element.id = id;
            Object.entries(style).forEach((k, v) => {
                element.style[k] = v;
            });
            children.forEach((c) => {
                element.appendChild(c);
            });
            return element;
        },
    };
};