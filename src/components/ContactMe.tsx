import React from 'react';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

interface Props {
    email: string;
    phone?: string;
}

const ContactMe = ({ email, phone }: Props) => {
    const handleEmailOrPhoneClick = (link: string) => () => {
        const protocol = link.startsWith('tel:') ? '' : 'mailto:';
        const href = `${protocol}${link}`;
        window.open(href, 'emailOrPhonePopup', 'width=600,height=400,resizable=yes');
    };

    return (
        <div className='flex flex-col sm:col-span-2 md:col-span-3 bg-purple-900/40 rounded-3xl p-4'>
            <h1 className='text-xl text-center sm:text-3xl md:text-4xl font-semibold p'>Contact Me</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-center mt-2 sm:mt-4'>
                <div className='flex flex-col items-center'>
                    {email && (
                        <>
                            <ForwardToInboxIcon onClick={handleEmailOrPhoneClick(email)} style={{ cursor: "pointer" }} className="h-8 w-8" />
                            <div onClick={handleEmailOrPhoneClick(email)} style={{ cursor: "pointer" }} className='text-sm sm:text-left mt-2 text-slate-300'>
                                {email}
                            </div>
                        </>
                    )}</div>

                <div className='flex flex-col items-center'>
                    <a href='/simon_cv.pdf' target='_blank' rel='noopener noreferrer' className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded'>
                        Download CV
                    </a>
                </div>

                <div className='flex flex-col items-center'>
                    {phone && (
                        <>
                            <PhoneCallbackIcon onClick={handleEmailOrPhoneClick(`tel:${phone}`)} style={{ cursor: "pointer" }} className="h-8 w-8" />
                            <div onClick={handleEmailOrPhoneClick(`tel:${phone}`)} style={{ cursor: "pointer" }} className='text-sm mt-2 text-slate-300'>
                                {phone}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
