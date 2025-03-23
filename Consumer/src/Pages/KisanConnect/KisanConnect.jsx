import React from 'react'
import FarmerBanner from '../../assets/FarmerBanner.jpg'
import farmerDetail1 from '../../assets/farmerDetail1.jpg'
import farmerDetail2 from '../../assets/farmerDetail2.jpg'
import farmerDetail3 from '../../assets/farmerDetail3.jpg'
import farmerDetail4 from '../../assets/farmerDetail4.jpg'
import farmerDetail5 from '../../assets/farmerDetail5.jpg'
import farmerDetail6 from '../../assets/farmerDetail6.jpg'
import { Link } from "react-router-dom";
import NavbarMarket from '../Header/NavbarMarket';

    const FarmerDetail = [
        { id: 0, photo: farmerDetail1 },
        { id: 1, photo: farmerDetail2 },
        { id: 2, photo: farmerDetail3 },
        { id: 3, photo: farmerDetail4 },
        { id: 4, photo: farmerDetail5 },
        { id: 5, photo: farmerDetail6 }
    ];


const KisanConnect = () => {
    return (
        <>
            <NavbarMarket />
            <div className='container mx-auto mt-15'>

                <div className='flex justify-center'>
                    <img src={FarmerBanner} alt="" className='rounded-2xl' />
                </div>
                <div className='flex justify-center gap-3 mt-5 flex-wrap mx-20'>
                    {FarmerDetail.map((item) => (
                        <Link to={`/shop/kisan/detail/${item.id}`} key={item.photo}>
                            <img src={item.photo} alt="" className='rounded-2xl hover:scale-110 duration-300 hover:shadow-xl cursor-pointer ' />
                        </Link>
                    ))}

                </div>
            </div>
        </>
    )
}

export default KisanConnect