import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { LiaFacebook } from 'react-icons/lia';
import { LuTwitter } from 'react-icons/lu';
import { TfiEmail } from 'react-icons/tfi';

const footerPoints1 = [
    "Carrier",
    "We are hiring",
    "About Us",
    "Blog",
];

const footerPoints2 = [
    "Business Marketing",
    "User Analysis",
    "Live Chat",
    "Unlimited Support",
];

const footerPoints3 = [
    "IOS & Android",
    "Watch a Demo",
    "Customers",
    "API",
];

const Footer = () => {
    return (
        <footer>
        <div className='footer'>
            {/* Left Side */}
            <div className='content1'>
            <h2>Company Info</h2>
            {footerPoints1.map((item, i) => (
                <div key={i}>
                    <h3>{item}</h3>
                </div>
            ))}
            </div>

            {/* Right Side 1 */}
            <div className='content2'>
            <h2>Features</h2>
            {footerPoints2.map((item, i) => (
                <div key={i}>
                    <h3>{item}</h3>
                </div>
            ))}
            </div>

            {/* Right Side 2 */}
            <div className='content3'>
            <h2>Resources</h2>
            {footerPoints3.map((item, i) => (
                <div key={i}>
                    <h3>{item}</h3>
                </div>
            ))}
            </div>

            <div className="content4">
                <h2>Get In Touch</h2>
                <div className='icons-content'>
                    <h3><FiPhone /> (480) 555-0103</h3>
                    <h3><GrLocation /> 4517 Washington Ave. Manchester, Kentucky 39495</h3>
                    <h3><TfiEmail /> debra.holt@example.com</h3>
                </div>

                {/* Social Links */}
                <div className='social-content'>
                    <div className='social-rightside'>@Foqia Siddiqui | All Rights Reserved.</div>
                    <div className='social-links'>
                    <LiaFacebook />
                    <FaInstagram />
                    <LuTwitter />
                    </div>
                </div>

            </div>



           
        </div>
        </footer>
    )
}

export default Footer