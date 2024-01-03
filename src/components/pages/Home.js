// import '../../App.css';
import ContactSection from '../ContactSection';
import ExperienceSection from '../ExperienceSection';
import Introduction from '../Introduction';
import ProjectSection from '../ProjectSection';
import SkillsAndTools from '../SkillsAndTools';
import './Home.css';


export default function Home() {
    return (
        <>
            <div className="home-container">
                <Introduction />
                <ProjectSection />
                <SkillsAndTools />
                <ExperienceSection />
                <ContactSection />
            </div>
            
        </>

    );
}