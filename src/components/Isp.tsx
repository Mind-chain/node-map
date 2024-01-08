export interface Props { isp : string | boolean}

const Isp = (props : Props) => {
    return (
        <>
            <hr />
            <div className="item">
                <p>ISP</p>
                <h2>{props.isp}</h2>
            </div>
        </>
    )
}

export default Isp
