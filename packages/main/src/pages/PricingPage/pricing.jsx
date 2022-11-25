import React from "react";
import Mark from "../PricingPage/Vector.png";
import  gmark from "../PricingPage/Vector1.png";
import bmark from "../PricingPage/bmark.png";
 
function Pricings(){
    return(
        <>
        <article>
<section className="flex flex-col items-center justify-center">
    <h1 className="font-bold text-3xl  mb-5 mt-10">Pricing</h1>
    <p className="text-gray-500 md:text-sm text-xs px-10  ">Find the perfect plan for you and your team. 
    Upgrade to enable unlimited issues,</p>
    <p className="text-gray-500 md:text-sm text-xs "> enhanced security, and additional features.</p>
</section>
<section className="flex flex-col items-center justify-center px-10 space-y-5 md:flex-row md:items-center md:justify-center mt-10 md:space-x-10">
    <div className="flex flex-col items-center justify-center h-96 space-y-10 border">
        <div className="flex flex-col items-center justify-center "><p className="font-semibold">Free</p>
        <h1 className="font-bold text-1xl ">$0 per user/ month</h1></div>
        <div className="h-0.5 w-52  bg-gray-300"></div>
    <div className="flex flex-col items-start justify-center space-y-5 px-10 text-xs">
       
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} alt="" />
            <p>Access 90-day history</p>
        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} alt=""/>
            <p>1:1 audio and video conversation</p>

        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} />
            <p>Integrations with 5 other apps</p>
        </div>
        </div>
        <button className="border px-8 rounded text-green-700  font-semibold py-3">Get started with Free</button>
    </div>
    <div className="flex flex-col items-center  h-96 space-y-6 border justify-center bg-green-100 ">
        <div className="flex flex-col items-center justify-center "><p>Standard</p>
        <h1 className="font-bold text-1xl ">$15 per user/ month</h1>
        </div>
        <div className="flex flex-row items-center justify-center ">
            <div className="bg-gray-300 h-0.5 w-10"></div>
            <div className="flex flex-row items-center justify-between bg-green-200 space-x-2 px-2 rounded text-sm py-2">
                <button className=" bg-green-800 text-white px-3 py-1 rounded text-xs">Monthly</button>
            <button className="text-xs">Annually</button>
            </div>
            <div className="bg-gray-300 h-0.5 w-10"></div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-5 px-10 text-xs">
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark}alt="" />
            <p>Access 90-day history</p>
        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} alt=""/>
            <p>1:1 audio and video conversation</p>

        </div>
<div className="flex flex-row items-center space-x-2 justify-center ">
<img className="bg-green-500 p-1" src={Mark} alt=""/>
            <p>Organization’s message history</p>

</div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} />
            <p>Integrations with 10 other apps</p>
        </div>
        </div>
        <button className="border px-8 rounded text-white bg-green-700 font-semibold py-3">Get started with Free</button>
    </div>
    <div className="flex flex-col items-center space-y-6 border  h-96 justify-center">
        <div><p>Enterprise</p>
        <h1 className="font-bold text-1xl">$20 per user/ month</h1>
        </div>
        <div className="flex flex-row items-center justify-center">
            <div className="bg-gray-300 h-0.5 w-10"></div>
            <div className="flex flex-row items-center justify-center  bg-green-200 space-x-2 px-2 rounded text-sm py-2">
                <button className=" bg-green-800 text-white px-3 py-1 rounded text-xs">Monthly</button>
            <button>Annually</button>
            </div>
            <div className="bg-gray-300 h-0.5 w-10"></div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-5 px-10 text-xs">
        <div className="flex flex-row items-center justify-center space-x-2 ">
            <img  className="bg-green-500 p-1" src={Mark}alt="" />
            <p>Access 90-day history</p>
        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} alt=""/>
            <p>1:1 audio and video conversation</p>

        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} />
            <p>Organization’s message history</p>
        </div>
        <div className="flex flex-row items-center space-x-2 justify-center ">
            <img className="bg-green-500 p-1" src={Mark} />
            <p>Unlimited integrations </p>
        </div>
        </div>
        <button className="border px-8 rounded  text-white bg-green-700 font-semibold py-3">Get started with Free</button>
    </div>
