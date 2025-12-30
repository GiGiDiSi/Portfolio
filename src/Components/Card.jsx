import pfp from '../assets/teehee.png'
function Card(){
    return(
        <div className="card">
            <img className="pfp" src={pfp} alt="Me PFP" ></img>
            <h2 className="textCenter">GiGiDiSi</h2>
        </div>
    )
}
export default Card