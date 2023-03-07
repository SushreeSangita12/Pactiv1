import React from 'react';
import './Topbar.css';

import deny from '../Assests/deny.png';
import checked from '../Assests/checked.png';
import icon1 from '../Assests/icon1.png';
import icon2 from '../Assests/icon2.png';
import icon3 from '../Assests/icon3.png';
import iconaudio from '../Assests/iconaudio.png';
import icon5 from '../Assests/icon5.png';
import icon6 from '../Assests/icon6.png';
import icon7 from '../Assests/icon7.png';
import icon8 from '../Assests/icon8.png';
import icon9 from '../Assests/icon9.png';
import icon10 from '../Assests/icon10.png';
import icon11 from '../Assests/icon11.png';




const Topbar = () => {
    return ( 
        <div className="wrapper">
            <div>  </div>
            <div> 
                <img src={icon1}></img>  
                <img src={icon2}></img>
                
            </div>
            <div> 
                <img src={icon3}></img>
                <img src={iconaudio}></img> 
                 
            </div>
            <div>
                <img src={icon5}></img>
                <img src={icon6}></img>
            </div>
            <div>
                <img src={icon7}></img>
                <img src={icon8}></img>
            </div>
            <div> 
                <img src={icon9}></img>  
                <img src={icon10}></img>
            </div>
            <div>
                <img src={icon11}></img>
                <img src={iconaudio}></img>
            </div>
            <div>
                <img src={iconaudio}></img>
            </div>
            <div>
                
            </div>
            <div>   </div>
            <div>
            <img src={deny}></img>
                <img src={checked}></img>   </div>
            <div>  </div>
            <div>  
            
            </div>
            <div>   </div>
            <div>   </div>
            <div>  </div>
            <div>  </div>
            <div>  </div>
            <div>  </div>
            <div>
               
            </div>
            <div>
                
            </div> 

        </div>
        
    );
};
export default Topbar;