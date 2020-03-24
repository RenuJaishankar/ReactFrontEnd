import React from "react"
import "./mystyles.scss"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import Imgbck from "../images/fruitimage.png"
import { graphql } from 'gatsby'
import Newheading from "../components/NewHeading.js"
const newtest = ({ data }) => (

  <div className="container" style={{backgroundImage: `url(${https://png.pngtree.com/thumb_back/fw800/back_our/20190625/ourmid/pngtree-simple-fruit-background-picture-image_254291.jpg})`}}>
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
            <thead style = {{fontSize:20,fontFamily:"Lucida Sans"}}>
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