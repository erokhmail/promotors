import { NavLink } from "react-router-dom";

function HeaderMenu({ closeMobileMenu }) {

    const navLinks = [
        {
            title: 'Home',
            slug: '/'
        },
        {
            title: 'About',
            slug: 'about'
        },
        {
            title: 'Services',
            slug: 'services'
        },
        {
            title: 'Team',
            slug: 'team'
        },
        {
            title: 'News',
            slug: 'news'
        },
        {
            title: 'Contacts',
            slug: 'contacts'
        }
    ];

    return (
        <>
            {
                navLinks.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink itemProp="url" to={item.slug} title={item.title} className="menu-link" onClick={closeMobileMenu} >{item.title}</NavLink>
                        </li>
                    )
                })
            }
        </>
    )
}

export default HeaderMenu