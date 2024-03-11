import NavbarItem from "./navbar-item/NavbarItem";
import { useState } from 'react';

export default function Navbar() {

    const [items, setItems] = useState ([
        {name: "Home", link: "/#Home"},
        {name: "Articles", link: "/#Article"},
        {name: "Experiences", link: "/#Experience"},
        {name: "Skills", link: "/#Skill"},
        // {name: "Educations", link: "#", active: false}
    ])  

    const itemsElements = items.map(item => {
        return <NavbarItem key={item.name} item={item} />
    })
    
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand theme-color fw-bold" href="#">
          Alfarizi's Pages!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {itemsElements}
          </ul>
        </div>
      </div>
    </nav>
  );
}
