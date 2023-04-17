import React from 'react'

const List = ({ person}) => {
  return (
    <>
       {
          person.map((people) => (
            <div className='flex gap-[30px] items-center'>
               <img src={people.image} alt={people.name} className="w-[75px] h-[75px] rounded-full mb-[20px]"/>
               <div>
                  <h4 className='font-medium'>{people.name}</h4>
                  <p>{people.age}</p>
               </div>
            </div>
          ))
       }
    </>
  )
}

export default List
