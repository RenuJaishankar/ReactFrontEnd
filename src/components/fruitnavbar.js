import React from "React"

const Fruitnavbar = () => (

<nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://github.com/RenuJaishankar">
      
      <p>HI image is displayed here</p>
       <img src="https://www.pngrepo.com/png/3011/170/apple.png"
                    width="28" height="28"> </img>
       </a>
      <a className="navbar-item">
        Super Cool Fruit API
               </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>


    </div>

    <div className="navbar-menu" id="navMenu">
      <div className="navbar-start">
        <a className="navbar-item">
          <span>
            
                    </span>
        </a>
    </div>

    <div className="navbar-end">
    </div>
  </div>
</nav>
)
export default Fruitnavbar