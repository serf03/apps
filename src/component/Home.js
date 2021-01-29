import React from 'react';
import '../styles/css/Home.css';
import {Ruter} from './Ruter';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';



export default function(){
    return(
        <>
        <IconContext.Provider value={{color: '#fff', size: '30px'}}>
            <div>
                <section>
                    {Ruter.map((item, index) =>{
                        return(
                            <li key={index} className={item.className}>

                                <span>{item.title}</span>
                            <li key={index} className={item.cName}>
                                <Link to={item. path}>
                                    {item.icon}
                                </Link>
                            </li>

                            </li>
                        )
                    })}
                   
                </section>
            </div>
        </IconContext.Provider>
        </>
    )
}