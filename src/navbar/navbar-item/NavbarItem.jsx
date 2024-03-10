import './NavbarItem.css';

export default function NavbarItem({item, changeActive}) {

    let liClassName = "nav-item";
    if (item.active) liClassName += " theme-bg-color active-link rounded";
    return (
        <li className={liClassName}>
            <a className="nav-link mx-3 my-1" aria-current="page" href={item.link} onClick={() => changeActive(item.name)}>
                <span>{item.name}</span>
            </a>
        </li>
    );
}
