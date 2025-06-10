import './index.css';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

function Header() {

    let [isOpen, setIsOpen] = useState(false)

    return(
        <div id='Header'>
            <div id='logo'>
                <h1>Ilene's Artistry</h1>
            </div>
            <div>
                <h3>Portfolio</h3>
            </div>
            <div>
                <button onClick={() => setIsOpen(true)}>Make A Request</button>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                            <DialogTitle className="font-bold">Make A Request</DialogTitle>
                            <Description>If you would like a personalized drawing, please put in the requested information in the boxes below. Please add images that you would like to use for reference as well.</Description>
                            <div className='flex gap-4'>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
            <div>
                <h3>About The Artist</h3>
            </div>
        </div>
    )
}

export default Header