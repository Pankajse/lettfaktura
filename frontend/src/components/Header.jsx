import { Menu } from 'lucide-react'
import './../styles/Header.css'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
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
            <button className='sidebar-menu-icon' onClick={() => { setSidebarOpen(!sidebarOpen) }}>
                <Menu size={28} />
            </button>
            {/* language and flag  */}
            <div className='language-container'>
                <h5>Norsk Bokmal</h5>
                <img className='flag-pic' src="gb.png" alt="flag" />
            </div>
        </div>
    )
}

export default Header