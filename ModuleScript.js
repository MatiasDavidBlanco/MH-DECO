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
  <link rel="stylesheet" href="css/productosProductos.css">
          <div class="carousel__lista">
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/cocinas.png" alt="cocinas">
              <p>COCINAS</p></a>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/racks.png" alt="racks">
              <p>RACKS</p></a>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/placards.png" alt="placards">
              <p>PLACARDS</p></a>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/cocinas.png" alt="cocinas">
              <p>CAMAS</p></a>
            </div>
            <div class="carousel__elemento">
              <a href=""><img src="img/img productos/racks.png" alt="placards">
              <p>CAMAS</p></a>
            </div>
        <!--!html-->
        `;
    }
}
this.customElements.define("module-menu", moduleMenu);