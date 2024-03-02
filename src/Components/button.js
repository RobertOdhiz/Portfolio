import React from 'react';
import '../styles/button.css';

function Button({ label, icon, link, onClick }) {
    const openLinkInNewTab = () => {
        window.open(link, '_blank');
      };
    
  return (
    <button onClick={openLinkInNewTab || onClick } class="button">
        <span>
            {label}
        </span>
        <span>
            {icon}
        </span>
    </button>
  )
}

export default Button