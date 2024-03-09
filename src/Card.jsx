import profilePic from './assets/pic01.jpeg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title' >Hisoka</h2>
            <p className='card-text' > this is  a description </p>
        </div>
    );
}
export default Card