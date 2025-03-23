import React from 'react';
import AutoImageCarousel from '../components/AutoImageCarousel';
import google from '../assets/google.png';

const FarmerLanding = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Section */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url('https://media-hosting.imagekit.io//b598f16a1b264422/Artboard%201%20(1).jpg?Expires=1837296165&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=F~gIblVPy20nYvt4A--ugn9Wv21I1nh8k3zQCaePmNiUDgEa15IzTOx4hCeVYigQMXIfxzTemZvAirjdr8BXU88LFR3D28ZS-jxQ-mzWHSAwEvTULGTfDcrkF0VEUkUqoEg3okZ9tPdOViRE1t0E2xCwfWz1AR9JnwPE~dGnAIU7b9jBAsG4l~zaVuK1SLtf6G02b6FTfnFWSMvjIaYHdg6Ym~C3Gtx8SAvA3fK00P50FJM0cxah4NqzyM3w6Vtto1QsoH1ue0ejzASB8Hh7qXVbB~s8Zn-9trJUUVsEQg95EHqxpUfN5Ou~gwsv25N1lEFrCiL1GfORKlU6x2IH~w__')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center top-100 right-180">
                    <AutoImageCarousel />
                </div>
            </div>

           
            <div className="relative ml-325 mt-54 hover:shadow-2xl w-fit rounded-3xl hover:scale-95 duration-300 cursor-pointer">
                <img src={google} alt="Google" className="h-auto" /> 
            </div>
        </div>
    );
};

export default FarmerLanding;