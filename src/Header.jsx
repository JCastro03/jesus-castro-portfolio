import backgroundPicture from './assets/img/los_angeles.png'

export default function Header(){
    return(
        <>
            
            <img
                className="d-block mx-lg-auto img-fluid"
                alt="background-picture"
                src={backgroundPicture}
            />
            <div className="d-flex align-items-center">
                <img
                    className="d-block mx-lg-auto img-fluid"
                    alt="profile-picture"
                    src={""}
                />
                <div className="text-end">
                    <h1>Jesus Castro Gonzalez</h1>
                    <h3>Computer Science @ University of Southern California</h3>
                </div>
                
            </div>
            <div>Header</div>
            

        </>
    )
}