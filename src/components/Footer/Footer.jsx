import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        {/* FIRST FOOTER SECTION */}
        <div className={classes.back__to__top}>
          <a href="#">Back to top</a>
        </div>

        {/* <!-- Footer Links Section --> */}
        <div className={classes.footer__links}>
          <div className={`${classes.column} ${classes.top}`}>
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.column} ${classes.top}`}>
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="#">See More Make Money with Us</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.column} ${classes.top}`}>
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>

          <div className={`${classes.column} ${classes.top}`}>
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Returns & Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className={classes.footer__bottom}>
          <div>
            <div className={classes.logo}>
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </div>
            <div className={classes.language__currency}>
              <div className={classes.dropdown}>
                <select>
                  <option>English</option>
                  <option>Español</option>
                </select>
              </div>
              <div className={classes.dropdown}>
                <select>
                  <option>USD__U.S. Dollar</option>
                  <option>EUR__Euro</option>
                </select>
              </div>
              <div className={classes.dropdown}>
                <select>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- section 2 --> */}
        <div className={classes.footer__links__extended}>
          <div className={classes.column}>
            <ul>
              <li>
                <a href="#">Amazon Music</a>
                <span>Stream millions of songs</span>
              </li>
              <li>
                <a href="#">Amazon Ads</a>
                <span>Reach customers wherever they spend their time</span>
              </li>
              <li>
                <a href="#">AmazonGlobal</a>
                <span>Ship Orders Internationally</span>
              </li>
              <li>
                <a href="#">Amazon Home Services</a>
                <span>Experienced Pros Happiness Guarantee</span>
              </li>
              <li>
                <a href="#">Amazon Web Services</a>
                <span>Scalable Cloud Computing Services</span>
              </li>
            </ul>
          </div>

          <div className={classes.column}>
            <ul>
              <li>
                <a href="#">AbeBooks</a>
                <span>Books, art & collectibles</span>
              </li>
              <li>
                <a href="#">ACX</a>
                <span>Audiobook Publishing Made Easy</span>
              </li>
              <li>
                <a href="#">Audible</a>
                <span>Listen to Books & Original Audio Performances</span>
              </li>
              <li>
                <a href="#">Box Office Mojo</a>
                <span>Find Movie Box Office Data</span>
              </li>
              <li>
                <a href="#">Goodreads</a>
                <span>Book reviews & recommendations</span>
              </li>
            </ul>
          </div>

          <div className={classes.column}>
            <ul>
              <li>
                <a href="#">IMDb</a>
                <span>Movies, TV & Celebrities</span>
              </li>
              <li>
                <a href="#">IMDbPro</a>
                <span>Get Info Entertainment Professionals Need</span>
              </li>
              <li>
                <a href="#">Kindle Direct Publishing</a>
                <span>Indie Digital & Print Publishing Made Easy</span>
              </li>
              <li>
                <a href="#">Prime Video Direct</a>
                <span>Video Distribution Made Easy</span>
              </li>
            </ul>
          </div>

          <div className={classes.column}>
            <ul>
              <li>
                <a href="#">Ring</a>
                <span>Smart Home Security Systems</span>
              </li>
              <li>
                <a href="#">eero WiFi</a>
                <span>Stream 4K Video in Every Room</span>
              </li>
              <li>
                <a href="#">Blink</a>
                <span>Smart Security for Every Home</span>
              </li>
              <li>
                <a href="#">Neighbors App</a>
                <span>Real-Time Crime & Safety Alerts</span>
              </li>
              <li>
                <a href="#">Amazon Subscription Boxes</a>
                <span>Top subscription boxes – right to your door</span>
              </li>
            </ul>
          </div>

          <div className={classes.column}>
            <ul>
              <li>
                <a href="#">Shopbop</a>
                <span>Designer Fashion Brands</span>
              </li>
              <li>
                <a href="#">Woot!</a>
                <span>Deals and Shenanigans</span>
              </li>
              <li>
                <a href="#">Zappos</a>
                <span>Shoes & Clothing</span>
              </li>
              <li>
                <a href="#">PillPack</a>
                <span>Pharmacy Simplified</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className={classes.footer__bottom__extended}>
          <ul className={classes.footer__bottom__links}>
            <li>
              <a href="#">Conditions of Use</a>
            </li>
            <li>
              <a href="#">Privacy Notice</a>
            </li>
            <li>
              <a href="#">Consumer Health Data Privacy Disclosure</a>
            </li>
            <li>
              <a href="#">Your Ads Privacy Choices</a>
              <span className={classes.toggle__ads}></span>
            </li>
          </ul>
          <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
