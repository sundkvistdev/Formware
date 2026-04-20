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
        createUiElement: () => {

        },
    };
};