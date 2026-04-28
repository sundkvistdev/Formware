export const WINDOW_CLASS_NAME = "fw-window";

export const WINDOW_TITLEBAR_CLASS_NAME = "fw-titlebar";
export const WINDOW_TITLE_CLASS_NAME = "fw-title";
export const WINDOW_BUTTON_GROUP_CLASS_NAME = "fw-group";
export const WINDOW_BUTTON_CLASS_NAME = "fw-wndbtn";
export const WINDOW_CONTENT_CLASS_NAME = "fw-wcontent";

export default class Window {

    constructor(x, y, width, height, className = WINDOW_CLASS_NAME) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.element = document.createElement("div");
        this.element.className = className;
    }

    createTitleBar(title = "Window") {
        this.titlebarElement = document.createElement("div");
        this.titlebarElement.className = WINDOW_TITLEBAR_CLASS_NAME;
        
        this.titleElement = document.createElement("div");
        this.titleElement.className = WINDOW_TITLE_CLASS_NAME;
        this.titleElement.textContent = title;
        this.titlebarElement.appendChild(this.titleElement);
        
        this.windowButtonGroup = document.createElement("div");
        this.windowButtonGroup.className = WINDOW_BUTTON_GROUP_CLASS_NAME;
        
        this.closeButton = document.createElement("div");
        this.closeButton.className = WINDOW_BUTTON_CLASS_NAME;
        this.closeButton.classList.add("fw-closebtn");
        this.windowButtonGroup.appendChild(this.closeButton);

        this.closeButton = document.createElement("div");
        this.closeButton.className = WINDOW_BUTTON_CLASS_NAME;
        this.closeButton.classList.add("fw-maximizebtn");
        this.windowButtonGroup.appendChild(this.closeButton);

        this.closeButton = document.createElement("div");
        this.closeButton.className = WINDOW_BUTTON_CLASS_NAME;
        this.closeButton.classList.add("fw-minimizebtn");
        this.windowButtonGroup.appendChild(this.closeButton);

        this.titlebarElement.appendChild(this.windowButtonGroup);

        this.element.appendChild(this.titlebarElement);
    }

    createContent(innerHTML = "<strong>Window Content</strong>") {
        this.contentElement = document.createElement("div");
        this.contentElement.className = WINDOW_CONTENT_CLASS_NAME;
        this.contentElement.innerHTML = innerHTML;

        this.element.appendChild(this.contentElement);
    }

    /**
     * @param {Object} options
     * @param {number} options.x
     * @param {number} options.y
     * @param {number} options.width
     * @param {number} options.height
     * @param {string} [options.title]
     * @param {string} [options.content]
     * @param {string} [options.className]
     */
    static createWindow({ x, y, width, height, title = undefined, content = undefined, className = undefined }) {
        const wnd = new this(x, y, width, height, className);
        wnd.createTitleBar(title);
        wnd.createContent(content);
        return wnd;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set x(value) {
        this.element.style.left = `${value}px`;
        this._x = value;
    }

    set y(value) {
        this.element.style.top = `${value}px`;
        this._y = value;
    }

    set width(value) {
        this.element.style.width = `${value}px`;
        this._width = value;
    }

    set height(value) {
        this.element.style.height = `${value}px`;
        this._height = value;
    }
}