import AboutMe from "../Components/AboutMe";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";
import ProjectSection from "../Components/ProjectSection";


const Home = () => {
    return (
        <div>
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <ProjectSection></ProjectSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;