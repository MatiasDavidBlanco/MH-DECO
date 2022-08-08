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
          <div class="carousel__lista">
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/cocinas.png" alt="cocinas"></a>
              <p>COCINAS</p>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/racks.png" alt="racks"></a>
              <p>RACKS</p>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/placards.png" alt="placards"></a>
              <p>PLACARDS</p>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/cocinas.png" alt="cocinas"></a>
              <p>CAMAS</p>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/racks.png" alt="placards"></a>
              <p>CAMAS</p>
            </div>
        <!--!html-->
        `;
    }
}
this.customElements.define("module-menu", moduleMenu);