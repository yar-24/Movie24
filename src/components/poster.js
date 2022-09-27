class Poster extends HTMLElement {
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
        .poster{
            align-items: center;
            color: white;
            width: 40%;
            margin-left: 10vw;
            padding-top: 20vh;
          }
          
          
          .poster-button{
            border: none;
            border-radius: 8px;
            background-color: #BE123C;
            color: white;
            padding: 5px 30px 0px 30px;
          }
      </style>
      
      <div class="poster">
          <div class="card-poster">
            <h1>John Wick 3 : Parabellum</h1>
            <p>
              John Wick is on the run after killing a member of the international
              assassins' guild, and with a $14 million price tag on his head, he
              is the target of hit men and women everywhere.
            </p>
            <button class="poster-button">
              <p>WATCH TRAILER</p>
            </button>
          </div>
        </div>
        `;
    }
  }
  
  customElements.define("poster-bar", Poster);
  