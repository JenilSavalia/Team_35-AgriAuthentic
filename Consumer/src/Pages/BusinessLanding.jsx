import React, { useState } from 'react'
import LandingTower1 from '../assets/LandingTower1.png'
import Unique from '../assets/Unique.png'
import FarmerButtton from '../assets/Farmer Buttton.png'
import shopnowbutton from '../assets/shop now button.png'
import FarmerOffer from '../assets/FarmerOffer.png'
import consumerOffer from '../assets/consumerOffer.png'
import Levels from '../assets/Levels.png'
import NavbarBusiness from './Header/NavbarBusiness'
import { Link } from "react-router-dom";
import { UserPlus, Cpu, ShieldCheck, Award, ShoppingBag } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpg'
import step4 from '../assets/step4.jpg'
import step5 from '../assets/step5.jpg'

const steps = [
    {
        icon: <UserPlus className="h-8 w-8 text-white" />,
        title: 'Sign Up',
        description: 'Create your farmer profile on AgriAuthentic.',
        image : step1
    },
    {
        icon: <Cpu className="h-8 w-8 text-white" />,
        title: 'Install IoT Sensors',
        description: 'Deploy IoT sensors on your farm to monitor soil health and crop conditions.',
        image : step2
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-white" />,
        title: 'AI Verification',
        description: 'Our AI system verifies your farming practices in real-time.',
        image : step3
    },
    {
        icon: <Award className="h-8 w-8 text-white" />,
        title: 'Get Certified',
        description: 'Earn certification badges and access premium markets.',
        image : step4
    },
    {
        icon: <ShoppingBag className="h-8 w-8 text-white" />,
        title: 'Sell Directly',
        description: 'List your products on our platform and connect with conscious consumers.',
        image : step5
    }
];

const faqs = [
    {
        question: 'How much does it cost to join AgriAuthentic?',
        answer: 'Signing up is free! We offer affordable plans with advanced features, such as premium market access and additional IoT tools.',
    },
    {
        question: 'Do I need technical skills to use IoT sensors?',
        answer: 'No technical skills are required! Our IoT sensors are easy to install, and our platform is designed to be user-friendly. We also provide support to help you get started.',
    },
    {
        question: 'How long does the verification process take?',
        answer: 'The verification process has three levels: Level 1 (20 days for initial verification), Level 2 (2 months for full AI verification), and Level 3 (4 months for long-term certification). You can start selling after Level 1.',
    },
    {
        question: 'What types of farms can join AgriAuthentic?',
        answer: 'We welcome all types of natural and organic farms, from small family farms to larger operations. If you’re transitioning to organic practices, we can guide you through the process.',
    },
    {
        question: 'How does AgriAuthentic ensure the authenticity of my produce?',
        answer: 'We use AI-driven verification, IoT sensors, and optional lab testing to ensure your farming practices are authentic. This builds trust with consumers and buyers.',
    },
    {
        question: 'What markets can I access through AgriAuthentic?',
        answer: 'Depending on your certification level, you can access small-scale consumers (Level 1), big retailers (Level 2), and export companies (Level 3).',
    },
    {
        question: 'What if my lab test results are negative?',
        answer: 'If your lab results are unfavorable, we’ll guide you on how to improve your farming practices. You can retest your products before listing them on the platform.',
    },
    {
        question: 'Is AgriAuthentic available in my region?',
        answer: 'AgriAuthentic is designed to work in remote and rural areas. As long as you have basic internet connectivity (via Wi-Fi, 4G, or Ethernet), you can use our platform. Contact us to check availability in your region.',
    },
    {
        question: 'What kind of support does AgriAuthentic provide?',
        answer: 'We offer technical support for IoT sensors and platform usage, training on sustainable farming practices, and market access to premium buyers and retailers.',
    },
];


const BusinessLanding = () => {

    const [openIndex, setOpenIndex] = useState(null);
    return (
        <>
            <NavbarBusiness />
            <div className='relative'>
                <img src={LandingTower1} alt="Landing Tower" className='' />
                <Link to="">
                    <img src={FarmerButtton} alt="Farmer Button" className='absolute right-89 top-76 scale-110 mix-blend-mode: plus-darker hover:scale-125 duration-150 cursor-pointer' />
                </Link>
                <Link to="/market">
                    <img src={shopnowbutton} alt="Farmer Button" className='absolute right-89 top-90 scale-110 mix-blend-mode: plus-darker hover:scale-125 duration-150 cursor-pointer' />
                </Link>
                <img src={Unique} alt="Farmer Button" className='absolute right-82 top-127 scale-110 mix-blend-mode: plus-darker hover:scale-105 duration-150 cursor-pointer' />
            </div>

            <div className='p-20 flex '>
                <div className='m-3'>
                    <img src={FarmerOffer} alt="" className='rounded-2xl hover:scale-105 duration-150 hover:shadow-xl cursor-pointer mb-5' width={400} />
                    <img src={consumerOffer} alt="" className='rounded-2xl hover:scale-105 duration-150 hover:shadow-xl cursor-pointer' width={400} />
                </div>

                <div className='bg-gray-50 w-full rounded-3xl flex'>
                    <img src={Levels} alt="" className='duration-150 hover:shadow-xl' />
                </div>

            </div>

            <section className="py-24 bg-gradient-to-b from-white to-green-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="inline-block px-4 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-4">Our Process</span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">How AgriAuthentic Works</h2>
                        <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 transform -translate-y-1/2 hidden lg:block z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="relative group">
                                    {/* Popup that appears on hover */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-30 mb-4">
                                        <div className="relative">
                                            {/* Popup image */}
                                            <img
                                                src={step.image}
                                                alt={`${step.title} illustration`}
                                                className="w-full h-fit object-cover rounded-md mb-3"
                                            />
                                        </div>
                                    </div>

                                    {/* Main card */}
                                    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mb-6 z-10 group-hover:bg-green-700 transition-colors duration-300">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 text-center">{step.description}</p>
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-600 lg:block">
                                            <span className="text-green-800 font-bold ml-2">{index + 1}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
                            Join AgriAuthentic
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    className="w-full bg-white rounded-lg p-6 flex justify-between items-center focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className="h-5 w-5 text-green-600" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-green-600" />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className="bg-white px-6 pb-6 rounded-b-lg">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default BusinessLanding