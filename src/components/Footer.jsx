export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="socials">
                <a href="https://www.facebook.com/" target="_blank">
                    <img className="social-img"src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-128.png" alt="" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img className="social-img" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png" alt="" />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <img className="social-img" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-128.png" alt="" />
                </a>
                <a href="https://github.com/" target="_blank">
                    <img className="social-img" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_github-128.png" alt="" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <img className="social-img" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-128.png" alt="" />
                </a>
            </div>
            <hr />
            <div className="main-container">
                <div className="child-container1">
                    <div className="img-fitness-div">
                    <img className="fitness-img" src="https://media.istockphoto.com/id/1342036285/vector/illustration-of-human-hand-with-barbell-vector-illustration.jpg?b=1&s=170x170&k=20&c=y235cxENq6Ljnxr6BPTfd0cvYz68WIYp7UCnN8YyV4Y=" alt="" />
                    <h2>Fitness Tracker</h2>
                    </div>
                    <p>Here are some helpful links to assist yhou in your fitness journey! Feel free to check us out!</p>
                </div>
                <div className="child-container2">
                    <h2>Products</h2>
                    <p>Bands</p>
                    <p>Machines</p>
                    <p>Barbellss</p>
                    <p>Watch Faces</p>
                </div>
                <div className="child-container3">
                    <h2>Useful Links</h2>
                    <p>Pricing</p>
                    <p>Settings</p>
                    <p>Orders</p>
                    <p>Help</p>
                </div>
                <div className="child-container4">
                    <h2>Contact</h2>
                    <p> <img className="contact-img" src="https://cdn3.iconfinder.com/data/icons/essential-pack/32/10-House-128.png" alt="house" /> San Diego, CA 92108</p>
                    <p><img className="contact-img" src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/mail_email_e-mail_letter-128.png" alt="email" /> fitness@gmail.com</p>
                    <p><img className="contact-img" src="https://cdn4.iconfinder.com/data/icons/home-living-outline/16/29-128.png" alt="phone" /> (555) 619-63287</p>
                    <p><img className="contact-img" src="https://cdn1.iconfinder.com/data/icons/office-322/24/text-paper-printing-printer-print-fax-128.png" alt="fax" /> + 01 234-6789</p>
                </div>
            </div>

        </div>
    )
}

 export default Footer;