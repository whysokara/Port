
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="hero-header">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="hero-content"
            >
                <h1 className="hero-name">Kara</h1>
                <h2 className="hero-title">Product Manager <span className="highlight">// Non-Standard</span></h2>

                <div className="hero-bio-container">
                    <p className="hero-paragraph">
                        My path isn't a straight line. From pixels in Figma to pipelines in Python, I’ve switched roles to learn the language of every person in the room. I tried the standard PM playbooks, but I can't build by ticking boxes—I need to get my hands dirty. I am done wandering. Give me a problem worth solving, and <span className="mandatory-phrase">I will stay.</span>
                    </p>
                </div>

                <div className="hero-socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:hello@example.com" className="hero-link">
                        <Mail size={20} />
                    </a>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
