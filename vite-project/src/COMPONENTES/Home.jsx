import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="banner1 container-fluid">
        <img src="/IMAGES/homeimg-1.webp" />
      </div>
      <div className="gallary">
        <div className="container d-flex">
          <div className="row">
            <h2>NICE TO SEE YOU, COME ON IN!</h2>
            <div className="gallary-box1">
              <img src="/IMAGES/gallary-boximg1.webp" />
            </div>

            <div className="gallary-box2">
              <img src="/IMAGES/homeimg-2.webp" />
            </div>

            <div className="gallary-box3">
              <img src="/IMAGES/homeimg-3.webp" />
            </div>

            <div className="gallary-box4">
              <img src="/IMAGES/homeimg-4.webp" />
            </div>

            <div className="gallary-box5">
              <img src="/IMAGES/homeimg-5.webp" />
            </div>

            <div className="gallary-box6">
              <img src="/IMAGES/homeimg-6.webp" />
            </div>
          </div>
          <div className="gallary-box">
            Furnishings & Bed Linen<br /><br />
            Bed Sheets<br />
            Bedding Sets & Bed Covers Blankets, Quilts & Dohars Pillows & Pillow
            Covers Cushions & Cushion Covers Curtains Mats & Dhurries Carpets<br /><br />
            Bath & Bed Linen<br /><br />
            Towels & Towel Sets<br />
            Bath Robes<br />
            Bathroom Accessories Shower Curtains<br />
            Bath Rugs<br /><br />
            Home Décor<br /><br />
            Pooja Essentials<br />
            Laptop Table<br />
            Ottomans<br />
            Artificial Flowers & Plants Candles & Candle Holders Clocks<br />
            Planters & Garden Accessories<br />
            Home Fragrances<br />
            Mirrors<br />
            Wall Art<br />
            Wall Décor<br />
            Wall Shelves<br />
            Showpieces & Vases<br /><br />
            Lamps & Lighting<br /><br />
            Floor Lamps<br />
            Table Lamps<br />
            Wall Lamp & String Lights Bathroom Lights & Outdoor Lamps<br />
            Ceiling Lamps<br /><br />
            Kitchen & Table<br /><br />
            Dinnerware<br />
            Cups & Mugs<br />
            Water Bottles<br />
            Bakeware<br />
            Trays & Serveware<br />
            Bar & Drinkware<br />
            Cookware & Kitchen Tools Kitchen Storage<br />
            Table Covers & Furnishings<br /><br />
            Storage & Organisers<br /><br />
            Organisers<br />
            Hooks & Holders
          </div>
        </div>
      </div>

      <div className="trending container-fluid">
        <img src="/IMAGES/trend-banner1.webp" />
      </div>

      <div className="tranding-images">
        <div className="container-fluid">
          <div className="row">
            <div className="tranding-box1">
              <img src="/IMAGES/trendbox-img1.webp" />
            </div>
            <div className="tranding-box2">
              <img src="/IMAGES/trendbox-img2.webp" />
            </div>
            <div className="tranding-box3">
              <img src="/IMAGES/trendbox-img3.webp" />
            </div>
          </div>
        </div>
      </div>

      <div className="brands container-fluid ">
        <img src="/IMAGES/brands-img.webp" />
      </div>
      <div className="brand-boxes container-fluid ">
        <div className="row">
          <div className="brand-box1">
            <img src="/IMAGES/brand-logo-1.webp" />
          </div>
          <div className="brand-box2">
            <img src="/IMAGES/brand-logo-2.webp" />
          </div>
          <div className="brand-box3">
            <img src="/IMAGES/brand-logo-3.webp" />
          </div>
          <div className="brand-box4">
            <img src="/IMAGES/brand-logo-4.webp" />
          </div>
          <div className="brand-box5">
            <img src="/IMAGES/brand-logo-5.webp" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home