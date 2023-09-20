import React from 'react';

const PersonalCard = () => {
    return (
        <div className="personal-card">
            <img src="logo.png" className='profile-image '/>
            <h2>Ilija Pavlovic</h2>
            <p>Belgrade, Serbia</p>
            <p>I am a student of the Nikola Tesla School of Electrical Engineering. Passionate about the IT world.
            </p>
            {/* <p>Email: ilija.pavlovic05@gmail.com</p>
            <p>Phone: +381 65 3755661</p> */}
            <div className="social-icons">
                <a href="mailto:ilija.pavlovic05@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/Ilijaa1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-beat"></i>
                </a>
                <a href="https://instagram.com/pavl0viicc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}

export default PersonalCard;