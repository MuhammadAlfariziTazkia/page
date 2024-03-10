import NavbarItem from "./navbar-item/NavbarItem";
import { useState } from 'react';

export default function Navbar() {

    const [items, setItems] = useState ([
        {name: "Home", link: "/#Home", active: true},
        {name: "Experiences", link: "/#Experience", active: false},
        // {name: "Skills", link: "#", active: false},
        {name: "Articles", link: "/#Article", active: false},
        // {name: "Educations", link: "#", active: false}
    ])  

    const changeActive = (itemName) => {
        const newItems = [];
        items.map(item => {
            if (item.name === itemName) {
                item.active = true;
            } else {
                item.active = false;
            }
            newItems.push(item);
        });
        setItems(newItems);
    }

    const itemsElements = items.map(item => {
        return <NavbarItem key={item.name} items={items} item={item} changeActive={changeActive} />
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
