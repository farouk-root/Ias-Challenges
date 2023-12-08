import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {CiBookmark, CiBoxList, CiGift, CiSearch, CiShoppingCart, CiUser} from "react-icons/ci";
import {FaHome} from "react-icons/fa";
import {IoIosStats} from "react-icons/io";


function App() {

  return (
    <div className="CreateNewCampaign bg-stone-50">
    <div className="EcommercePlatform2024AllRightReserved left-[642px] top-[1328px] absolute text-center text-gray-400 text-sm font-normal font-['Inter'] leading-snug">eCommerce Platform @ 2024. All right reserved</div>
    <div className="Form w-96 h-96 left-[192px] top-[100px] absolute bg-white rounded-xl shadow">
        <div className="Frame439 w-96 h-32 left-[32px] top-[40px] absolute">
            <div className="Frame402 w-72 h-12 left-0 top-[84px] absolute rounded border border-slate-300" />
            <div className="Frame403 w-56 h-12 left-[336px] top-[84px] absolute rounded border border-slate-300" />
            <div className="Frame404 w-64 h-12 left-[880px] top-[84px] absolute rounded border border-slate-300" />
            <div className="ProviderName left-0 top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Provider name</div>
            <div className="Field left-[336px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Field</div>
            <div className="TaxCode left-[880px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Tax Code</div>
            <div className="Frame406 left-0 top-0 absolute justify-start items-center gap-2 inline-flex">
                <div className="Frame405 w-6 h-6 relative">
                    <div className="Ellipse10 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                    <div className=" left-[9px] top-[1px] absolute text-center text-white text-sm font-medium font-['Inter'] leading-snug">1</div>
                </div>
                <div className="ProviderInfo text-blue-950 text-xl font-medium font-['Inter'] leading-loose">Provider info</div>
            </div>
            <div className="Frame408 w-56 h-12 left-[608px] top-[84px] absolute rounded border border-slate-300" />
            <div className="PhoneNumber left-[608px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Phone Number</div>
        </div>
        <div className="Frame438 w-96 h-32 left-[32px] top-[212px] absolute">
            <div className="Frame407 w-64 h-12 left-0 top-[84px] absolute rounded border border-slate-300" />
            <div className="Region left-0 top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Region</div>
            <div className="Frame411 w-64 h-12 left-[888px] top-[84px] absolute rounded border border-slate-300" />
            <div className="PostalCode left-[888px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">postal code</div>
            <div className="Frame412 w-64 h-12 left-[296px] top-[84px] absolute rounded border border-slate-300" />
            <div className="City left-[296px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">City</div>
            <div className="Frame413 w-64 h-12 left-[592px] top-[84px] absolute rounded border border-slate-300" />
            <div className="StreetName left-[592px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Street name</div>
            <div className="Frame410 left-0 top-0 absolute justify-start items-center gap-2 inline-flex">
                <div className="Frame405 w-6 h-6 relative">
                    <div className="Ellipse10 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                    <div className=" left-[8px] top-[1px] absolute text-center text-white text-sm font-medium font-['Inter'] leading-snug">2</div>
                </div>
                <div className="Location text-blue-950 text-xl font-medium font-['Inter'] leading-loose">Location</div>
            </div>
        </div>
        <div className="Frame440 w-96 h-28 left-[32px] top-[412px] absolute">
            <div className="Frame414 pl-4 pr-6 py-3 left-0 top-[84px] absolute rounded border border-slate-300 justify-start items-center gap-44 inline-flex">
                <div className="00 text-blue-950 text-sm font-normal font-['Inter'] leading-snug">00:00</div>
                <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
            </div>
            <div className="Frame419 pl-4 pr-6 py-3 left-[296px] top-[84px] absolute rounded border border-slate-300 justify-start items-center gap-40 inline-flex">
                <div className="Today text-blue-950 text-sm font-normal font-['Inter'] leading-snug">Today</div>
                <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
            </div>
            <div className="Time left-0 top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Time</div>
            <div className="Date left-[296px] top-[54px] absolute text-gray-400 text-sm font-medium font-['Inter'] leading-snug">Date</div>
            <div className="Frame418 left-0 top-0 absolute justify-start items-center gap-2 inline-flex">
                <div className="Frame405 w-6 h-6 relative">
                    <div className="Ellipse10 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                    <div className=" left-[7px] top-[1px] absolute text-center text-white text-sm font-medium font-['Inter'] leading-snug">3</div>
                </div>
                <div className="PreferredPickUpTime text-blue-950 text-xl font-medium font-['Inter'] leading-loose">Preferred Pick-up Time</div>
            </div>
        </div>
        <div className="Line6 w-96 h-px left-[32px] top-[1086px] absolute border border-slate-300"></div>
        <div className="Frame432 w-96 h-96 left-[25px] top-[604px] absolute">
            <div className="Frame421 left-[7px] top-0 absolute justify-start items-center gap-2 inline-flex">
                <div className="Frame405 w-6 h-6 relative">
                    <div className="Ellipse10 w-6 h-6 left-0 top-0 absolute bg-green-600 rounded-full" />
                    <div className=" left-[7px] top-[1px] absolute text-center text-white text-sm font-medium font-['Inter'] leading-snug">4</div>
                </div>
                <div className="Product text-blue-950 text-xl font-medium font-['Inter'] leading-loose">Product</div>
            </div>
            <div className="Line6 w-96 h-px left-[7px] top-[74px] absolute origin-top-left rotate-90 opacity-25 border-2 border-green-600"></div>
            <div className="Frame427 w-96 h-20 left-0 top-[56px] absolute">
                <div className=" left-[39px] top-[15px] absolute text-green-600 text-sm font-semibold font-['Inter'] leading-snug">1</div>
                <div className="Ellipse11 w-3.5 h-3.5 left-0 top-[18px] absolute bg-green-600 rounded-full border-2 border-white" />
                <div className="Frame423 px-4 py-3 left-[107px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-20 inline-flex">
                    <div className="Potatoes text-blue-950 text-sm font-normal font-['Inter'] leading-snug">Potatoes</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame424 px-4 py-3 left-[310px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-4 inline-flex">
                    <div className=" text-blue-950 text-sm font-normal font-['Inter'] leading-snug">60</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame425 w-20 h-12 left-[405px] top-0 absolute rounded border border-slate-300">
                    <div className="100 left-[25px] top-[13px] absolute text-blue-950 text-sm font-normal font-['Inter'] leading-snug">$100</div>
                    <div className="ChevronDown w-4 h-4 left-[51px] top-[16px] absolute" />
                </div>
                <div className="XCircle w-7 h-7 left-[520px] top-[10px] absolute" />
            </div>
            <div className="Frame428 w-96 h-20 left-0 top-[176px] absolute">
                <div className=" left-[39px] top-[14px] absolute text-green-600 text-sm font-semibold font-['Inter'] leading-snug">2</div>
                <div className="Ellipse11 w-3.5 h-3.5 left-0 top-[17px] absolute bg-green-600 rounded-full border-2 border-white" />
                <div className="Frame423 px-4 py-3 left-[107px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-24 inline-flex">
                    <div className="Pepper text-blue-950 text-sm font-normal font-['Inter'] leading-snug">Pepper</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame424 px-4 py-3 left-[310px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-4 inline-flex">
                    <div className=" text-blue-950 text-sm font-normal font-['Inter'] leading-snug">48</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame425 w-20 h-12 left-[405px] top-0 absolute rounded border border-slate-300">
                    <div className="60 left-[32px] top-[13px] absolute text-blue-950 text-sm font-normal font-['Inter'] leading-snug">$60</div>
                    <div className="ChevronDown w-4 h-4 left-[51px] top-[16px] absolute" />
                </div>
                <div className="XCircle w-7 h-7 left-[520px] top-[10px] absolute" />
            </div>
            <div className="Frame429 w-96 h-20 left-0 top-[296px] absolute">
                <div className=" left-[39px] top-[13px] absolute text-green-600 text-sm font-semibold font-['Inter'] leading-snug">3</div>
                <div className="Ellipse11 w-3.5 h-3.5 left-0 top-[16px] absolute bg-green-600 rounded-full border-2 border-white" />
                <div className="Frame423 px-4 py-3 left-[107px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-20 inline-flex">
                    <div className="Tomatoes text-blue-950 text-sm font-normal font-['Inter'] leading-snug">Tomatoes</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame424 px-4 py-3 left-[310px] top-0 absolute rounded border border-slate-300 justify-center items-center gap-2.5 inline-flex">
                    <div className=" text-blue-950 text-sm font-normal font-['Inter'] leading-snug">100</div>
                    <div className="ChevronDown w-4 h-4 relative flex-col justify-start items-start flex" />
                </div>
                <div className="Frame425 w-20 h-12 left-[405px] top-0 absolute rounded border border-slate-300">
                    <div className="100 left-[25px] top-[13px] absolute text-blue-950 text-sm font-normal font-['Inter'] leading-snug">$100</div>
                    <div className="ChevronDown w-4 h-4 left-[51px] top-[16px] absolute" />
                </div>
                <div className="XCircle w-7 h-7 left-[520px] top-[10px] absolute" />
            </div>
            <div className="Frame430 left-0 top-[420px] absolute justify-end items-center gap-6 inline-flex">
                <div className="Ellipse11 w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-white" />
                <div className="Frame431 self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="Plus w-4 h-4 relative" />
                    <div className="AddProduct text-blue-950 text-sm font-semibold font-['Inter'] leading-snug">Add Product</div>
                </div>
            </div>
        </div>
        <div className="Frame30 px-4 py-3 left-[1119px] top-[1118px] absolute bg-green-600 rounded justify-start items-start gap-4 inline-flex">
            <div className="Frame398 justify-start items-center gap-2 flex">
                <div className="Save text-white text-sm font-semibold font-['Inter'] leading-snug">Save </div>
            </div>
        </div>
        <div className="Cancel left-[1049px] top-[1130px] absolute text-blue-950 text-sm font-semibold font-['Inter'] leading-snug">Cancel</div>
    </div>
    <div className="BeProvider left-[192px] top-[40px] absolute text-blue-950 text-2xl font-medium font-['Inter'] leading-9">Be Provider</div>
    <div className="LeftSidebar pl-11 pr-12 pt-56 pb-96 left-0 top-0 absolute bg-green-600 flex-col justify-start items-center inline-flex">
        <div className="Frame411 self-stretch flex-col justify-start items-center gap-7 inline-flex">
            <div className="Frame409 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg shadow" />
                <div className="Home w-6 h-6 left-[14px] top-[14px] absolute" >
                  <FaHome className="text-white"/>
                </div>
             </div>
            <div className="Frame410 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="Layout w-6 h-6 left-[14px] top-[14px] absolute" >
                    <CiBoxList className="text-white"/>
                </div>
            </div>
            <div className="Frame412 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="ShoppingBag w-6 h-6 left-[14px] top-[14px] absolute" ><CiShoppingCart className="text-white"/> </div>
            </div>
            <div className="Frame411 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="User w-6 h-6 left-[14px] top-[14px] absolute"
                ><CiUser className="text-white"/> </div>
            </div>
            <div className="Frame413 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="TrendingUp w-6 h-6 left-[14px] top-[14px] absolute" > <IoIosStats className="text-white" /></div>
            </div>
            <div className="Frame414 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="Search w-6 h-6 left-[14px] top-[14px] absolute" ><CiSearch className="text-white" /></div>
            </div>
            <div className="Frame416 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-lime-700 rounded-lg" />
                <div className="Book w-6 h-6 left-[14px] top-[14px] absolute" ><CiBookmark className="text-white"/></div>
            </div>
            <div className="Frame415 w-12 h-12 relative">
                <div className="Rectangle63 w-12 h-12 left-0 top-0 absolute bg-white rounded-lg" />
                <div className="Gift w-6 h-6 left-[14px] top-[14px] absolute" ><CiGift className="text-black"/></div>
            </div>
        </div>
    </div>
    <div className="Esgreen left-[6px] top-[40px] absolute text-white text-3xl font-black font-['Inter'] leading-9">ESGREEN</div>
</div>
  )
}

export default App
