import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Previous Work</h1>
        <h3> thanks for visiting my website. Links to my previous projects will be updated by 30-march-2026</h3>
        <div className="projects-grid">

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="https://images.unsplash.com/photo-1557838923-2985c318be48" className="zoom" alt="social media marketing" width="100%"/>
                </a>
                <h2>Social Media Marketing</h2>
                <p>Scaled social media accounts across multiple clients through content strategy, performance marketing, and data-driven optimization, generating millions of views and high-quality leads.</p>
            </div>

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" className="zoom" alt="short form videos" width="100%"/>
                </a>
                <h2>Short-form Video Production</h2>
                <p>Produced and scaled 800+ short-form videos including reels, ads, and content pieces focused on engagement, storytelling, and conversion-driven formats.</p>
            </div>

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc" className="zoom" alt="podcast production" width="100%"/>
                </a>
                <h2>Podcast Production</h2>
                <p>Worked on podcast content including scripting, recording workflows, editing, and distribution, creating engaging long-form content for audience growth and brand positioning.</p>
            </div>

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d" className="zoom" alt="corporate video" width="100%"/>
                </a>
                <h2>Corporate Videos</h2>
                <p>Created corporate and brand videos including SaaS explainers, VSLs, and promotional content designed to communicate value propositions and drive conversions.</p>
            </div>

            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c" className="zoom" alt="design work" width="100%"/>
                </a>
                <h2>Design & Creatives</h2>
                <p>Designed high-performing creatives including carousel posts, thumbnails, and brand visuals using Canva, aligned with content strategy and audience psychology.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;