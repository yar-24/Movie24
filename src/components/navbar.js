class Navbar extends HTMLElement {
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
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
    }
      .navbar{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;
        height:60px;
        position: fixed;
        z-index: 5;
      }
      .nav-input{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid white;
        border-radius: 8px;
        padding: 10px;
        width: 30vw;
      }
      
      .nav-input input{
        background-color: transparent;
        border: none;
        outline: none;
        width: 90%;
       
      }
      
      .nav-input input::placeholder{
        color: white;
      }
      
      h2 {
      }
    </style>
    
    <div class="navbar">
    <h3>Movie24</h3>
    <div class="nav-input">
      <input type="text" placeholder="What do you want to watch?" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </div>
    <h5>Sign in</h5>
  </div>
      `;
  }
}

customElements.define("nav-bar", Navbar);
