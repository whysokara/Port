
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
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
                <h1 className="hero-name">kara</h1>
                <h2 className="hero-title">Lorem Ipsum <span className="highlight">// Dolor Sit</span></h2>

                <div className="hero-bio-container">
                    <p className="hero-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <span className="mandatory-phrase">laborum.</span>
                    </p>
                </div>

                <div className="hero-socials">
                    <a href="http://github.com/whysokara" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <img src="https://cdn.simpleicons.org/github/ffffff" alt="Github" width="20" height="20" style={{ opacity: 0.8 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/karahimanshu/" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <img src="https://cdn.simpleicons.org/linkedin/ffffff" alt="LinkedIn" width="20" height="20" style={{ opacity: 0.8 }} />
                    </a>
                    <a href="http://x.com/whysokara" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <img src="https://cdn.simpleicons.org/x/ffffff" alt="X" width="20" height="20" style={{ opacity: 0.8 }} />
                    </a>
                    <a href="http://instagram.com/whysokara/" target="_blank" rel="noopener noreferrer" className="hero-link">
                        <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" width="20" height="20" style={{ opacity: 0.8 }} />
                    </a>
                    <a href="mailto:kara_himanshu@yahoo.com" className="hero-link">
                        <Mail size={20} style={{ opacity: 0.8 }} />
                    </a>
                </div>

                <div className="hero-tech-stack">
                    <span className="tech-label">STACK_</span>
                    <div className="tech-icons">
                        <img src="https://cdn.simpleicons.org/react/ffffff" alt="React" title="React" />
                        <img src="https://cdn.simpleicons.org/javascript/ffffff" alt="JavaScript" title="JavaScript" />
                        <img src="https://cdn.simpleicons.org/python/ffffff" alt="Python" title="Python" />
                        <img src="https://cdn.simpleicons.org/solidity/ffffff" alt="Solidity" title="Solidity" />
                        <img src="https://cdn.simpleicons.org/figma/ffffff" alt="Figma" title="Figma" />
                        <img src="https://cdn.simpleicons.org/git/ffffff" alt="Git" title="Git" />
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
