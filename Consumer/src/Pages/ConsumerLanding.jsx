import React from 'react'
import Banner1 from '../assets/AgriAuthBanner1.jpg'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
import topratedFarmers from '../assets/topratedFarmers.jpg'
import farmerDetail1 from '../assets/farmerDetail1.jpg'
import farmerDetail2 from '../assets/farmerDetail2.jpg'
import farmerDetail3 from '../assets/farmerDetail3.jpg'
import farmerDetail4 from '../assets/farmerDetail4.jpg'
import farmerDetail5 from '../assets/farmerDetail5.jpg'
import farmerDetail6 from '../assets/farmerDetail6.jpg'
import { Link } from 'react-router-dom';
import { MarketCard } from './Market/MarketCard'
import Navbar from './Header/Navbar'
import toast, { Toaster } from 'react-hot-toast';

const ConsumerLanding = () => {

    const categories = [
        { id: 1, name: "All Fruits & Vegetables", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1719920085745-3" },
        { id: 2, name: "Fresh Fruits", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-8" },
        { id: 3, name: "Mangoes & Melons", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1712577388325-3" },
        { id: 4, name: "Seasonal", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1725615169295-3   " },
        { id: 5, name: "Exotics", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/278_1678705041060.png" },
        { id: 6, name: "Freshly Cut & Sprouts", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/395_1668582176947.png" },
        { id: 7, name: "Frozen Veg", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/157_1643443974388.png" },
        { id: 8, name: "Leafies & Herbs", imgLink: "https://cdn.grofers.com/66acfb51-c5fe-4718-a200-61efaf773556.png" },
        { id: 9, name: "Flowers & Leaves", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/1452_1617891490134.png" },
        { id: 10, name: "Combo & Recipes", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/928_1658840270707.png" },
        { id: 11, name: "Apples & Pears", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1725615169295-3" },
        { id: 12, name: "Fresh Vegetables", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702463308432-3" },
        { id: 8, name: "Leafies & Herbs", imgLink: "https://cdn.grofers.com/66acfb51-c5fe-4718-a200-61efaf773556.png" },
        { id: 9, name: "Flowers & Leaves", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/1452_1617891490134.png" },
        { id: 10, name: "Combo & Recipes", imgLink: "https://cdn.grofers.com/app/images/category/cms_images/icon/928_1658840270707.png" },
    ];


    const limitedProducts = [
        {
            "_id":
                "67db19cbd5c82072684fdf3a",

            "productName": "Peas",
            "productDescription": "Among include shake bad him.",
            "productPrice": 182,
            "stock": 295,
            "harvestLocation": "East Donaldfurt",
            "harvestDate": "2026-05-30",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9193b229-3ca3-4cce-9156-920f3e9761a8.jpg?ts=1711017376",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf3b",

            "productName": "Cucumber",
            "productDescription": "Act become character read.",
            "productPrice": 252,
            "stock": 277,
            "harvestLocation": "Charlesside",
            "harvestDate": "2025-10-11",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4a7cbdcc-d74d-403f-a0cb-b130572ad296.jpg?ts=1711022176",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf3c",

            "productName": "Cauliflower",
            "productDescription": "Billion large son her goal.",
            "productPrice": 421,
            "stock": 219,
            "harvestLocation": "South Brianna",
            "harvestDate": "2025-11-20",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dd62b379-9f84-4553-b8e6-2d18651634de.jpg?ts=1742115321",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf3d",

            "productName": "Banana",
            "productDescription": "Large imagine rich sound during its about.",
            "productPrice": 96,
            "stock": 927,
            "harvestLocation": "Harpermouth",
            "harvestDate": "2027-03-10",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4e17db76-2404-49d6-8c0e-9e0b48552551.jpg?ts=1740114928",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf3e",

            "productName": "Vatana",
            "productDescription": "Yard stand responsibility start serve.",
            "productPrice": 298,
            "stock": 704,
            "harvestLocation": "Port Jessica",
            "harvestDate": "2025-12-06",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/259fecd2-ccc0-434f-938f-61c10ed44b3d.jpg?ts=1711017375",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf42",

            "productName": "Potato",
            "productDescription": "Opportunity whatever generation.",
            "productPrice": 348,
            "stock": 866,
            "harvestLocation": "South Barbaraland",
            "harvestDate": "2026-05-29",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/55c1e60d-211e-4d7d-b60e-2890db4e5f7b.jpg?ts=1737027017",
            "__v": 0
        },
        {
            "_id":
                "67db19cbd5c82072684fdf43",

            "productName": "Beetroot",
            "productDescription": "Station degree yes center assume.",
            "productPrice": 72,
            "stock": 683,
            "harvestLocation": "Lake Pamela",
            "harvestDate": "2026-01-12",
            "tags": [
                "All Fruits & Vegetables"
            ],
            "imageLink": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a68103f6-9518-454b-aa1a-9d068ac33ffc.jpg?ts=1711472827",
            "__v": 0
        }

    ]

    const FarmerDetail = [
        { id: 0, photo: farmerDetail1 },
        { id: 1, photo: farmerDetail2 },
        { id: 2, photo: farmerDetail3 },
        { id: 3, photo: farmerDetail4 },
        { id: 4, photo: farmerDetail5 },
        { id: 5, photo: farmerDetail6 }
    ];


    return (

        <>
            <Navbar />
            <Toaster />
            <div
                style={{
                    backgroundImage: `url('https://i.ibb.co/yFq8nWk7/light-purple-blurred-backdrop-vector.jpg')`, // Replace with your image URL
                    backgroundSize: 'cover', // Ensure the image covers the entire background
                    backgroundPosition: 'center', // Center the image
                    backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                    minHeight: '100vh', // Ensure the background covers the entire page
                    padding: '20px 0', // Add some padding
                }}>
                <div className="container h-fit mx-auto pt-6">
                    {/* Main Box */}
                    <Link to="/shop/market">
                        <div className="bg-amber-100 w-[1100px] rounded-xl h-[180px] m-auto">
                            {/* <h1 className="text-2xl font-bold">Main Box</h1> */}
                            <img src={Banner1} alt="" className='rounded-xl' />
                        </div>
                    </Link>

                    {/* Three Boxes Below */}
                    <div className="flex justify-center gap-4 mt-6">
                        {/* Box 1 */}
                        <Link to="/shop/market">
                            <div className="bg-blue-100 w-[350px] h-[190px] rounded-xl">
                                <img src="https://cdn.zeptonow.com/production/tr:w-1216,ar-1216-760,pr-true,f-auto,q-80/inventory/banner/0bb63c43-419d-41bf-9582-a7fea4356fa4.png" alt="" />
                            </div>
                        </Link>

                        {/* Box 2 */}
                        <Link to="/shop/market">
                            <div className="bg-green-100 w-[350px] h-[190px] rounded-xl">
                                <img src={box2} alt="" />
                            </div>
                        </Link>

                        {/* Box 3 */}

                        <a href='#farmer'>
                            <div className="bg-red-100 w-[350px] h-[190px] rounded-xl">
                                <img src={box3} alt="" />
                            </div>
                        </a>
                    </div>

                    <div className='pt-2 scale-90 mt-16'>

                        <h1 className='font-semibold text-2xl'>Categories</h1>

                        <div className="h-full pt-2 grid grid-cols-6 w-fit gap-x-1 mt-2">

                            {categories.map((item) => (
                                <div
                                    key={item.id}
                                    className={`py-4 px-2 hover:bg-[#EBFFEF] transition duration-300 flex items-center gap-3 cursor-pointer border-1 rounded-2xl border-gray-100 bg-gray-50 my-1 hover:border-green-300`}
                                    onClick={() => (window.location.href = "/shop/market")}
                                >
                                    <div className="bg-gray-100 rounded-full w-9 h-9 text-center">
                                        <img src={item.imgLink} alt={item.name} className="hover:scale-110 transition duration-300" />
                                    </div>
                                    <div className="font-medium">{item.name}</div>
                                </div>
                            ))}
                        </div>

                    </div>


                    <h1 className='mt-12 font-semibold text-xl pl-19'>All Fruits & Vegetables</h1>

                    <div className='flex gap-8 justify-center mt-5'>
                        <Link to="/shop/market">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-480,q-80" alt="" width={250} className='hover:shadow-lg transition-shadow rounded-b-lg' />
                        </Link>

                        <Link to="/shop/market">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-fruits_480_250923.jpg?tr=w-480,q-80" alt="" width={250} className='hover:shadow-lg transition-shadow rounded-b-lg' />
                        </Link>

                        <Link to="/shop/market">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_cuts-&-exotics_480_250923.jpg?tr=w-480,q-80" alt="" width={250} className='hover:shadow-lg transition-shadow rounded-b-lg' />
                        </Link>

                        <Link to="/shop/market">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_herbs-&-seasoning_480_250923.jpg?tr=w-480,q-80" alt="" width={250} className='hover:shadow-lg transition-shadow rounded-b-lg'
                            />
                        </Link>

                        <Link to="/shop/market">
                            <img src="https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-480,q-80" alt="" width={250} className='hover:shadow-lg transition-shadow rounded-b-lg' />
                        </Link>
                    </div>


                    <img src="https://cdn.zeptonow.com/production/tr:w-1280,ar-1440-88,pr-true,f-auto,q-80/inventory/banner/b11ca9ae-7168-4564-aeb2-2e59c1d49cb9.png" alt="" className='mt-16 pl-25' />

                    <h1 className='mt-8 font-semibold text-xl pl-16'>All Fruits & Vegetables</h1>

                    <div className='flex gap-8  justify-center scale-90'>
                        {
                            limitedProducts?.map((product) => (
                                <MarketCard data={product} key={product?.id?.$oid} />
                            ))
                        }
                    </div>

                    <div className='bg-[#f5ffea6e] p-3 mt-5 rounded-2xl' id='farmer'>
                        <img src={topratedFarmers} alt="" className='rounded-3xl m-auto mt-5' />
                        <div className='grid grid-cols-3 justify-items-center gap-2 mx-auto mt-6 w-fit'>
                            {FarmerDetail.map((item) => (
                                <Link to={`/shop/kisan/detail/${item.id}`} key={item.photo}>
                                    <img src={item.photo} alt="" className='rounded-2xl hover:scale-110 duration-300 hover:shadow-xl cursor-pointer ' />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
                {/* <Footer /> */}
            </div>

        </>
    )


}

export default ConsumerLanding