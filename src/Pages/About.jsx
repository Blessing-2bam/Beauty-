import Hero from "../About/Hero";
import MoreAbout from "../About/MoreAbout";
import Populars from "../About/Populars";
import Gallery from "../Home/Gallery";
import Review from "../Home/Review";
import Blog from "../Home/Blog";
import Appointment from "../Home/Appointment";




const About = () => {
  return (
    <div>
        <Hero/>
        <MoreAbout/>
        <Populars/>
        <Gallery/>
        <Review/>
        <Blog/>
        <Appointment />
    </div>
  )
}

export default About