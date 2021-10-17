import './personalDetails.css';
import 'font-awesome/css/font-awesome.min.css';
import image from '../details/image.jpg';
const PersonalDetails = () => {
    const details = require("../details/personal-details.json");
    return (
        <div className="side-details" >   
            <img src={image} width="200" height="250" resizeMode="contain" className="resume-picture" alt="resume display"/>
            <i className="fa fa-user">           {details.Name}        </i>
            <i className="fa fa-phone">          {details.Phone}       </i>
            <i className="fa fa-birthday-cake">  {details.DateOfBirth} </i>
            <i className="fa fa-envelope-open">  {details.Email}       </i>
            <i className="fa fa-github">         {details.Github}      </i>
        </div>)
}
export default PersonalDetails;