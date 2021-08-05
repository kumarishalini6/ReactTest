import React from 'react';
import { ImMenu } from 'react-icons/im';
import "./Nav.css";

export default function Navbar() {
    return (
        <div>
            <nav>
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <ImMenu className="fas fa-bars" />
      </label>
      <label class="logo">KEYWORDS</label>
      <ul>
        <li>
          <a href="#" class="active">HOME</a>
        </li>
      </ul>
    </nav>
        </div>
    )
}
