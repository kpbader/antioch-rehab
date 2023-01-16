import './bottom-contact.css';
import Fade from 'react-reveal';
import ContactForm from '../Contact-Form/contact-form';
import { SlLocationPin } from "react-icons/sl";

function BottomContact() {
    return (
        <div id="bottom-contact-container">
            <Fade left>
                <ContactForm />
            </Fade>
            <Fade right>
                <div id="google-map">
                    <div className="contact-info-line">
                        <SlLocationPin />
                        <p>3720 Sunset Ln., Suite B, Antioch CA 94509</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.697580274868!2d-121.80450809999999!3d37.9841864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085578ec9d1090d%3A0x7d2f41a6ec129588!2s3720%20Sunset%20Ln%20b%2C%20Antioch%2C%20CA%2094509!5e0!3m2!1sen!2sus!4v1670436191105!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Fade>
        </div>
    )
}

export default BottomContact;