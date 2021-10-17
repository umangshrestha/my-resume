import React  from "react";
import './skills.css';
import 'font-awesome/css/font-awesome.min.css';

const Skills = () => {
    const details = require("../details/skills.json");
    return (
    <>
        
        <div id="skills"> 
            <h1>          
                <i className="fa fa-wrench"/>
                Skills
            </h1>
            {
                Object.entries(details).map(([key, values]) =>
                <div class="child">
                    <tag>[{key}]</tag>
                    <ul>
                    { values.map(val => <li>{val}</li>) }
                    </ul>
                </div>)
            }
        </div>
    </>)
}

export default Skills;