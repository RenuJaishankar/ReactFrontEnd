import React from "react"
import "./mystyles.scss"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import { graphql } from 'gatsby'
import Newheading from "../components/NewHeading.js"
const newtest = ({ data }) => (

  <div className="container">

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
      <div className= "column">
        <button class="button"  >SUBMIT FRUIT</button>
      </div>

      </div>
        
        <table className="table" >
            <thead>
              FRUIT TABLE 
            </thead>

            <tbody>
              <tr>
                <th>
                  ID
                                </th>
                <th>
                  NAME
                                </th>

                <th>
                  STATE
                                </th>
                <th>
                  COLOR
                                </th>

              </tr>
              {data.java.fruits.map(
                el => <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.state}</td>
                  <td>{el.color}</td>

                </tr>

              )}

            </tbody>
        </table>
      
    </div>
  

)
export const query = graphql`
query MyQuery {
  java{
  
    fruits{
      name
      state
      color
      }   
      
 }
   
}
`
export default newtest