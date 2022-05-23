import React, { Component } from 'react';
import './footer-style.css'
import Footercontact from './footercontacts';
class footer extends Component {

    render() {
        return (
            <div className='foot'>
                <div class='row'>
                <div className='col-xl-3 col-md-6 col-sm-6'>
                    <h4>Company</h4>
                    <ul>
                        <li><a style={{color:"black",textDecoration:"none"}} href="/about">About Us</a></li>
                        <li><a style={{color:"black",textDecoration:"none"}} href="/buysell">Buy/Sell</a></li>
                        <li><a style={{color:"black",textDecoration:"none"}} href="/contact">Contact Us</a></li>
                       
                    </ul>

                </div>
                <div className='col-xl-3 col-md-6 col-sm-6'>
                    <h4>Resources</h4>
                    <ul>
                    <li><a style={{color:"black",textDecoration:"none"}} href="/blog">Blog</a></li>

                    </ul>

                </div>
                <div className='col-xl-6 col-md-6 col-sm-6'>
                      <Footercontact/>

                    </div>
                    </div>
              <div class="footer_bottom">
                <div class="footer_copyright">
                    <ul>
                        <li><a href="/home">Privacy Policy</a></li>
                        <li><a href="/home">Terms of Use</a></li>
                        <li><a href="/home">Refund Policy</a></li>
                        <li>© Urban Reach Technology Private Limited   </li>
                    </ul>
                </div>
                </div>

                
                </div>
               


        


        );
    }
}

export default footer;