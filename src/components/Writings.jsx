
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Mail, Linkedin } from 'lucide-react';
import { writings } from '../data/writings';
import { iconMap } from '../data/portfolioData';
import './Writings.css';

const Writings = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleArticle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="writings-page">
            <div className="writings-container">
                {/* Back Button */}
                <Link to="/" className="back-button">
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </Link>

                <motion.div
                    className="writings-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {writings.map((article, index) => (
                        <motion.div
                            key={article.id}
                            className={`article-item ${expandedId === article.id ? 'expanded' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div
                                className="article-header"
                                onClick={() => toggleArticle(article.id)}
                            >
                                <motion.div
                                    className="expand-icon"
                                    animate={{ rotate: expandedId === article.id ? 90 : 0 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <ChevronRight size={16} />
                                </motion.div>
                                <h2 className="article-title">{article.title}</h2>
                            </div>

                            <div className="article-content">
                                <div className="article-content-inner">
                                    <div className="article-text">
                                        {article.content.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer */}
                <footer className="writings-footer">
                    <div className="footer-socials">
                        <a href="http://github.com/whysokara" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src="https://cdn.simpleicons.org/github/ffffff" alt="Github" width="18" height="18" />
                        </a>
                        <a href="mailto:kara_himanshu@yahoo.com" className="footer-link">
                            <Mail size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/karahimanshu/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <Linkedin size={18} />
                        </a>
                        <a href="http://x.com/whysokara" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src="https://cdn.simpleicons.org/x/ffffff" alt="X" width="18" height="18" />
                        </a>
                        <a href="http://instagram.com/whysokara/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" width="18" height="18" />
                        </a>
                    </div>
                    <div className="footer-copyright">
                        Designed & Developed by kara © {new Date().getFullYear()}
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Writings;
