import React from 'react'
import Navbar from '../Header/Navbar'
import { Link, useParams } from "react-router-dom";
import { Star, Leaf, MapPin, Car as Farm, Sprout } from 'lucide-react';
import NavbarMarket from '../Header/NavbarMarket';
import TopRated from '../../assets/topratedFarmers.jpg'
import { MarketCard } from '../Market/MarketCard';

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
const LimitedKisan = [
    {
        "id": 0,
        "name": "Samir Dombe",
        "totalArea": "10 acres",
        "areaUnderCultivation": "10 acres",
        "cropCycle": "Anjeer (Figs), Palak",
        "agricultureMethod": "Modern and traditional methods",
        "description": "Samir Dombe is the proud owner of 'Pavitarak Farmer Producer Company.' He is a second-generation farm owner with a B.E. degree in Medical. He focuses on cultivating figs and palak, using modern and traditional methods. Samir uses technologies like tractors, HTP pumps, and brush cutters to enhance productivity. He prioritizes organic seeds and fine irrigation methods, promoting sustainable farming practices and minimizing the farm's ecological footprint.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20230602115352Farmer%20Image.jpg?tr=f-webp"
    },
    {
        "id": 1,
        "name": "Wale Kiran Arjun",
        "totalArea": "5 acres",
        "areaUnderCultivation": "5 acres",
        "cropCycle": "Tomato, Onion and Cabbage",
        "agricultureMethod": "Modern and traditional methods",
        "description": "Wale Kiran Arjun is an experienced farmer who has been cultivating onions and tomatoes for about 10 years. He faces natural challenges but overcomes them with family support. His family, including his wife and children, actively participates in farming, making it a collaborative effort.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20230531133339Farmer%20Image%2022_5.jpg?tr=f-webp"
    },
    {
        "id": 2,
        "name": "Santosh Shivaji Gadakh",
        "totalArea": "4 acres",
        "areaUnderCultivation": "4 acres",
        "cropCycle": "Cauliflower, Sugarcane, Onions and Cabbage",
        "agricultureMethod": "Modern and traditional methods",
        "description": "Santosh Shivaji Gadakh is a first-generation farmer who started in 2009. He initially grew cauliflower and has since improved his farming practices. He uses tractors and organic fertilizers to maintain soil fertility and ensure crop security.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20230602114657Farmer%20Image.jpg?tr=f-webp"
    },
    {
        "id": 3,
        "name": "Satish Chandrabhan Ikhe",
        "totalArea": "3 acres",
        "areaUnderCultivation": "3 acres",
        "cropCycle": "Lemongrass and Colocasia leaves (Alu cha Paan)",
        "agricultureMethod": "Modern and traditional methods",
        "description": "Satish Chandrabhan Ikhe has been farming since 1980, continuing his family's legacy. He grows a variety of crops and has transitioned to modern technology to address challenges like water shortages. He uses organic fertilizers and practices to maintain soil fertility and environmental sustainability.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20230602115814Farmer%20Image.jpg?tr=f-webp"
    },
    {
        "id": 4,
        "name": "Abhijeet Shankar Tajne",
        "totalArea": "Dummy Value",
        "areaUnderCultivation": "Dummy Value",
        "cropCycle": "Dummy Value",
        "agricultureMethod": "Dummy Value",
        "description": "Abhijeet Shankar Tajne is a farmer from Pune, Junnar. Over the years, his land has undergone changes due to proper care and cultivation, significantly improving productivity and quality. He spends the off-season performing maintenance tasks and planning for upcoming seasons. Abhijeet values the expertise of agricultural advisors and seeks their guidance to improve his farming practices. Farming is a way of life for him, bringing immense joy and satisfaction as he contributes to the agricultural sector and ensures a sustainable future for farming.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20240826173015mmmm.jpg?tr=f-webp"
    },
    {
        "id": 5,
        "name": "Suraj Kailas Mulay",
        "totalArea": "1 acre",
        "areaUnderCultivation": "1 acre",
        "cropCycle": "Corn, Palak and Sweet Corn",
        "agricultureMethod": "Modern and traditional methods",
        "description": "Suraj Kailas Mulay is a 26-year-old farmer who started farming four years ago. He focuses on corn and has adopted modern irrigation methods like drip irrigation to conserve water and improve crop health. He uses organic dung and natural fertilizers to maintain soil fertility.",
        "dummyImageLink": "https://ik.imagekit.io/44y3v51cp/kisankonnect/Images/KisanCommunityImage/20230531140505Farmer%20Image.jpg?tr=f-webp"
    },

]

const KisanDetail = () => {

    const { kisanID } = useParams()

    return (
        <>
            <NavbarMarket />

            <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex flex-col items-center justify-center p-6 ">
                <div className=''>
                    <img src={TopRated} alt="" className='rounded-2xl' />
                </div>
                <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden relative mt-2">

                    <div className="absolute top-0 left-0 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1587334207407-deb137a955ba?w=150')] opacity-20 rounded-br-full"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1582515073490-39981397c445?w=150')] opacity-20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1601976245669-0f51d0dca13c?w=150')] opacity-20 rounded-tr-full"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=150')] opacity-20 rounded-tl-full"></div>

                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">

                            <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                                <img
                                    src={LimitedKisan[kisanID].dummyImageLink}
                                    alt="Farmer"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <h1 className="text-3xl font-bold text-green-700">{LimitedKisan[kisanID].name}</h1>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                                        <Leaf className="w-4 h-4" />
                                        Level 2 Certification
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-yellow-500 font-medium">Top Rated Farmer Of The Week</span>
                                    <div className="flex">
                                        {[1, 2, 3, 4].map((star) => (
                                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-green-600" />
                                        <span>Total Area: <strong>{LimitedKisan[kisanID].totalArea}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Farm className="w-5 h-5 text-green-600" />
                                        <span>Area Under Cultivation: <strong>{LimitedKisan[kisanID].areaUnderCultivation}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sprout className="w-5 h-5 text-green-600" />
                                        <span>Crop Cycle: <strong>{LimitedKisan[kisanID].cropCycle}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Leaf className="w-5 h-5 text-green-600" />
                                        <span>Agriculture Method: <strong>{LimitedKisan[kisanID].agricultureMethod}</strong></span>
                                    </div>
                                </div>


                                <p className="text-gray-600 leading-relaxed">
                                    Hello, I'm {LimitedKisan[kisanID].name}, a farmer with several years of experience. My family has a long history of farming,
                                    and I'm proud to carry on this tradition. I started farming about 10 years ago and have been actively involved in
                                    agricultural practices ever since. When I first started farming, I focused on cultivating onions and tomatoes. It
                                    took me about a year to learn the ins and outs of these crops and effectively harvest them. Challenges are inevitable
                                    in farming, and I have faced some natural issues along the way. However, with perseverance and the support of my family,
                                    I overcame these challenges.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>

                            <div className='flex gap-8  justify-center scale-90 max-w-4xl flex-wrap'>
                                {
                                    limitedProducts?.map((product) => (
                                        <MarketCard data={product} key={product?.id?.$oid} />
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default KisanDetail


