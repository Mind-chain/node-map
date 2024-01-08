import Ipaddress from "./IpAddress"
import Location from "./Location"
import Timezone from "./Timezone"
import Isp from "./Isp"

export interface Props {
    ip : string 
    location : { 
        city: string
        region: string
    } 
    timezone : string 
    isp : string
}

const InfoBar = (props : Props) => {
    return (
        <div className="info-bar">
            <Ipaddress ip={props.ip} />
            { (props.location.city || props.location.region) !== "" 
            && <Location location={props.location} />}
            <Timezone timezone={props.timezone} />
            { props.isp !== "" && <Isp isp={props.isp} />}
        </div>
    )
}

export default InfoBar
