import React from "react";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <div>
        <li>
                <Link to="/App">Home Page</Link>
            </li>
            
            <li>
                <Link to="/Scan">Scan Dashboard</Link>
            </li>
            
            <li>
                <Link to="/Service">Roadside Assistance</Link>
            </li>

            <li>
                <Link to="/OfflineFaults">Most Common Faults</Link>
            </li>

            <li>
                <Link to="/RedFaults">Red Faults</Link>
            </li>

            <li>
                <Link to="/AmberFaults">Amber Faults</Link>
            </li>

            <li>
                <Link to="/GreenBlueFaults">Green & Blue Faults</Link>
            </li>

            <li>
                <Link to="/ElectricFaults">Electric & Hybrid Faults</Link>
            </li>

            <li>
                <Link to="/Forum">Q&A Forum</Link>
            </li>

            <li>
                <Link to="/UserAccount">User Account</Link>
            </li>
        </div>);
}

export default NavBar;