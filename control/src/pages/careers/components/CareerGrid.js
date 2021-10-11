import React from 'react'

const CareerGrid = () => {
   return (
      <div>
         <div className="headerContent text-center">
            <h2 className="text-center">Join Our Internship</h2>
            <p>Zuri Internship is a 100% free, remote and fast paced training for young professionals seeking to hon their tech skills and boost their resume.</p>
         </div>
         <div className="categories">
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Frontend Development</h3>
                  <p>This track deals with the aspect of your application that the users interact with. A front-end developer will be able to correctly interpret a given design to the user interface.</p>
               </div>
               <div className="flex">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
               </div>
            </div>
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Backend Development</h3>
                  <p>This track deals with the aspect of the application the user does not directly interact with. It allows the frontend function either by running some back-end code or connecting to the database.</p>
               </div>
               <div className="flex">
                  <li>PHP</li>
                  <li>Python</li>
                  <li>NodeJS</li>
                  <li>Go</li>
               </div>
            </div>
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Design</h3>
                  <p>This track deals with creating a graphic plan for an application. You will learn to convert project documentation into viewable and understandable graphic design for the developers to work with</p>
               </div>
               <div className="flex">
                  <li>UI/UX</li>
               </div>
            </div>
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Mobile Development</h3>
                  <p>The mobile track contains a list of tools and languages needed for a developer to create mobile applications. A mobile application can be IOS or Android.</p>
               </div>
               <div className="flex">
                  <li>Flutter</li>
                  <li>Kotlin</li>
               </div>
            </div>
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Digital Marketing</h3>
                  <p>It encomprises the use of digital means and utilities to boost discoverability of products, services and brands.</p>
               </div>
               <div className="flex">
                  <li>SEO</li>
               </div>
            </div>
            <div className="category">
               <div className="sub-category">
                  <h3 className="text-center">Frameworks</h3>
                  <p>During the program we will be exploring several useful frameworks to give you an edge in the industry and help you develop complex applications much faster</p>
               </div>
               <div className="flex">
                  <li>Laravel</li>
                  <li>Django</li>
                  <li>ReactJS</li>
               </div>
            </div>
         </div>
         <div className="py-5 text-center">
         Be a part of our next cohort starting summer of 2022
         </div>
         <div className="register">
            <button className="btn-green text-center">Register Now</button>
         </div>
      </div>
   )
}

export default CareerGrid
