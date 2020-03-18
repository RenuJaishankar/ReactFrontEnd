import React from "react"
import "./mystyles.scss"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import Newheading from "../components/NewHeading.js"
const newtest = () => (

  <div className="container">


    {/* <div class="container is-fluid">
            // <div class="columns is-centered">
                
            </div>  */}
    <Newheading />
    
    <img src={Imgfruit} alt={"Website fruit"}/>
    <Fruitnavbar />
    <div className="columns">

      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="FRUIT ID"></input>

      </div>
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="NAME"></input>

      </div>
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="STATE"></input>

      </div>
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="COLOR"></input>

      </div>
    </div>




    <table className="table" >
      <thead>
        <tr>
          <td>
            ID
                                </td>
          <td>
            NAME
                                </td>

          <td>
            STATE
                                </td>
          <td>
            COLOR
                                </td>
          <td>
          </td>

        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>

    {/* <div className="columns">
        <div className="column">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column is-four-fifths">
          <h2 className="title is-2">Level 2 heading</h2>
          <p className="content">This column is cool too!</p>
        </div>
      </div> */}


  </div>




)

export default newtest