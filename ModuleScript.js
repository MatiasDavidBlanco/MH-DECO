class moduleMenu extends HTMLElement {
    static {console.log('================================');}
    testa(){moduleMenu.test="hola"}
    static test(){return this}

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }  // constructor
    connectedCallback() { this.render(); } // onCreation
    attributeChangedCallback(name, prevValue, nextValue) {}//onAtributesChanged
    disconnectedCallback(){}//onDelete
    render() {
        this.shadow.innerHTML = `
        <!--html-->
          
        <!--!html-->
        `;
    }
}
this.customElements.define("module-menu", moduleMenu);