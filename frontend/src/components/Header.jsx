import { Menu } from 'lucide-react'
import './../styles/Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            {/* it include profile pic , name, address  */}
            <div className='person-details'>
                <img className='profile-pic' src="Profile-pic.png" alt="image" />
                <div>
                    <h5 style={{ marginBottom: "3px" }}>Pankaj</h5>
                    <h6>Delhi, India</h6>
                </div>
            </div>
            <Menu className='sidebar-menu-icon' size={28} />
            {/* language and flag  */}
            <div className='language-container'>
                <h5>Norsk Bokmal</h5>
                <img className='flag-pic' src="gb.png" alt="flag" />
            </div>
        </div>
    )
}

export default Header