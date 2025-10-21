import React, { useState } from "react";
import './../styles/SideMenu.css';
import { FileText, Users, Building2, BookOpen, Tag, Layers, CircleDot, Gift, Package, UserCog, RefreshCcw, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ sidebarOpen }) => {
    const [active, setActive] = useState("Price List");
    const navigate = useNavigate();

    const menuItems = [
        { name: "Invoices", to: "invoices", icon: <FileText size={18} /> },
        { name: "Customers", to: "customers", icon: <Users size={18} /> },
        { name: "My Business", to: "my-business", icon: <Building2 size={18} /> },
        { name: "Invoice Journal", to: "invoice-journal", icon: <BookOpen size={18} /> },
        { name: "Price List", to: "pricelist", icon: <Tag size={18} /> },
        { name: "Multiple Invoicing", to: "multiple-invoicing", icon: <Layers size={18} /> },
        { name: "Unpaid Invoices", to: "unpaid-invoices", icon: <CircleDot size={18} /> },
        { name: "Offer", to: "offer", icon: <Gift size={18} /> },
        { name: "Inventory Control", to: "inventory-control", icon: <Package size={18} /> },
        { name: "Member Invoicing", to: "member-invoicing", icon: <UserCog size={18} /> },
        { name: "Import/Export", to: "import-export", icon: <RefreshCcw size={18} /> },
        { name: "Log out", to: "logout", icon: <LogOut size={18} /> },
    ];

    return (
        <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
            <h3 className="sidebar-title">Menu</h3>
            <ul className="sidebar-list">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`sidebar-item ${active === item.name ? "active" : ""}`}
                        onClick={()=>{
                            setActive(item.name)
                            navigate(`/${item.to}`);
                        }}
                    >
                        <span className={`dot-sidebar ${active === item.name ? "active" : ""}`}></span>
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.name}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideMenu;
