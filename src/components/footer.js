class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `     
      <style>
    
      .footer{
          display: flex;
          justify-content: center;
          align-items:center;
          width: 100%;
          height: 50px;
          background-color: blue;
      }
      p {
        color:white;
      }
    </style>
    <div class="footer">
        <p class="navbar-brand">Barang24 © 2022, Akhyar Ramadhan</p>
    </div>
      `;
  }
}

customElements.define("foot-bar", Footer);
