import React from 'react'

export default function WriteAnswer(props) {
    return (
        <div className=" questadd h-screen">
        <button onClick={() => props.handle()} className=" close border border-gray-600 bg-transparent " >  X</button>
        <div className="bg-gray-400 bg-opacity-60  h-screen w-3/4 ml-16 ">
          <div className="relative">
            <div className="triggerquestadd w-7/12 rounded  h-96 bg-white ">
              <div className="questionscontainer">
                <div className="w-2/3">
                  <p className="font-sans font-bold text-base text-gray-600">
                  </p>
                  <div className="answerscontainer mt-6 ml-6">
                    <p  className=" textspace font-sans font-bold text-base text-gray-600">WRITE YOUR ANSWER HERE :</p>
                    <input className="inputspace font-sans  ml-2 mt-1  border border-gray-600 " />
                    <button  className =" buttonspace border border-gray-600">SUBMIT YOUR ANSWER</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
