import React, { useState } from 'react'
import image1 from '../assets/photo1.jpg'
import breakfast1 from '../assets/breakfast1.jpeg'
import breakfast2 from '../assets/breakfast2.jpeg'
import breakfast3 from '../assets/breakfast3.jpeg'
import lunch1 from '../assets/lunch1.jpeg'
import lunch2 from '../assets/lunch2.jpeg'
import lunch3 from '../assets/lunch3.jpeg'
import shakes1 from '../assets/shakes1.jpeg'
import shakes2 from '../assets/shakes2.jpeg'
import shakes3 from '../assets/shakes3.jpeg'
const Menu = () => {
    const data = [
        {
          id: 1,
          title: 'buttermilk pancakes',
          category: 'breakfast',
          price: 15.99,
          img: breakfast1,
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: 'diner double',
          category: 'lunch',
          price: 13.99,
          img: lunch1,
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: 'godzilla milkshake',
          category: 'shakes',
          price: 6.99,
          img: shakes1,
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: 'country delight',
          category: 'breakfast',
          price: 20.99,
          img: breakfast2,
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: 'egg attack',
          category: 'lunch',
          price: 22.99,
          img: lunch2,
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: 'oreo dream',
          category: 'shakes',
          price: 18.99,
          img: shakes2,
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: 'bacon overflow',
          category: 'breakfast',
          price: 8.99,
          img: breakfast3,
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: 'american classic',
          category: 'lunch',
          price: 12.99,
          img: lunch3,
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: 'quarantine buddy',
          category: 'shakes',
          price: 16.99,
          img: shakes3,
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ]
    const [info , setInfo] = useState('All')
    const filterItem = info === "All" ?  data : data.filter(data => data.category == info)
  return (
    <div className='container md:w-full w-11/12 mx-auto grid items-start place-content-center '>
        <div className="grid mt-20  place-content-center gap-2 ">
            <h1 className='md:text-4xl tracking-wider mx-auto  text-2xl '>Our Menu</h1>
             <div className='mx-auto   w-32 h-1  bg-yellow-100 '> </div>
             <div className="btn mt-6 flex flex-wrap gap-2">
              <button onClick={()=> setInfo('All')}  className=' px-2 py-1 hover:bg-yellow-200  transition-colors bg-yellow-100 text-white  rounded-md text-sm'>All</button>
              <button onClick={()=> setInfo('breakfast')} className=' px-2 py-1 hover:bg-yellow-200  transition-colors bg-yellow-100 text-white  rounded-md text-sm'>Breakfast</button>
              <button onClick={()=> setInfo('lunch')} className=' px-2 py-1 hover:bg-yellow-200  transition-colors bg-yellow-100 text-white  rounded-md text-sm'>Lunch</button>
              <button onClick={()=> setInfo('shakes')} className=' px-2 py-1 hover:bg-yellow-200  transition-colors bg-yellow-100 text-white  rounded-md text-sm'>shakes</button>
             </div>

        </div>
        <div className="allData mb-8 mt-12 grid gap-8 md:gap-12 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center">
            
            {
          filterItem.map((data,index)=> (

            <div className="md:w-full shadow rounded-xl w-6/6 mx-auto bg-pow-100">
            <div className=' h-60 ' >
    
            <img className='h-full w-full object-cover  ' src={data.img} alt="image" />
            </div>
            <div className='p-4 '>
    
            <div className="flex items-center justify-between">
                <div className='lg:text-xl tracking-wider  md:text-lg sm:text-xl text-sm '>{data.title}</div>
                <div className=' md:text-lg sm:text-base text-sm bg-yellow-100 px-2 rounded-md text-slate-100'>${data.price}</div>
            </div>
            <div className='mt-4 md:text:md tracking-wide leading-loose tracking-wider sm:text-base text-sm text-gray-500 '>{data.desc}</div>
            </div>
        </div>
        ))
    }

           

        </div>

    </div>
  )
}

export default Menu