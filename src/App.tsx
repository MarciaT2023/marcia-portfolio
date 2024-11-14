import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';
import HeroComponent from './components/hero/HeroComponent';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const App = () => {
  return (
    <>
      <Header headerClassName="header">
        <Navbar links={links} listClassName="" itemClassName="" />
      </Header>
      <HeroSection />
      <main>
        <div className="content">
    <section id="about">
            <div className="row">
            <h2 className="text-center">About Me</h2></div>
            <div className="row">

                <div className="col-lg-8 about_contentMain">
                    <p>I am an intermediate level full stack developer with an extensive background as a software developer/configurator in the insurance industry. My software development career started in 2012 when I attended a 16 week bootcamp and learned the languages of the mainframe.
                    It was during this bootcamp and the internship that followed that I discovered that I had a passion for the problem solving 
                    
                    </p>
                    <div className="row mt-3">
                            <ul>
                                <li>Participated in full lifecycle development of software including analysis, design, coding, testing, implementation, deployment and support.</li>
                                <li>Consistently written, translated, and coded software programs and applications according to specifications.</li>
                                <li>Employ best practices for designing scalable, extensible, secure applications.</li>
                                <li>Modifying and testing changes to previously developed programs</li>

                            </ul>
                        
                    </div>
                    <div className="row mt-3">
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 about_contentSkills">
                    <h3 className="skills_title">Skills</h3>
                    <div className="skills">
                        <div className="skills_skill">HTML</div>
                        <div className="skills_skill">CSS</div>
                        <div className="skills_skill">Bootstrap</div>
                        <div className="skills_skill">JavaScript</div>
                        <div className="skills_skill">JQuery</div>
                        <div className="skills_skill">SQL</div>
                        <div className="skills_skill">PHP</div>
                        <div className="skills_skill">XML/XSLT</div>
                        <div className="skills_skill">Git/GitHub</div>
                        <div className="skills_skill">Agile</div>

                    </div>
                </div>
            </div>
    </section>
        </div>
      </main>
    </>
  );
};

export default App;
