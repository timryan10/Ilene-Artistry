import './index.css';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import Request from './Request';
import { Link } from 'react-router-dom';
import profile_pic from "./imgs/pp_lene.png"

function Header() {

    let [isOpen, setIsOpen] = useState(false)

    return(
        <div id='Header'>
            <div>
               <Link to="/" id='logo'> <img src={profile_pic} alt='Logo' height="50em" width="50em" id='profile_pic'/> <h1>Ilene's Artistry</h1> </Link> 
            </div>
            <div>
                <Link to="/portfolio" className='portfolio'><h3>Portfolio</h3></Link>
            </div>
            <div>
                <h3 className='makeARequest' onClick={() => setIsOpen(true)}>Make A Request</h3> 
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog">
                    <div className='modal'>
                        <DialogPanel className="panel">
                            <DialogTitle className="title">Make A Request</DialogTitle>
                            <Description className="modalDescrip">If you would like a personalized drawing, please put in the requested information in the boxes below. Please add images that you would like to use for reference as well.</Description>
                            <div>
                                <Request/>
                            </div>
                            <div className='buttons'>
                                <div className='cancel'>
                                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                                </div>
                                <div className="submit">
                                <button onClick={() => setIsOpen(false)}>Submit</button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default Header