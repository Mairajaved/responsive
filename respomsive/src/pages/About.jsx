import React from 'react';
import main from './../assets/main.png';
import digi from '../assets/digi.png';
import web from '../assets/web.png';
import cards from '../assets/cards.png';
import '../styles/About.css';

export default function About() {
    return (
        <div className="aboutfront">
            <div className="mainpic">
                <img src={main} alt="About Us" className="aboufirstt" />
                <div className="abtmain">
                    <div className="headin1abt">
                        <h2>About</h2>
                    </div>
                    <div className="heading2abt">
                        <h2>Us</h2>
                    </div>
                </div>
            </div>
            <div className="about_content">
                <div className="abtleft">
                    <img src={digi} alt="Digitech" />
                </div>
                <div className="right">
                    <h1>About Digitech!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.
                        Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis. quam ut ullamcorper mi odio. Adipiscing varius nunc amet interdum.Lorem ipsum dolor sit amet consectetur. Erat dolor eget feugiat pretium tristique nunc dolor duis.</p>
                </div>
            </div>
            <div className="card_section">
                <img src={web} alt="Web Development" />
            </div>
            <div className="tempcars">
                <img src={cards} alt="Cards" />
            </div>
        </div>
    );
}
