import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & COO</h3>
            <h4 className="vertical-timeline-element-subtitle">Amilo AI Pvt Ltd, Bengaluru</h4>
            <p>
              Scaled content and lead generation systems across 20+ clients. Built a content production system delivering 800+ videos and 200+ assets generating 30M+ views and 3000+ leads. Led cross-functional teams, client acquisition, and implemented scalable workflows using Agile methodologies.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">QA Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Wipro Limited</h4>
            <p>
              Designed and executed manual and automated test cases using Selenium WebDriver and Cucumber (BDD). Identified defects, ensured application quality, and collaborated with development teams to improve reliability and performance.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Managing Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Webok Solutions</h4>
            <p>
              Delivered web and mobile applications using WordPress and FlutterFlow. Managed end-to-end project execution and onboarded 10+ clients, helping businesses digitize operations and improve efficiency.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;