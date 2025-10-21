import { Search } from 'lucide-react'
import './../../styles/SearchInput.css'

const SearchInput = ({placeholder,onClick,value}) => {
    return (
        <div className='search-input-container'>
            <input className='search-input' type="text" placeholder={placeholder} value={value} />
            <button className='search-button' onClick={onClick}><Search size={18} /></button>
        </div>
    )
}

export default SearchInput