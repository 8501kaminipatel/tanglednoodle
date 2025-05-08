import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from '../COMPONENTES/Login';
import { Usercontext } from '../CONTEXT/Authcontext';





const Navbar = () => {

    const { user, handleSignOut, changeicon, flag } = useContext(Usercontext);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = search.trim().toLowerCase();

        if (!trimmed) {
            navigate("/beauty"); // default page
            return;
        }

        if (["home"].some(keyword => trimmed.includes(keyword))) {
            navigate(`/product11?search=${encodeURIComponent(trimmed)}`);
        } else if (["women"].some(keyword => trimmed.includes(keyword))) {
            navigate(`/product?search=${encodeURIComponent(trimmed)}`);
        } else if (["men", "puma", "vastramay"].some(keyword => trimmed.includes(keyword))) {
            navigate(`/product2?search=${encodeURIComponent(trimmed)}`);
        } else if (["flip-flop"].some(keyword => trimmed.includes(keyword))) {
            navigate(`/product13?search=${encodeURIComponent(trimmed)}`);
        }
        else if (["sports shoes", "track pants", "tracksuits", "shorts"].some(keyword => trimmed.includes(keyword))) {
            navigate(`/product14?search=${encodeURIComponent(trimmed)}`);
        } else {
            navigate(`/beauty?search=${encodeURIComponent(trimmed)}`);
        }
    };




    return (
        <>
            <nav style={{
                background: flag ? 'black' : 'white',
                color: flag ? 'white' : 'black',
                position: 'sticky',
                top: 0,
                zIndex: 1000
            }}>

                <div className="header" >
                    <div className="container-fluid" >
                        <div className="row" >
                            <div
                                className="navbar navbar-expand-lg p-0 m-0 position-fixed top-0 color: flag ? 'white' : 'black' background: flag ? 'white' : 'black'"
                                style={{ height: "80px", width: "100%" }}
                            >
                                <div className="navbar-brand">
                                    <Link to="/" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>
                                        <img src="/IMAGES/logo.png" style={{ paddingLeft: "50px", }} />
                                    </Link>

                                </div>


                                <div className="collapse navbar-collapse d-flex justify-content-around">
                                    <ul
                                        className="navbar-nav position-relative"
                                        style={{ fontWeight: "bolder", fontSize: "14px", height: "35px" }}
                                    >
                                        <li className="nav-item list1" >
                                            <Link to="/men" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>MEN</Link>
                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled  fs-6">
                                                            <a href=""
                                                                className="nav-link"
                                                                style={{ color: " rgb(228, 10, 82)" }}>Topwear</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6 d-flex">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>T-shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Csual shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Formal shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Sweat shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sweaters</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Jackets</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Blazers&coats</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Suits</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Rain jackets</a>
                                                        </li>


                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled">
                                                            <a
                                                                href=""
                                                                className="nav-link"
                                                                style={{ color: " rgb(228, 10, 82)", whiteSpace: "nowrap" }}
                                                            >Indian & festive wear</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Kurtas & kurta sets</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sherwani</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Nehru jackets</a>
                                                        </li>
                                                    </div>
                                                </div>

                                                <div
                                                    className="col-2"
                                                    style={{ backgroundColor: " rgb(248, 248, 248)" }}
                                                >
                                                    <li className="nav-item list-unstyled">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Bottomwear</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Jeans</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Casual traousers</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Shorts</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Track pants & joggers</a>
                                                    </li>
                                                    <hr className="w-75" />
                                                    <li className="nav-item list-unstyled">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Innerwear &sleepwear</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Briefs & trunks</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Boxers</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Vests</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link" style={{ whiteSpace: "nowrap" }}>Sleepwear &longwear</a>
                                                    </li>

                                                    <hr className="w-75" />

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Plus size</a>
                                                    </li>
                                                </div>
                                                <div className="col-2">
                                                    <li className="nav-item list-unstyled">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Footewear</a>
                                                    </li>
                                                    <li className="nav-item list-unstyled">
                                                        <a href="" className="nav-link">Casual shoes</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Sports shoes</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Formal shoes</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Sneakers</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Sandals & floaters</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Flip floops</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Socks</a>
                                                    </li>
                                                    <hr className="w-75" />
                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Personal care & grooming</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Sunglasses & frames</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Watches</a>
                                                    </li>
                                                </div>
                                                <div
                                                    className="col-2"
                                                    style={{ backgroundColor: 'rgb(248, 248, 248)' }}
                                                >
                                                    <ul className="p-0">
                                                        <li className="nav-item list-unstyled">
                                                            <a
                                                                href="#"
                                                                className="nav-link"
                                                                style={{ color: 'rgb(228, 10, 82)' }}
                                                            >
                                                                Sports & Active Wear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Sport Shoes</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Sports Sandals</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Active T-Shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Tracksuits</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Jackets</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="#" className="nav-link">Swimwear</a>
                                                        </li>
                                                    </ul>
                                                    <hr className="w-75" />

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href=""
                                                            className="nav-link"
                                                            style={{ color: " rgb(228, 10, 82)" }}
                                                        >Gadgets</a>
                                                    </li>
                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Smart wearables</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Fiteness gadgets</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="" className="nav-link">Speakers</a>
                                                    </li>
                                                </div>
                                                <div className="col-2">
                                                    <li className="nav-item list-unstyled">
                                                        <a
                                                            href="#"
                                                            className="nav-link"
                                                            style={{ color: 'rgb(228, 10, 82)' }}
                                                        >
                                                            Fashion accessories
                                                        </a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Wallets</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Bells</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Perfumes & body mists</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Trimmers</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Deodorants</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Caps & hats</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Phone cases</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Rings & wristwear</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Accessory gift sets</a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a href="#" className="nav-link">Helmets</a>
                                                    </li>

                                                    <hr className="w-75" />

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href="#"
                                                            className="nav-link"
                                                            style={{ color: 'rgb(228, 10, 82)' }}
                                                        >
                                                            Bags & backpacks
                                                        </a>
                                                    </li>

                                                    <li className="nav-item list-unstyled fs-6">
                                                        <a
                                                            href="#"
                                                            className="nav-link"
                                                            style={{ color: 'rgb(228, 10, 82)' }}
                                                        >
                                                            Luggages & trolleys
                                                        </a>
                                                    </li>

                                                </div>
                                            </ul>
                                        </li>

                                        <li className="nav-item list2">
                                            <Link to="/women" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>WOMEN</Link>

                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Indian & fusion wear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Kurtas & suits</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sarees</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Ethnic wear</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Leggings.salwar & churidas</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Skirts & plazo</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Dress meterials</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Lehenga cholis</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Dupttas & shawals</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Jackets</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Belts,scarvs & mores
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Watches & wearable
                                                            </a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                                                        <li className="nav-item list-unstyled" style={{ color: 'rgb(228, 10, 82)' }}>
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Western wear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Dresses</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Tops</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">T-shirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Jeans</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Shorts & skirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Co-ords</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Playsuits</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Jumpsuits</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Shrugs</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sweaters</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Jackets & coats</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Blazers</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Plus size
                                                            </a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Meternity
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Sunglasses & frames
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Footewear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Flats</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Casual-shoes</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Heels</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Boots</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sports shoes</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Sports & active wear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Clothing</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sports accessories</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sports equipment</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Lingeries & sleepwear
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bra</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Briefs</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Shapewear</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sleepwear &</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sweatshirts</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Swimwear</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Camisole & thermol</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Beauty & personalcare
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Makeup</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Skincare</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Premium beauty</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Lipsticks</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Fragrances</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Gadgets
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Smart wearables</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Fitness gadgets</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Headphones</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Speakers</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Jewellery
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Fashion Jewellery</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Fine Jewellery</a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Earrings</a>
                                                        </li>

                                                        <hr className="w-75" />

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Backpacks
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Handbags,bags & wallets
                                                            </a>
                                                        </li>

                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'rgb(211, 62, 154)' }}>
                                                                Luggages & trolleys
                                                            </a>
                                                        </li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>


                                        <li className="nav-item list3">
                                            <Link to="/kids" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>KIDS</Link>

                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Boys Clothing
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">T-shirts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Shirts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Shorts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Jeans</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Trousers</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Clothing sets</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Ethnic wear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Track pants & pyjams</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Jackets,sweaters</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Party wear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Innerwear & thermals</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Nightwear & loungwear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Value packs</a></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Girls Clothing
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Dresses</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Tops</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Tshirts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Clothing sets</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lehenga choli</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Kurta sets</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Party wear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Dungarees & jumpsuits</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Skirts & shorts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Jeans ,sweater & Sweatshirts</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Innerwear & thermals</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Nightwear & loungwear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Value packs</a></li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Footwear
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Flats</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Casual-shoes</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Heels</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Boots</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Sports shoes</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Flipflops</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Socks</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Toys & games
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Learning & development</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Activity toys</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Soft toys</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Action figure/play set</a></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Infants
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Bodysuits</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Rompers & sleepsuits</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Clothing sets</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Tshirts & tops</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Dresses</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Bottomwear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Winterwear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Innerwear & sleepwear</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Infant care</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>Home & bath</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>personalcare</a></li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Kids accessories
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Bags & backpacks</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Watches</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Jewellery & hair accessory</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Sunglasses</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Masks & gears</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Caps & hats</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(239, 108, 7)" }}>
                                                                Brands
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">H&M</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Pantaloons</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">United colors of benetton kids</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Mothecare</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">HRX</a></li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>


                                        <li className="nav-item list4">
                                            <Link to="/home" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>HOME</Link>
                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Bed linen & furnishing
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bed runners</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Mattress protectors</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bedsheets</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bedding sets</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Blankets,quits & dohars</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Pillows & pillow covers</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Diwan sets</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Chair pads & covers</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Sofa covers</a>
                                                        </li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Flooring
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Floor runners</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Carpets</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Floor mats & dhurries</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Door mats</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Bath
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bath towels</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Hand & face towels</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Beach towels</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Towels set</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bath rugs</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bath robes</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bathoroom accessories</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Shower curtains</a>
                                                        </li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Lamps & lighting
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Floor lamps</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Ceiling lamps</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Table lamps</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Wall lamps</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Outdoor lamps</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Home decor
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Plants & planters</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Aromas & candles</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Clocks</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Mirrors</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Wall decor</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Festive decor</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Pooja essentials</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Wall shelves</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Ottoman</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Fountains</a>
                                                        </li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Cushions & Cushions covers
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Curtains
                                                            </a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Home gifts sets
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Kitchen & table
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Table runners</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Dinnerware & serveware</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Cups and mugs</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bakeware & cookware</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Kitchen storage & tools</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bar & drinkware</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Table covers & furnishings</a>
                                                        </li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Storage
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Bins</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Hangers</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Organisers</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Laundy bags</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: 'orange' }}>
                                                                Brands
                                                            </a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">H&M</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Marks & spencer</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Home centre</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Spaces</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">D'decor</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Story@home</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Pure home & living</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Swayam</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Raymond home</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Maspar</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">My trident</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Cortina</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Random</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Ellementry</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">Romme</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link">SEJ by nisha gupta</a>
                                                        </li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="nav-item list4">
                                            <Link to="/beauty" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>BEAUTY</Link>
                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Makeup</Link>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lipstick</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lip gloss</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lip liner</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Mascara</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Eyeliner</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Kajal</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Eyeshadow</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Foundation</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Primer</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Concealer</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Compact</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Nail polish</Link></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Skincare, bath & body</Link>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Face moisturiser</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Cleanser</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Masks & peel</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Sunscreen</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Serum</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Face wash</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Eye cream</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lip balm</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Body wash</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Body scrub</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hand cream</Link></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Baby care</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Masks</Link></li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Haircare</Link>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Shampoo</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Conditioner</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair cream</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair oil</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair gel</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair color</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair serum</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair accessory</Link></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Fragrances</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Perfume</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Deodorant</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Body mist</Link></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Appliances</Link>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair straightener</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair dryer</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Epilator</Link></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Men's grooming</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Trimmers</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Hair wax</Link></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Beauty gifts & makeup</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Beauty gift</Link></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Premium beauty set</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Wellness & hygiene</Link></li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <Link to="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Top brands</Link>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lakme</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Maybelline</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Loreal</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Philips</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Bath & body shop</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">The body shop</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Biotique</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Mamaearth</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Mcaffeine</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Nivea</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Lotus herbals</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Loreal professionnel</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Kama ayurveda</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Mac</Link></li>
                                                        <li className="nav-item list-unstyled fs-6"><Link to="" className="nav-link">Forest essentials</Link></li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>


                                        <li className="nav-item list4">
                                            <Link to="/genz" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>GENZ</Link>
                                            <ul className="list">
                                                <div className="main-box d-flex">
                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Makeup</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lipstick</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lip gloss</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lip liner</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Mascara</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Eyeliner</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Kajal</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Eyeshadow</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Foundation</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Primer</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Concealer</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Compact</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Nail polish</a></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Skincare,bath & body</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Face moisturiser</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Cleanser</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Masks & peel</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Sunscreen</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Serum</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Face wash</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Eye cream</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lip balm</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Body wash</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Body srub</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hand cream</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Baby care</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Masks</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Haircare</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Shampoo</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Conditioner</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair cream</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair oil</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair gel</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair color</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair serum</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair accessory</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Fragrances</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Perfume</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Deodorant</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Body mist</a></li>
                                                    </div>

                                                    <div className="col-2" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Appliances</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair straightener</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair dryer</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Epilator</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Men's grooming</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Trimmers</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Hair wax</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Beauty gifts & makeup</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Beauty gift</a></li>
                                                        <hr className="w-75" />
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Premium beauty set</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Wellness & hygiene</a>
                                                        </li>
                                                    </div>

                                                    <div className="col-2">
                                                        <li className="nav-item list-unstyled">
                                                            <a href="" className="nav-link" style={{ color: "rgb(29, 180, 200)" }}>Top brands</a>
                                                        </li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lakme</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Maybelline</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Loreal</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Philips</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Bath & body shop</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">The body shop</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Biotique</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Mamaearth</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Mcaffeine</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Nivea</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Lotus herbals</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Loreal professionnel</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Kama ayurveda</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Mac</a></li>
                                                        <li className="nav-item list-unstyled fs-6"><a href="" className="nav-link">Forest essentials</a></li>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>

                                        <li className="nav-item list5">
                                            <Link to="/studio" className="nav-link" style={{ color: flag ? 'white' : 'black' }}>STUDIO</Link>
                                            <ul className="list">
                                                <div className="main-box d-flex justify-content-center">
                                                    <div
                                                        className="image-box d-flex flex-column align-items-center justify-content-center"
                                                        style={{ width: "500px", height: "500px" }}
                                                    >
                                                        <li className="nav-item list-unstyled mb-3">
                                                            <img
                                                                src="/public/IMAGES/Studio-logo-new.svg"
                                                                style={{ width: "100px", height: "auto" }}
                                                                alt="Studio Logo"
                                                            />

                                                        </li>
                                                        <div style={{ fontSize: "20px", fontWeight: "normal", color: "black" }}>Your daily inspiration for everything fashion</div>

                                                        <li className="nav-item list-unstyled">
                                                            <img
                                                                src="/public/IMAGES/Sudio-nav-banner.png"
                                                                style={{ width: "400px", height: "250px", paddingTop: "20px" }}
                                                                alt="Studio Banner"
                                                            />
                                                        </li>
                                                        <Link to="/studio" className="explore-btn text-black">
                                                            EXPLORE STUDIO <i className="bi bi-chevron-right ms-2"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>

                                    </ul>


                                    <form className="d-flex" onSubmit={handleSubmit}>
                                        {/* <i className="bi bi-search" style={{paddingLeft:"30px",paddingBottom:"5px"}} >

                                    </i> */}
                                        <input
                                            type="search"
                                            value={search}
                                            placeholder="Search beauty products..."
                                            onChange={(e) => setSearch(e.target.value)}
                                            style={{ paddingLeft: "15px", color: "black" }}
                                        />

                                    </form>
                                    <div className="main-icon d-flex">
                                        <a href="#" className="nav-link text-dark mt-2  ms-3">
                                            <div className="user-dropdown position-relative">
                                                <Link to="/login" className="user-trigger d-flex flex-column align-items-center" style={{ color: flag ? 'white' : 'black', textDecoration: "none" }}>
                                                    <i className="bi bi-person-add fs-4"></i>
                                                    <p>User</p>
                                                </Link>

                                                <div className="user-card position-absolute" style={{ marginRight: "150px" }}>
                                                    <div className="nav-link text-center mt-2" >
                                                        <ul className="list-unstyled p-3">
                                                            <li><Link to="/login" className="text-decoration-none" style={{ cursor: "pointer", fontSize: "16px" }}>🔐 Login</Link></li>
                                                            <li>
                                                                <div onClick={changeicon} style={{ cursor: "pointer", fontSize: "16px" }}>
                                                                    {flag ? '🌙 Dark Theme' : '☀️ Light Theme'}

                                                                </div>
                                                            </li>
                                                            <li><Link to="/chart" className="text-decoration-none" style={{ cursor: "pointer", fontSize: "16px" }}>📊chart</Link></li>
                                                            <li><Link to="/contact" className="text-decoration-none" style={{ cursor: "pointer", fontSize: "16px" }}>📬Contact Us</Link></li>
                                                            <li><Link to="/profile" className="text-decoration-none" style={{ cursor: "pointer", fontSize: "16px" }}>👤 My Profile</Link></li>
                                                            {user && (
                                                                <li>
                                                                    <button onClick={handleSignOut} className="btn btn-outline-danger mt-2" title="Logout">
                                                                        Logout
                                                                    </button>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>



                                        </a>

                                        <a href="#" className="nav-link  text-center mt-2  ms-3 color: flag ? 'white' : 'black'">
                                        <Link to="/wishlist" style={{ color: flag ? 'white' : 'black', textDecoration: "none" }}>
                                            <i className="bi bi-heart"></i>
                                            <p>Wishlist</p>
                                            </Link>
                                        </a>

                                        <a href="#" className="nav-link text-dark mt-2  ms-3">
                                            <Link to="/cart" style={{ color: flag ? 'white' : 'black', textDecoration: "none" }}>
                                                <i className="bi bi-bag-check"></i>
                                                <p>Bag</p>
                                            </Link>
                                        </a>
                                        <a href="#" className="nav-link text-dark mt-2 ms-3 d-block d-lg-none">
                                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                                <i className="bi bi-grid-fill"></i>
                                            </button>

                                            <div
                                                className="offcanvas offcanvas-top text-white"
                                                tabIndex="-1"
                                                id="offcanvasTop"
                                                aria-labelledby="offcanvasTopLabel"
                                                style={{
                                                    backdropFilter: 'blur(10px)',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    borderRadius: '0 0 15px 15px',
                                                    boxShadow: '0 4px 12px rgba(145, 142, 142, 0.3)',
                                                    border: '1px solid rgba(255, 255, 255, 0.2)'
                                                }}
                                            >
                                                <div className="offcanvas-header">
                                                    <h5 id="offcanvasTopLabel" className="fw-bold text-uppercase">Explore Categories</h5>
                                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body d-flex flex-wrap gap-3 justify-content-center">
                                                    <Link to="/men" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-person-lines-fill"></i> MEN
                                                    </Link>
                                                    <Link to="/women" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-person-bounding-box"></i> WOMEN
                                                    </Link>
                                                    <Link to="/kids" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-emoji-smile"></i> KIDS
                                                    </Link>
                                                    <Link to="/home" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-house-door-fill"></i> HOME
                                                    </Link>
                                                    <Link to="/beauty" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-heart-fill"></i> BEAUTY
                                                    </Link>
                                                    <Link to="/genz" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-stars"></i> GENZ
                                                    </Link>
                                                    <Link to="/studio" className="nav-link text-white d-flex align-items-center gap-2">
                                                        <i className="bi bi-camera-video-fill"></i> STUDIO
                                                    </Link>
                                                </div>
                                            </div>
                                        </a>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>

        </>

    )
};

export default Navbar;



