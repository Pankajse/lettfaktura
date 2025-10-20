import React, { useState } from "react";
import {
  FileText,
  Users,
  Building2,
  BookOpen,
  Tag,
  Layers,
  CircleDot,
  Gift,
  Package,
  UserCog,
  RefreshCcw,
  LogOut,
} from "lucide-react";
import './../styles/SideMenu.css';

const SideMenu = () => {
  const [active, setActive] = useState("Price List");

  const menuItems = [
    { name: "Invoices", icon: <FileText size={18} /> },
    { name: "Customers", icon: <Users size={18} /> },
    { name: "My Business", icon: <Building2 size={18} /> },
    { name: "Invoice Journal", icon: <BookOpen size={18} /> },
    { name: "Price List", icon: <Tag size={18} /> },
    { name: "Multiple Invoicing", icon: <Layers size={18} /> },
    { name: "Unpaid Invoices", icon: <CircleDot size={18} /> },
    { name: "Offer", icon: <Gift size={18} /> },
    { name: "Inventory Control", icon: <Package size={18} /> },
    { name: "Member Invoicing", icon: <UserCog size={18} /> },
    { name: "Import/Export", icon: <RefreshCcw size={18} /> },
    { name: "Log out", icon: <LogOut size={18} /> },
  ];

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>
      <ul className="sidebar-list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`sidebar-item ${active === item.name ? "active" : ""}`}
            onClick={() => setActive(item.name)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideMenu;
