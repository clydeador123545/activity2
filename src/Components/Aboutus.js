import '../style/card.css'

function Aboutus(props){
    return(

        <div className="about-us-container">
            <div className="card-container">
                    <div className="profile-picture-container">
                        <div className="active">
                                <p className="check">&#10004;</p>
                        </div>
                        <img className="profile-picture" src={props.link}></img>

                        
                    </div>
                    
                    <div className="profile-info">
                        <div className="name-age">
                            <p className="name">{props.name}</p>
                            <p className="age">&nbsp;({props.age})</p>
                        </div>

                        <div className="bio">
                            <p>{props.bio}</p>
                        </div>
                    </div>

                    <div className="container-followers">
                        
                            <div className="likes">
                                <p className="title">Likes</p>
                                <p className="counts">{props.likes}</p>
                            </div>
                            <div className="following">
                                <p className="title">
                                    Following
                                </p>
                                <p className="counts">{props.following}</p>
                            </div>
                            <div className="followers">
                                <p className='title'>
                                    Followers
                                </p>
                                <p className='counts'>{props.followers}</p>
                            </div>
                        
                    </div>


                    
            </div>

        </div>
        
    );
}

export default Aboutus