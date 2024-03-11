import NavbarItem from "./navbar-item/NavbarItem";
import { useState } from 'react';

export default function Navbar() {

    const [items, setItems] = useState ([
        {name: "Home", link: "/page#Home"},
        {name: "Articles", link: "/page#Article"},
        {name: "Experiences", link: "/page#Experience"},
        {name: "Skills", link: "/page#Skill"},
        // {name: "Educations", link: "#", active: false}
    ])  

    const itemsElements = items.map(item => {
        return <NavbarItem key={item.name} item={item} />
    })
    
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
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