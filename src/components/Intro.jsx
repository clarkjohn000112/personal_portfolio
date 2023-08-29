import React, { useEffect, useState } from 'react';

function Intro() {
   const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

   return (
      <><section className="flex items-left justify-start flex-col text-left pl-1 pt-15 pb-5">
         <nav className="bg-white-500 p-4 mt-10 pt-2 pb-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-black font-semibold text-lg">CJDEV</div>
            <ul className="flex space-x-4 mt-2">
               <li>
                  <a href="#" className="text-black hover:text-blue-300">Home</a>
               </li>
               <li>
                  <a href="#" className="text-black hover:text-blue-300">Stylish Project</a>
               </li>
               <li>
                  <a href="#" className="text-black hover:text-blue-300">Services</a>
               </li>
               <li>
               <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs px-1 py-1 border-none rounded-md ml-8"
               >
                  {theme === 'dark' ? sun : moon}
               </button>
               </li>
            </ul>
            </div>
         </nav>
      </section>
         <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-5xl py-2 text-orange-900 font-medium dark:text-teal-200 md:text-6xl">Clark John Casin</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Quality Assurance Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-normal">
               I'm Clark John Casin, a recent Computer Science graduate with a deep passion for front-end web development. As an active member of a college software dev team, I've honed my collaboration skills. Currently interning as a Quality Assurance Engineer at Achieve Without Borders Inc., I'm excited to shift my career towards front-end development. Thanks for reviewing my portfolio!
            </p>
         </div>
         <div className="lg:flex gap-10">
            <div className="flex items-center justify-center flex-col text-center pt-15 pb-5 shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
              <h3 className="text-lg text-orange-900 font-medium pt-8 pb-2 dark:text-teal-200 ">
                HTML5
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-black-800 py-1">Photoshop</p>
              <p className="text-black-800 py-1">Illustrator</p>
              <p className="text-black-800 py-1">Figma</p>
              <p className="text-black-800 py-1">Indesign</p>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-15 pb-5 shadow-lg p-10 rounded-xl my-10 dark:bg-slate-200">
              <h3 className="text-lg text-yellow-500 font-medium pt-8 pb-2 dark:text-teal-200">
                TAILWIND CSS
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-black-800 py-1">Photoshop</p>
              <p className="text-black-800 py-1">Illustrator</p>
              <p className="text-black-800 py-1">Figma</p>
              <p className="text-black-800 py-1">Indesign</p>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-15 pb-5 shadow-lg p-10 rounded-xl my-10 dark:bg-slate-300">
              <h3 className="text-lg text-blue-500 font-medium pt-8 pb-2 dark:text-teal-200 ">
                REACT JS
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-black-800 py-1">Photoshop</p>
              <p className="text-black-800 py-1">Illustrator</p>
              <p className="text-black-800 py-1">Figma</p>
              <p className="text-black-800 py-1">Indesign</p>
            </div>
            <div className="flex items-center justify-center flex-col text-center pt-15 pb-5 shadow-lg p-10 rounded-xl my-10 dark:bg-slate-400">
              <h3 className="text-lg text-green-500 font-medium pt-8 pb-2 dark:text-teal-200 ">
                VITE
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-black-800 py-1">Photoshop</p>
              <p className="text-black-800 py-1">Illustrator</p>
              <p className="text-black-800 py-1">Figma</p>
              <p className="text-black-800 py-1">Indesign</p>
            </div>
          </div>
          
         </>
   )
}

export default Intro;