import React from 'react'

const Footer = () => {
  return (

    <div className="footer">
      <div className="footer1 container">
        <div className="row link-dark ps-5">
          {/* ONLINE SHOPPING & USEFUL LINKS */}
          <div className="col-2 col-sm-6 col-md-6 col-lg-2">
            <h6 style={{ margin: "10px 0px" }}>ONLINE SHOPPING</h6>
            <ul style={{ display: "block", justifyContent: "start", alignItems: "start", padding: 0, lineHeight: "30px" }}>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="/giftcard">Gift Cards</a></li>
              <li><a href="/myntrainsider?cache=false">Myntra Insider</a></li>
            </ul>
            <div className="col-2 col-sm-6 col-md-6 col-lg-2">
            <h6 style={{ margin: "10px 0px" }}>USEFUL LINKS</h6>
            <ul style={{ display: "block", justifyContent: "start", alignItems: "start", padding: 0, lineHeight: "30px" }}>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Whitehat</a></li>
              <li><a href="#">Cleartrip</a></li>
            </ul>
          </div>
          </div>

          {/* CUSTOMER POLICIES */}
          <div className="col-2 col-sm-6 col-md-6 col-lg-2">
            <h6 style={{ margin: "10px 0px" }}>CUSTOMER POLICIES</h6>
            <ul style={{ display: "block", justifyContent: "start", alignItems: "start", padding: 0, lineHeight: "30px", color: "rgb(129, 129, 129)" }}>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">T&C</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Track Orders</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Grievance Officer</a></li>
            </ul>
          </div>

          {/* EXPERIENCE MYNTRA APP ON MOBILE + KEEP IN TOUCH */}
          <div className="col-3 col-sm-6 col-md-6 col-lg-4">
            <h6 style={{ margin: "10px 0px" }}>EXPERIENCE MYNTRA APP ON MOBILE</h6>
            <ul style={{ display: "flex", padding: 0, color: "rgb(129, 129, 129)" }}>
              <li>
                <a href="#"><img src="/IMAGES/FOOTER1.png" alt="App Store" style={{ height: "45px", width: "90%" }} /></a>
              </li>
              <li>
                <a href="#"><img src="/IMAGES/FOOTER2.png" alt="Play Store" style={{ height: "45px", width: "90%" }} /></a>
              </li>
            </ul>
            <div className="col-3 col-sm-6 col-md-6 col-lg-4"> 
            <h6 style={{ margin: "10px 0px" }}>KEEP IN TOUCH</h6>
            <ul style={{ display: "flex", padding: 0, width: "50%", color: "rgb(129, 129, 129)" }}>
              <li>
                <a href="#"><img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="Facebook" style={{ width: "70%" }} /></a>
              </li>
              <li>
                <a href="#"><img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="Twitter" style={{ width: "70%" }} /></a>
              </li>
              <li>
                <a href="#"><img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="YouTube" style={{ width: "70%" }} /></a>
              </li>
              <li>
                <a href="#"><img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="Instagram" style={{ width: "70%" }} /></a>
              </li>
            </ul>
          </div>
          </div>

          {/* 100% ORIGINAL GUARANTEE + RETURN INFO */}
          <div className="col-3 col-sm-6 col-md-6 col-lg-4">
            <div className="fott1 d-flex" style={{ margin: "10px 0px" }}>
              <div className="fott2">
                <a href="#">
                  <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="100% Original" height="50px" width="100%" />
                </a>
              </div>
              <div className="fott3" style={{ marginLeft: "-20px" }}>
                <ul>
                  <li><a href="#"><strong>100% ORIGINAL</strong> guarantee for</a></li>
                  <li><a href="#">all products at myntra.com</a></li>
                </ul>
              </div>
            </div>

            <div className="fott1 d-flex" style={{ margin: "10px 0px" }}>
              <div className="fott2">
                <a href="#">
                  <img src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="Return Policy" height="55px" width="100%" />
                </a>
              </div>
              <div className="fott3" style={{ marginLeft: "-16px" }}>
                <ul>
                  <li><a href="#"><strong>Return within 14 days</strong> of</a></li>
                  <li><a href="#">receiving your order</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2 container">
        <div className="row ps-5">
          <div className="col-12">
            <h6>POPULAR SEARCHES</h6>
          </div>
        </div>

        <div className="row ps-3">
          <div className="col-12">
            <ul style={{ fontWeight: 350 }}>
              <li>
                Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
                Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags |
                Sport Shoes | Reebok Shoes | Puma Shoes |
              </li>
              <li>
                Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis |
                Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns |
                Rings | Cricket Shoes | Forever 21 | Eye
              </li>
              <li>
                Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion
                Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike
                Shoes | Goggles | Bras | Suit | Chinos | Shoes |
              </li>
              <li>
                Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
              </li>
            </ul>
          </div>
        </div>

        <div className="row ps-5 d-flex justify-content-between mt-3">
          <div className="col-3">
            <div className="desktop-contact">
              In case of any concern,{" "}
              <a href="/contactus" style={{ textDecoration: "none" }}>
                Contact Us
              </a>
            </div>
          </div>

          <div className="col-4">
            <div className="desktop-copywrite">
              © 2024 www.myntra.com. All rights reserved.
            </div>
          </div>

          <div className="col-3 ps-5">
            <div className="desktop-flipkartCompany">
              <a
                href="https://www.flipkart.com/"
                style={{ textDecoration: "none", color: "black" }}
              >
                A Flipkart company
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="footer4 container mt-5">
        <div className="row ps-5">
          <div className="col-12">
            <h6>ONLINE SHOPPING FOR MEN: MYNTRA ALL THE WAY</h6>
            <p style={{ color: "rgb(129, 129, 129)" }}>
              When it comes to men, shopping is more than just a therapy. We
              believe that it is a joyous activity where you get to choose a
              whole new lifestyle. If you would like access to a wide variety of
              products for men online shopping is the way to go. And of all the
              online shopping sites for women, Myntra is the place to find the
              finest brands of women’s fashion and lifestyle products. The
              women’s shopping range at Myntra includes the best price
              merchandise of top-notch quality.
            </p>
          </div>
        </div>
      </div>
      <div className="footer5 container">
        <div className="row ps-5">
          <div className="col-12">
            <h6>
              MEN’S ONLINE SHOPPING: CLOTHES, ACCESSORIES, FOOTWEAR, AND MORE
            </h6>
            <p style={{ color: "rgb(129, 129, 129)" }}>
              While a few online shopping sites for women might focus on
              apparel, others on ethnic wear, and yet others on home décor,
              Myntra brings you everything under one roof. Here is a list of
              must-haves from the wide variety of awesome products at Myntra:
            </p>
          </div>
          <div className="col-12">
            <ul style={{ color: "rgb(129, 129, 129)" }}>
              <li style={{ paddingBottom: "10px" }}>
                <span style={{ marginLeft: "-15px" }}>1. </span> online shopping
                clothes’ list should include a healthy mix of apparel suitable
                for casual, formal and festive occasions. Look cool in T-shirts,
                tops and jeans. Ooze maximum oomph with our top-of-the-range
                dresses. Climb up the corporate ladder with chic formal wear.
                Try the ethnic touch with our pretty printed-kurtas, Patiala
                salwars and dhotis. Stride into a wedding with confidence in a
                lehenga choli or an elegant saree.
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <span style={{ marginLeft: "-15px" }}>2. </span> If you are generally
                reluctant to step out to purchase innerwear for women online
                shopping provides a comfortable, private setting where you can
                shop in peace. Right from basic bras and briefs, to shape wear
                and swimwear, we have an option for each of your needs. You can
                include in your online clothes’ shopping list cosy winter wear
                and sporty sweatshirts and tracksuits as well.
              </li>
              <li style={{ paddingBottom: "10px" }}>
                <span style={{ marginLeft: "-15px" }}>3. </span> Once you are done
                with your online clothes’ shopping, it is time to buy smart
                jewellery. Our range of pretty rings, necklaces, bracelets and
                more have been crafted to highlight your natural beauty. You can
                find smart accessories here as well such as handbags, purses,
                sunglasses and beautiful analogue and digital watches for any
                occasion.
              </li>
              <li>
                <span style={{ marginLeft: "-15px" }}>4. </span> Your online women’s
                shopping adventure should include a trip to our footwear
                section. Feel fabulous in fine footwear from the best brands
                crafted to perfection. Be it handcrafted mojaris and juttis or
                single-toe flats from our ethnic section, or pumps and peep-toe
                shoes from our western section, you are sure to be dressed to
                impress.
              </li>
            </ul>
            <p style={{ color: "rgb(129, 129, 129)" }}>
              And there are more fabulous products such as sportswear, blazers,
              gowns, dress material, bath accessories, kajal and makeup for men
              online. The men’s online shopping experience at Myntra is filled
              with unlimited choices!
            </p>
          </div>
          <div className="col-12">
            <h6>ONLINE SHOPPING FOR MEN MADE EASY</h6>
            <p style={{ color: "rgb(129, 129, 129)" }}>
              The men’s shopping experience at a physical store is fraught with
              problems. Long payment queues, crowded shops and struggles for
              parking spaces are not enjoyable. At Myntra you can complete your
              shopping and make your payment in a jiffy. Just a few clicks, or a
              few taps on your smartphone, and you are done! Enjoy your online
              men’s shopping journey at Myntra and get set to redefine your
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer