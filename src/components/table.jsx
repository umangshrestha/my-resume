import React  from "react"
import "./table.css"


const Table = (props) => <div className="main" id={props.title}>
    <h1>          
        <i className={props.icon} />
        {props.title} 
    </h1>
    <table>
        <tbody>
        {
            props.details.map((row, pos) => <>
            <tr>
                <td> {pos+1}       </td>
                <td> {(props.title==="Education")? row.Institute: row.Company}
                    <a className="date" > ({row.Date})  </a>
                </td>
                <td> {(props.title==="Education")? row.Percentage:row.Designation} </td>
            </tr>
            
                 {addProject(row)} 
           
        </>)
        }
        </tbody>
    </table>
</div>

const addProject = (row) => {
  
    if ("Projects" in row) {
        return <tr >
            <td colSpan="3" className="log"> 
                <ul>
                    {row.Projects.map(project => <li> {project} </li>)}
                </ul>
            </td>
        </tr>
    }
}

const AboutMe = (props) =>  <div className="main" id="Extra">
        <h1>          
                <i className="fa fa-comment" />
                About Me
        </h1>
        <div className="log"> 
            {props.details} 
        </div>
    </div>

const Extra = (props) => <div className="main" id="Extra">
    <h1>          
        <i className="fa fa-bookmark" ></i>
        Extra
    </h1>
    <div className="log"> 
        <ul>
            {props.details.map(project => <li> {project} </li>)}
        </ul>
    </div>
</div>

export default Table;
export {
    Extra,
    AboutMe
};