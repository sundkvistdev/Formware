export default StyleApi = () => {

    return {
        /**
         * @param {HTMLElement} el
         * @param {string} src
         */
        setBackgroundImage: (el, src) => {
            el.style.backgroundImage = `url(${src})`;
        }
    };
}