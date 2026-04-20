export const PhenomUI = () => {
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
         * @param {Object} param0
         * @param {string} param0.type
         * @param {string} param0.className
         * @param {string} param0.id
         * @param {CSSStyleDeclaration} param0.style
         * @param {HTMLElement[]} param0.children
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