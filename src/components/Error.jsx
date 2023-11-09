import React from 'react'

const Error = ({message}) => {
  return (
    <>
      <div className='flex justify-center items-center w-[90%] h-[500px] bg-slate-600 rounded-md'>
        <h1 className='text-5xl text-red-500'>User {message}</h1>
      </div>
    </>
  )
}

export default Error
