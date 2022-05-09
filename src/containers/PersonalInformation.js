
import '../style/style.css'

const PersonalInformation = (props) =>{
    return(
        <div className={"PersonalInformation"}>
        <h2>{props.personalDetail.name}</h2>
        <h3>{props.personalDetail.address}</h3>
        <h3>{props.personalDetail.phone}</h3>
    </div>
    )
}

export default PersonalInformation