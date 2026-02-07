
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './BentoCard.css';

const BentoCard = ({ item }) => {
    const { type, title, subtitle, description, icon: Icon, links, tags } = item;

    if (type === 'social-strip') {
        return (
            <div className={`bento-card ${type}`}>
                {links.map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                        {link.icon && <link.icon size={24} />}
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className={`bento-card ${type}`}>
            <div className="card-header-group">
                <div className="card-text-group">
                    <h3 className="card-title">{title}</h3>
                    <h4 className="card-subtitle">{subtitle}</h4>
                </div>
            </div>

            <div className="card-reveal-wrapper">
                <div className="card-internal-layout">
                    <p className="card-description">{description}</p>

                    {tags && tags.length > 0 && (
                        <div className="card-tags">
                            {tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}

                    {links && links.length > 0 && (
                        <div className="card-links">
                            {links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="mini-link">
                                    {link.label}
                                    <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BentoCard;
