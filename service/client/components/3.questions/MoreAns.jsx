import React from 'react'

export default function MoreAns(props) {
  return (

    <div className="w-52 h-12  flex flex-row items-center border border-gray-600">
      <button onClick={() => props.handle()} className="font-sans px-10 font-bold text-xs ml-4 text-gray-600">
        MORE ANSWERED QUESTIONS
      </button>
    </div>

  )
}