</section>
</article>
<p className="text-3xl font-semibold mt-20">Compare our prices</p>
<article className=" grid grid-cols-2 px-10 md:flex md:flex-row items-start justify-center md:space-x-20 mt-10 ">

<section className="flex flex-col items-start justify-center text-xs space-y-5  ">
<div className="h-5 w-10"></div>
 <div className="h-5 w-10"><h1 className="text-2xl font-semibold">Usage</h1></div>
        <p>Audio and video clips</p>
        <p>Message and file history</p>
        <p>Workspaces</p>
        <p>Integrations with other apps</p>
        <div className="h-10 w-10">
            <p className=" text-2xl font-semibold">Collaboration</p>
        </div>
        <p className="mt-0">Work with individuals</p>
        <p>Work with other organizations</p>
        <div className="">
            <p className=" text-2xl font-semibold">Security</p>
        </div>
        <p>Two-factor authentication</p>
        <p>SAML-based single sign-on (SSO)</p>
        <p>Data encryption at rest and in transit</p>
        <div className="">
            <p className=" text-2xl font-semibold">Administration</p>
        </div>
        <p>Custom User Groups</p>
        <p>Domain claiming</p>
        <p>Custom Terms of Service</p>
        <div className="">
            <p className=" text-2xl font-semibold">Support</p>
        </div>
        <p>Priority support</p>
        <p>Account and customer success team</p>
    
    </section>
    <section className="flex flex-col items-center justify-center text-xs md:space-y-5 space-y-4 px-4 py-4 ">
    <div className="h-5  text-2xl font-bold">Free</div>
        <div className="h-5 w-10"></div>
    <div className="flex flex-row items-center justify-center space-x-2 "><img className="h-2"  src={gmark} />
        <p>Unlimited</p>
        </div>
        <p>90-day access</p>
       <p>1</p>
       <p>5</p>
       <div className=" md:h-10 h-24 w-10"></div>
       <img className="h-2" src={gmark} alt="" />
       <img className="h-2"  alt="" />
       <div className="md:h-10 h-24w-10"></div>
       <img className="h-2" src={gmark} alt="" />
       <img className="h-2"  alt="" />
       <img className="h-2" src={gmark} alt="" />
       <div className="md:h-10 h-24 w-10"></div>
       <img className="h-2"  alt="" /> 
       <img className="h-2"  alt="" />
       <img className="h-2" alt="" />
       <div className="md:h-10 h-24 w-10"></div>
       <img className="h-2" alt="" />
       <img className="h-2"  alt="" />
       </section>
       <section className=" md:hidden flex flex-col items-start justify-center text-xs space-y-5 ">
<div className="h-5 w-10"></div>
 <div className="h-5 w-10"><h1 className="text-2xl font-semibold">Usage</h1></div>
        <p>Audio and video clips</p>
        <p>Message and file history</p>
        <p>Workspaces</p>
        <p>Integrations with other apps</p>
        <div className="h-10 w-10">
            <p className=" text-2xl font-semibold">Collaboration</p>
        </div>
        <p className="mt-0">Work with individuals</p>
        <p>Work with other organizations</p>
        <div className="">
            <p className=" text-2xl font-semibold">Security</p>
        </div>
        <p>Two-factor authentication</p>
        <p>SAML-based single sign-on (SSO)</p>
        <p>Data encryption at rest and in transit</p>
        <div className="">
            <p className=" text-2xl font-semibold">Administration</p>
        </div>
        <p>Custom User Groups</p>
        <p>Domain claiming</p>
        <p>Custom Terms of Service</p>
        <div className="">
            <p className=" text-2xl font-semibold">Support</p>
        </div>
        <p>Priority support</p>
        <p>Account and customer success team</p>
    
    </section>
       <section className="flex flex-col items-center justify-center text-xs space-y-5 px-4 py-4 bg-green-100 ">
       <div className="h-5  text-2xl font-bold">Standard</div>
       <div className="h-5 w-10"></div>
       <div className="flex flex-row items-center justify-center space-x-2"><img className="h-2" src={gmark} />
        <p>Unlimited</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2" ><img className="h-2" src={gmark} />
        <p>Unlimited</p>
        </div>
        <p>1</p>
        <p>10</p>
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2"  src={gmark} />
        <img className="h-2"  />
        <img className="h-2" src={gmark} />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2"  />
        <img className="h-2" src={gmark} />
        <img className="h-2" />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2"  />
        <img className="h-2" src={gmark} />
       </section>

