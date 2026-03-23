import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Content Strategy",
    "Script Writing",
    "Storyboarding",
    "Canva",
    "CapCut",
    "Premiere Pro",
    "Google Analytics",
    "Keyword Planner",
    "Instagram",
    "YouTube",
    "LinkedIn"
];

const labelsSecond = [
    "Team Management",
    "Client Acquisition",
    "Stakeholder Management",
    "Team Training",
    "ClickUp",
    "Jira",
    "Notion",
    "Scrum",
    "Kanban",
    "Sprint Planning"
];

const labelsThird = [
    "Meta Ads",
    "A/B Testing",
    "WhatsApp Ads",
    "WhatsApp Business API",
    "ManyChat",
    "LinkDM",
    "Prompt Engineering",
    "Google Veo",
    "Kling AI",
    "Heygen AI",
    "ElevenLabs",
    "Python",
    "Pandas",
    "NumPy",
    "Seaborn"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Growth Marketing & Content Systems</h3>
                    <p>I build and scale content systems that drive measurable growth. Led the production of 800+ videos and 200+ content assets, generating over 30M views and reaching 5M+ users. Managed end-to-end workflows from ideation and scripting to post-production and delivery, ensuring consistent performance and output quality.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Leadership & Project Management</h3>
                    <p>Led cross-functional teams across content, marketing, and operations, managing end-to-end project execution from client onboarding to delivery. Built scalable workflows, improved team efficiency, and implemented Agile methodologies like Scrum and Kanban to ensure consistent and timely execution.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Performance Marketing & AI Systems</h3>
                    <p>Generated 3000+ leads through Meta Ads and data-driven strategies while integrating AI tools to enhance content and automation workflows. Experienced in campaign optimization, WhatsApp-based funnels, and leveraging Generative AI for scalable content production and performance tracking.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;