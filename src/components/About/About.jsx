import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container about-container">
        <h1>About Us</h1>

        <p>
          Our auction started as an idea: what if we can bid on goods online
          with no upfront payments or the fear of fake and misleading items? In
          2021, we partnered with Auction House of Miami and started work to
          make this idea a reality. Now, in 2022, our E-Auction is finally open
          for everyone to buy amazing things online through our sleek yet simple
          website!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
