export interface Props { 
    location: { 
        city: string; 
        region: string; 
    } 
}

const Location = (props: Props) => {
    // TODO : find a way to pass in location region and city in h2 element
    const { city, region } = props.location;
    return (
        <>
            <div className="item">
                <p>Location</p>
                <h2>{city}, {region}</h2>   
            </div>
            <hr />
        </>
    )
}

export default Location
