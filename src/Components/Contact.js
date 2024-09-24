import '../style/contact.css'

function Contact(props){
    return(
        <div className="contact-container-body">
            <div className="get-in-touch">
                <div className="get-in-touch-container">
                    <p>Your Message</p>
                    <p>Feel free to drop us a message!</p>
                    <input type="text" placeholder="Type your message here "></input>
                </div>

                <div className="contact-us-container">
                    <div>
                        <img src={props.location}></img>
                        <p>{props.address}</p>
                    </div>
                    <div>
                        <img src={props.location}></img>
                        <p>{props.email}</p>
                    </div>
                    <div>
                        <img src={props.location}></img>
                        <p>{props.phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact