import React from 'react';
import '../styles/css/Home.css';
import {Ruter} from './Ruter';
import {Link, Redirect} from 'react-router-dom';
import {IconContext} from 'react-icons';

export default function(){
    return(
        <>
        <IconContext.Provider value={{color: '#fff', size: '30px'}}>
            <div>
                <section>
                    {Ruter.map((item, index) =>{
                        return(
                            <Link to={item.path} key={index} className={item.cName}>
                                    {item.icon}
                            </Link>
                        )
                    })}
                </section>
            </div>
        </IconContext.Provider>
        </>
    )
}