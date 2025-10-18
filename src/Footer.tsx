import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, ArrowUp } from 'lucide-react';


export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, label: 'GitHub', url: '#', color: '#7f7f7fff' },
        { icon: Linkedin, label: 'LinkedIn', url: '#', color: '#0a66c2' },
        { icon: Twitter, label: 'Twitter', url: '#', color: '#1da1f2' },
        { icon: Mail, label: 'Email', url: 'mailto:contact@example.com', color: '#ff6b6b' },
    ];

    const footerLinks = [
        { title: 'About', url: '#' },
        { title: 'Projects', url: '#projects' },
        { title: 'Skills', url: '#skills' },
        { title: 'Contact', url: '#contact' },
    ];

    return (
        <footer className="footer" id='contact'>
            {/* Background gradient decoration */}
            <div className="footerDecoration"></div>

            {/* Main footer content */}
            <div className="footerContainer">
                {/* Top section */}
                <div className="footerTop">
                    <div className="footerBrand">
                        <h2 className="brandName">OCM development</h2>
                    </div>

                    {/* Social links */}
                    <div className="socialLinks">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    className="socialLink"
                                    title={social.label}
                                    style={{ '--social-color': social.color }}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Middle section */}
                <div className="footerMiddle">
                    <div className="footerLinks">

                        <div className="linkColumn">
                            <h3 className="linksTitle">Connect</h3>
                            <div className="contactInfo">
                                <p className="contactItem">
                                    <Mail size={16} />
                                    <span>omalemcmails@gmail.com</span>
                                </p>
                                <p className="contactItem">
                                    <Github size={16} />
                                    <span>https://github.com/frontenddevmichael</span>
                                </p>
                            </div>
                        </div>

                        <div className="linkColumn">
                            <h3 className="linksTitle">Quick Links</h3>
                            <div className="quickLinks">
                                <a href="https://hleoxybfoudmqkclviiu.supabase.co/storage/v1/object/public/Portfolio%20Projects/Omale%20Michael%20Resume.pdf" className="quickLink">Resume</a>
                                <a href="https://wa.me/2349061712509?text=Hello%20Michael!%20I%20just%20visited%20your%20portfolio%20and%20would%20love%20to%20connect." className="quickLink">Chat on Whatsapp</a>
                                <a href="https://www.instagram.com/michael.omale.16/" className="quickLink">Follow on Instagram</a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter signup */}
                    <div className="newsletter">
                        <h3 className="newsletterTitle">Stay Updated</h3>
                        <p className="newsletterDesc">Get notified about new projects and updates</p>
                        <form className="newsletterForm" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="newsletterInput"
                                required
                            />
                            <button type="submit" className="newsletterButton">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="footerBottom">
                    <div className="copyrightSection">
                        <p className="copyright">
                            © {year} OCM devs. All rights reserved.
                        </p>
                    </div>

                    {/* Scroll to top button */}
                    <button
                        className={`scrollToTop ${isVisible ? 'visible' : ''}`}
                        onClick={scrollToTop}
                        title="Back to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}