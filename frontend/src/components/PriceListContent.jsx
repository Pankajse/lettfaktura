
import React from 'react'
import SearchInput from './ui/SearchInput'
import './../styles/PriceListContent.css'
import CustomButton from './ui/CustomButton'
import { Plus, Printer, ToggleRight } from 'lucide-react'
import Articles from './Articles'

const PriceListContent = () => {
    return (
        <div className='price-list-container'>
            <div className='pricelist-header-buttons'>
                {/* search buttons */}
                <div className='search-input-parent'>
                    <SearchInput placeholder="Search Article No..." />
                    <SearchInput placeholder="Search Product..." />
                </div>
                {/* Filter buttons  */}
                <div className='pricelist-filter-buttons'>
                    <CustomButton variant="secondary" type='button'>
                        <span className='filter-button-text'>New Product</span>
                        <Plus size={18} />
                    </CustomButton>
                    <CustomButton variant="secondary" type='button'>
                        <span className='filter-button-text'>Print List</span>
                        <Printer size={18} />
                    </CustomButton>
                    <CustomButton variant="secondary" type='button'>
                        <span className='filter-button-text'>Advanced mode</span>
                        <ToggleRight size={18} />
                    </CustomButton>
                </div>
            </div>
            {/* Articles  */}
            <div>
                <Articles />
            </div>
        </div>
    )
}

export default PriceListContent