import '../style/pagenotfound.css'

function pagenotfound(props){
    return(
        <div className='not-found-container'>
            <img src={props.img}></img>
            <p className='number-404'>404</p>
            <p className='page-not-found'>Page not found</p>
            <p className='message'>The Page you are looking for
                doesn't exist or an other error occured. <br/>
                Go back, or head over to ######.com to choose a new direction.
            </p>
            
        </div>
    );
}

export default pagenotfound