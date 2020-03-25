import React from "react"
import "./mystyles.scss"
import Fruitnavbar from "../components/fruitnavbar.js"
import Imgfruit from "../components/apple.png"
import Imgbck from "../images/fruitimage.png"
import { graphql } from 'gatsby'
import Newheading from "../components/NewHeading.js"
const newmajorpage = ({ data }) => (
  <div className="container" style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg")`}}>

  
    
    <div className="columns">

      
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="MAJOR"></input>

      </div>
      <div className="column">
        <input id="Title" className="input" type="text" placeHolder="NUMBER OF KIDS"></input>

      </div>
      
      <div className= "column">
        <button class="button"  >SUBMIT DETAILS</button>
      </div>

      </div>
        
        <table className="table" >
        <thead style = {{fontSize:20,fontFamily:"Lucida Sans"}}>
              TABLE WITH STUDENTS IN PARTICULAR MAJOR.
            </thead>

            <tbody>
              <tr>
              <th>
                  ID
                                </th>
                
                <th>
                  MAJOR
                                </th>

                <th>
                  NUMBER OF STUDENTS
                                </th>
                

              </tr>
              {data.java.fruits.map(
                el => <tr>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.state}</td>
                  
                </tr>

              )}

            </tbody>
        </table>
      
    </div>
  

)
export const query = graphql`
query fruitQuery {
  java{
  
    fruits{
      name
      state
      color
      }   
      
 }
   
}
`
export default newmajorpage