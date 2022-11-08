import styled from 'styled-components'

const Footer = () =>
{
    return(
        <FooterStyle>
        <div className="footerTest">
        <div id="footerTest">
            <div className="footerWrap">
                <div className="toe">
                    <h3>Support</h3>
                    <a href="/">FAQs</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Shipping</a>
                    <a href="/">Returns</a>
                    <a href="/">Product Exchange</a>
                    <a href="/">Cash Back Rewards</a>
                </div>

                <div className="toe">
                    <h3>About</h3>
                    <a href="/">About Us</a>
                    <a href="/">Testimonials</a>
                </div>

                <div className="toe">
                <h3>Follow</h3>
                <div id="social">
                    <a id="fb" href="/" title="Facebook"> </a>
                    <a id="twitter" href="/" title="Twitter"> </a>
                    <a id="blog" href="/" title="Blog"> </a>
                    <a id="pinterest" href="/" title="Pinterest"> </a>
                    <a id="instagram" href="/" title="Instagram"> </a>
                    <a id="ravelry" href="/" title="Ravelry"> </a>
                    <a id="rss" href="/" title="RSS"> </a>
                </div>
                    
                </div>
            </div>
        </div>
        <div id="legal">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>In at purus at nisl pretium interdum. Aenean condimentum elementum nulla, non hendrerit diam scelerisque ac.</p>
            <p>Sed facilisis ultricies elit, ac iaculis tellus interdum non. Nam sollicitudin ante id dui commodo, non vulputate purus aliquet. Aenean ac pharetra arcu.</p>
            <p>© Copyright 2022 Hector Javier Ortiz Muñiz</p>
        </div>
        </div>
        </FooterStyle>
    );
}

const FooterStyle = styled.div`  
  .footerTest{
    width: 100%;
    margin: 0;
    left: 0;
  }
  
  #footerTest{
    background: var(--primary-blue);
    padding: 15px 0 0 0;
    border-radius: 500px 500px 0 0;
  }
  
  .footerWrap{
    margin: auto;
    width: 600px; 
    padding: 5px 0 5px 25px;
  }
  
  .toe{
    overflow: hidden;
    display: inline-block;
    width: 180px;
    margin: 0 15px 15px 0;
    font-size: 10pt;
    line-height: 1.6em;
    vertical-align: top;
  }
  
  .toe a{
    display: block;
    text-decoration: none;
    color: #fff;
  }
  
  .toe a:hover{
    text-decoration: underline;
  }
  
  .toe h3{
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-size: 12pt;
    display: inline-block;
    letter-spacing: 1px;
  }
  
  #legal{
    text-align: center;
    color: #EAEAEA;
    background: var(--primary-orange);
    font-size: 8pt;
    line-height: 1.6em;
    padding: 10px 10px 15px 10px;
  }
  
  #social a{
    display: inline-block;
    width: 29px;
    height: 29px;
    margin: 0 3px 3px 0;
  }
  
  #fb{
    background: url("https://imgur.com/fCRgp42.png") 0 0 no-repeat;
  }
  
  #twitter{
    background: url("https://imgur.com/fCRgp42.png") -29px 0 no-repeat;
    border-radius: 4px;  
  }
  
  #blog{
    background: url("https://imgur.com/fCRgp42.png") -58px 1px no-repeat;
  }
  
  #pinterest{
    background: url("https://imgur.com/fCRgp42.png") -87px 0 no-repeat;
    border-radius: 4px;
  }
  
  #instagram{
    background: url("https://imgur.com/fCRgp42.png") -146px 0 no-repeat;
  }
  
  #ravelry{
    background: url("https://imgur.com/fCRgp42.png") -117px 0 no-repeat;
  }
  
  #rss{
    background: url("https://imgur.com/fCRgp42.png") -175px 0 no-repeat;
  }
`;

export default Footer;