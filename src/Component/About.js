import img1 from "./pic/fwt.jpg";
import img4 from "./pic/sanjeet.jpg";
import img5 from "./pic/bhusan.jpeg";
import img6 from "./pic/av.jpeg";
import ContactUs from "./Contactus";
import People  from "./people";
import { Problem, Solution, Paragraph } from "./Object";
import Footer from "./Footer";
import './About-style.css'

const About = () => {
  return (
    // <>
    <div>
      <div className="container-fluid" style={{ paddingTop: "50px" }}>
        <h2
          className="text-center mx-5"
          style={{ fontWeight: "bold", paddingBottom: "50px" }}
        >
          We are pioneers in the tech-driven supply chain <br />space for fresh
          produce
        </h2>
        <img src={img1} alt="tech" class='border rounded' style={{height: '400px'}}/>




        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(240 251 244)", marginTop: '40px',paddingTop: '20px',paddingBottom: '30px'}}
        >
          <div className="container" style={{width: "80%"}}>
          <h2 className="mt-5 mx-2 text-success " style={{fontWeight: 'bold',textAlign: 'left',paddingBottom: "20px"}}>Supply Chain and Tech</h2>

          </div>
          <Paragraph />
          
        </div>





        <div className="container " style={{alignItems: "center", marginTop: '40px', marginBottom: '40px',paddingTop: '20px'}}>
        <div
          className=" row  text-dark " style={{paddingLeft: '40px'}}
        >
          <div class="card col-xl-6" style={{width: '25rem', marginLeft: "80px",marginTop: '40px'}}>
            <Problem />
          </div>
          <div class="card col-xl-6" style={{width: '25rem',marginLeft: "60px",marginTop: '40px'}}>
            <Solution />
          </div>
          </div>
        </div>


        
        <div class="" style={{marginTop: '50px',marginBottom: '50px', backgroundColor:'rgb(240 251 244)',paddingBottom: "40px",paddingTop: '40px'}}>
          <h2 style={{marginBottom: "30px", fontWeight: 'bold'}}>How Urban Reach Works</h2>
          <div class="embed-responsive embed-responsive-16by9 ">
          <iframe width="836" height="504" src="https://www.youtube.com/embed/fhOPXm6HWLY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      
    

       
        <Footer />
      </div>
    </div>
  );
};

export default About;