<section className=" md:hidden flex flex-col items-start justify-center text-xs space-y-5 ">
<div className="h-5 w-10"></div>
 <div className="h-5 w-10"><h1 className="text-2xl font-semibold">Usage</h1></div>
        <p>Audio and video clips</p>
        <p>Message and file history</p>
        <p>Workspaces</p>
        <p>Integrations with other apps</p>
        <div className="h-10 w-10">
            <p className=" text-2xl font-semibold">Collaboration</p>
        </div>
        <p className="mt-0">Work with individuals</p>
        <p>Work with other organizations</p>
        <div className="">
            <p className=" text-2xl font-semibold">Security</p>
        </div>
        <p>Two-factor authentication</p>
        <p>SAML-based single sign-on (SSO)</p>
        <p>Data encryption at rest and in transit</p>
        <div className="">
            <p className=" text-2xl font-semibold">Administration</p>
        </div>
        <p>Custom User Groups</p>
        <p>Domain claiming</p>
        <p>Custom Terms of Service</p>
        <div className="">
            <p className=" text-2xl font-semibold">Support</p>
        </div>
        <p>Priority support</p>
        <p>Account and customer success team</p>
    
    </section>
    
       <section className="flex flex-col items-center justify-center text-xs space-y-5  px-4 py-4" >
       <div className="h-5  text-2xl font-bold"><p className="text-center">Enterprise</p></div>
       <div className="h-5 w-10"></div>
       <div className="flex flex-row items-center justify-center space-x-2">
       <img className="h-2" src={gmark} alt="" />
        <p>Unlimited</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
        <img className="h-2" src={gmark} alt="" />
        <p>Unlimited</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
        <img className="h-2" src={gmark} alt="" />
        <p>Unlimited</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
        <img className="h-2" src={gmark} alt="" />
        <p>Unlimited</p>
        </div>
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <img className="h-2" src={gmark} />
        <div className="md:h-10 h-24 w-10"></div>
        <img className="h-2"  src={gmark} />
        <img className="h-2"  src={gmark} />
       </section>

       
    </article>
    
        
        <article className="flex flex-col space-y-10 md:container md:m-auto px-12 mt-20 mb-20">
            <h1 className="md:text-3xl md:font-bold text-2xl font-semibold">Frequently asked questions</h1>
            <div className="flex flex-row items-center justify-between border-gray-400 rounded  border md:px-10 md:py-3 px:5 py:1">
                <p className="md:text-2l text-xs">How many people can i have on my team ?</p>
                <img className="h-10" src={bmark}/>
            </div>
            <div className="flex flex-row items-center justify-between border-gray-400 rounded  border md:px-10 md:py-3 py-1">
                <p className="md:text-2l text-xs">Can i upload files ?</p>
                <img className="h-10" src={bmark}/>
            </div>
            <div className="flex flex-row items-center justify-between border-gray-400 rounded  border md:px-10 md:py-3 py-1">
                <p className="md:text-2l text-xs">Does Zuri Chat support in app brainstorming sessions?</p>
                <img className="h-10" src={bmark}/>
            </div>
            <div className="flex flex-row items-center justify-between border-gray-400 rounded  border md:px-10 md:py-3  py-1">
                <p className="md:text-2l text-xs">How many people can i have on my team ?</p>
                <img className="h-10" src={bmark}/>
            </div>
            
        </article>
    
        </>
    )
}
export default Pricings