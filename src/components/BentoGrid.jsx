
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import BentoCard from './BentoCard';
import './BentoGrid.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const BentoGrid = ({ data }) => {
    const containerRef = useRef(null);
    const [isFinished, setIsFinished] = useState(false);

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 90%"] // Finish slightly before actual bottom
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Detect when we reach the end
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (latest > 0.99) {
            setIsFinished(true);
        } else {
            setIsFinished(false);
        }
    });

    // Split data
    const timelineItems = data.filter(item => item.id !== 'socials');
    const footerItem = data.find(item => item.id === 'socials');

    return (
        <div className="roadmap-container" ref={containerRef}>
            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* === WRAPPER FOR THE CONNECTED TIMELINE === */}
                <div className="timeline-section" style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '100%' }}>

                    {/* === THE TIMELINE TRACK (Scoped to this section only) === */}
                    <div className="timeline-track">
                        <div className="timeline-line-static"></div>
                        <motion.div
                            className="timeline-line-active"
                            style={{ height }}
                        >
                            <div className="beam-tip"></div>
                        </motion.div>
                        <div className={`timeline-end-cap ${isFinished ? 'active' : ''}`}></div>
                    </div>

                    {/* Render standard items */}
                    {timelineItems.map((item) => (
                        <motion.div key={item.id} className="timeline-item" variants={itemVariants}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <BentoCard item={item} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* === FOOTER / SOCIALS (Disconnected from the line) === */}
                {footerItem && (
                    <motion.div
                        key={footerItem.id}
                        className={`timeline-item socials ${isFinished ? 'powered-on' : ''}`}
                        variants={itemVariants}
                        style={{ marginTop: '4rem', paddingBottom: '2rem' }} // Add gap after the road ends
                    >
                        <div className="timeline-content">
                            <div className={`system-status ${isFinished ? 'visible' : ''}`}>
                                <span>SYSTEM ONLINE</span>
                            </div>

                            <div className="github-graph-container">
                                <img
                                    src="https://ghchart.rshah.org/00ff00/whysokara"
                                    alt="Github Contribution Graph"
                                    className="github-graph"
                                />
                                <div className="graph-label">CONTRIBUTION DATA</div>
                            </div>

                            <BentoCard item={footerItem} />

                            {/* FIXED FOOTER TEXT */}
                            <div className="footer-copyright" style={{
                                textAlign: 'center',
                                marginTop: '3rem',
                                opacity: 0.4,
                                fontSize: '0.75rem',
                                letterSpacing: '0.1em',
                                color: 'var(--text-secondary)'
                            }}>
                                Designed & Developed by kara © {new Date().getFullYear()}
                            </div>
                        </div>
                    </motion.div>
                )}

            </motion.div>
        </div>
    );
};

export default BentoGrid;
