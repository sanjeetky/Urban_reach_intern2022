import React from 'react'
import Footer from './Footer'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import './Home.css'
const Home = () => {

  return (
    <div clasName="divcon" >
      <Container >
        <Row>
          <Col className='top' style={{textAlign: 'left'}}><h2 >Revolutionizing the Fresh <br /> Produce Supply Chain<br></br></h2>

            <h6>Driven by cutting edge technology, <br></br>we source fresh produce from farmers and sell to businesses, across India <br></br></h6>
            <button type="button" class=" ajay btn btn-success btn-lg">Learn More</button>
          </Col>
          <Col className='front'><img src="front.png" alt="logo" /></Col>

        </Row>
      </Container>


      <div className='container 'style={{paddingTop: '40px'}}>
      <div className='row About'>
        <div className='col-xl-6' style={{textAlign: "left"}}>
          <h1 style={{fontWeight: 'bold'}}>About Us</h1>
          <br></br>
          <br></br>
        <h5 style={{color: 'gray' }}>Urban Reach is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.
        </h5>
              <br></br><button type="button" class="btn btn-success btn-lg">Know More</button>

          </div>
          <div className='col-xl-6'>
          <img src="Map3.png" alt="logo" width="100%" />
          
          </div>

      </div>
      </div>



      <div class="revolution">
        <div ></div>
        <h3>Join Us to bring revolution <span>in </span>Agriculture with Urban Reach</h3>
        <br></br>
        <button type='button' class="btn btn-success btn-lg" href="/careers">
        Join the revolution</button>
      </div>






      <div class="farmersay">
        <h1 >Creating New Opportunities For Everyone</h1>
        <p style={{ marginBottom: '20px' }}>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div className='card' style={{ width: "18rem" ,textAlign: "left",marginTop: "30px"}}>
              <card-body style={{padding: '10px'}} >
                <img src="retailer.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Farmer</h5>
                <ul>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                 </ul>

              </card-body>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div className='card' style={{ width: "18rem",marginTop: "30px"}}>
              <card-body style={{padding: '10px',textAlign: "left"}} >
                <img src="farmer.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>Retailer</h5>
                <ul>
                  <li>Competitive pricing</li>
                  <li>Doorstep delivery</li>
                  <li>quality graded produce</li>
                  <li>Convenient time saving</li>
                </ul>
              </card-body>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div className='card' style={{ width: "18rem",marginTop: "30px" }}>
              <card-body style={{padding: '10px', textAlign: "left"}} >
                <img src="customer.png" alt="farmer" />
                <br></br><br></br>
                <h5 style={{fontWeight:'bold'}}>customer</h5>
                <ul style={{paddingLeft: "20px"}}>
                  <li>20% more revenue</li>
                  <li>One-stop-sale</li>
                  <li>Payment in 24 hours</li>
                  <li>Transparent weighing</li>
                </ul>
                
              </card-body>
            </div>
          </div>
        </div>

      </div>




      {/* <div className='life'>
        <Container fluid >
          <h2 style={{fontWeight: 'bold'}} >
            Life at Urban Reach
          </h2>
          <p>Be a part of an organisation of brilliant thinkers who work towards something new, every day.</p>
          <Row >
            <Col class="pic1 col-xl-6">
              <img src="img3.jpg" alt="img3" width="80%" />
              <div>
                <h1> Meet Our People</h1>
              </div>
            </Col>
            <Col class="pic2 col-xl-6">
              <img src="img4.jpg" alt="img4" width="80%" />
              <div>
                <h1> Meet Our People</h1>
              </div></Col>
          </Row>

        </Container>
      </div> */}





      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h2 style={{ fontWeight: 'bold', paddingLeft: '100px', paddingRight: '100px' ,paddingBottom: '10px'}}>What are People <br /> Saying about Urban Reach</h2>
      </div>


      {/* <!-- Testimonials --> */}
      <div className='testimonials'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <h5>— बहुत अच्छी सेवा। इससे पहले हमें अपने घर से बहुत दूर बीज उर्वरक उपकरण खरीदने के लिए अलग-अलग जगहों की यात्रा करनी पड़ती थी। लेकिन अब हमें ये सब हमारे पास के अर्बन रीच सेंटर में मिलता है। बहुत अच्छा लग रहा है।</h5>
            <em>मनोज / कसाप गांव के किसान</em>
          </Carousel.Item>
          <Carousel.Item>
            <h5>— Really great service, a start up with lots of enthusiasm. I will recommend to everyone</h5>
            <em>Manvendra Singh / Customer</em>
          </Carousel.Item>
          <Carousel.Item>
            <h5>— Feel so proud of these creative minds. Thank you for making our chores more easy. Loved the quality of groceries</h5>
            <em>Isha Awasthi / Customer</em>
          </Carousel.Item>
        </Carousel>
      </div>


      <Container style={{ marginBottom: '100px', marginTop: '100px', textAlign: 'center' }}>
        <Row style={{paddingTop: '30px'}}>
          <Col className='bottom'><h3>Trust Us With Your Harvest</h3><p className='hiddenText'>Get fair prices for your produce from Urban Reach</p></Col>
          <Col className='bottom'><h3>Direct From Farms to Your Business</h3><p className='hiddenText'>Get fair prices for your produce from Urban Reach</p></Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}
export default Home