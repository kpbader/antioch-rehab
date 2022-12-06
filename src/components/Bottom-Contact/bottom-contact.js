import './bottom-contact.css';
import Fade from 'react-reveal';
import ContactForm from '../Contact-Form/contact-form';

function BottomContact() {
    return (
        <div id="bottom-contact-container">
            <Fade left>
                <ContactForm />
            </Fade>
            <Fade right>
                <div id="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.123933760937!2d-117.99304987206115!3d33.7057418689756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd26eebbbc61a1%3A0x905e876fb37add72!2s17682%20Beach%20Blvd%2C%20Huntington%20Beach%2C%20CA%2092647!5e0!3m2!1sen!2sus!4v1667939056139!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Fade>
        </div>
    )
}

export default BottomContact;