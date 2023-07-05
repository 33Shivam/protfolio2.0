import React from 'react';
import { motion } from 'framer-motion';

const Back = styled(motion.div)`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000000e1;
display: flex;
align-items: center;
justify-content: center;
`;


const Backdrop = ({children , onClick}) => {
    return (
        <Back  onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
            {children}
        </Back>
    );
};

export default Backdrop;