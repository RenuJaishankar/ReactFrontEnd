import React from "react"
import "./mystyles.scss"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import Newheading from "../components/NewHeading.js"
import '../components/backgroundImage.js'
const newtest = () => (

  // here is a hardcoded example of using a background image with inline styling
  // note the quotations around the actual url
  <div className="container" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")`}}>


    {/* <div class="container is-fluid">
            // <div class="columns is-centered">
                
            </div>  */}
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