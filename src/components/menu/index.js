import React from "react";
import {Link} from "react-router-dom"

import "./style.css"

export default function Menu() {
    return <div className="wrap">
      <ul className="list">
        <li className="list-item"><Link to="/"><img src="/logo.jpeg" alt="rickmorty"/></Link></li>
        <li className="list-item"><Link to="/categories">Categories</Link></li>
        <li className="list-item"><Link to="/random-character">Random</Link></li>
      </ul>
    </div>
  }
  