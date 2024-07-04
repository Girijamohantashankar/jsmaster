import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    return (
        <div className="sidebar_container">
            <div className="side_nav">
                <div className='Beginner_Level'>

                    <div className='nav_items'>
                        <h4>Beginner Level</h4>
                        <div className='nav_item'>
                            <Link className='link' to="/basic-variable">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Basic Syntax and Variables</span>
                            </Link>
                        </div>
                        <div className='nav_item'>
                            <Link className='link'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Control Structures</span>
                            </Link>
                        </div>
                        <div className='nav_item'>
                            <Link className='link'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Functions</span>
                            </Link>
                        </div>
                        <div className='nav_item'>
                            <Link className='link'>
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <span>Objects and Arrays</span>
                            </Link>
                        </div>
                    </div><div className='nav_item'>
                        <Link className='link'>
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <span>DOM Manipulation</span>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;
