export interface Props { ip: string | boolean }

const Ipaddress = (props: Props) => {
    return (
        <>
            <div className="item">
                <p>Ip Address</p>
                <h2>{props.ip}</h2>
            </div>
            <hr />
        </>
    )
}

export default Ipaddress
