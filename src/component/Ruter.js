import React from 'react';
import { FaUserFriends, FaHome, FaFolder, FaCog, FaUsers, FaRegQuestionCircle } from "react-icons/fa";

export const Ruter =[
    {
        title: 'Inicio',
        className: 'textA',
        path: '/Home',
        icon: <FaHome />,
        cName: 'text'

    },
    {
        title: 'Cuentas',
        className: 'textB',
        path: '/Cuentas',
        icon: <FaUsers />,
        cName: 'text'

    },
    {
        title: 'Clientes',
        className: 'textC',
        path: '/Clientes',
        icon: <FaUserFriends/>,
        cName: 'text'

    },
    {
        title: 'Historial',
        className: 'textD',
        path: '/Historial',
        icon: <FaFolder />,
        cName: 'text'

    },
    {
        title: 'Configuracion',
        className: 'textE',
        path: '/Configuracion',
        icon: <FaCog />,
        cName: 'text'

    },
    {
        title: 'Ayuda',
        className: 'textF',
        path: '/Ayuda',
        icon: <FaRegQuestionCircle />,
        cName: 'text'

    }
]
