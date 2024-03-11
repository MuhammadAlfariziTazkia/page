import './NavbarItem.css';

export default function NavbarItem({item, changeActive}) {

    return (
        <li className="nav-item">
            <a className="nav-link mx-3 my-1" aria-current="page" href={item.link}>
                <b><span>{item.name}</span></b>
            </a>
        </li>
    );
}
