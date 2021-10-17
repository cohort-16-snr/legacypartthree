import React from 'react'

export default function SeeMoreAns(props) {

    return (

      <div  className=" questconadj h-screen ">
        <button onClick = {()=>props.handle()} className =" closequest border border-gray-600 bg-transparent " >  X</button>
        <div   className="bg-gray-400 bg-opacity-60  h-screen w-3/4 ml-16 ">
       <div className="relative">
        <div className="questionsadjust w-7/12 rounded  h-96 bg-white ">
<div>
{props.data && props.data.map((e, k) => (
  <div key={k} className="questionscontainer ">
    <div className="w-2/3">
      <p className="font-sans font-bold text-base text-gray-600">
        Q: {e.question_body} ?
      </p>
      {Object.values(e.answers).slice(0, 2).map((e, k) => (
        <div key={k} className="answerscontainer mt-2">
          <p className="font-sans font-bold text-base text-gray-600">A:</p>
          <p className="font-sans font-ms ml-2 mt-1  text-gray-600 text-xs">
            {e.body}</p>
        </div>
      ))}
      <div className="detailscontainer  mt-2">
        <p className="font-sans font-ms ml-6 text-gray-400 ">by User1234, January 1, 2019</p><p className=" ml-4 mr-4 text-gray-600">|</p><p className=" mr-4 text-gray-600">Helpful?
          <a className="underline ml-2 mr-1 " >Yes</a>({e.question_helpfulness})</p><p className=" mr-4 text-gray-600">|</p><p><a href="#" className="underline text-gray-600 ">Report</a></p>
      </div>
    </div>
    <div className="optionscontainer text-gray-600">
      <p>Helpful?<a href="#" className="underline ml-2 mr-1" onClick={() => e.question_helpfulness + 1}>Yes</a>({e.question_helpfulness})</p><p className=" ml-4">|</p><p><a href="#" className="underline ml-4">Add Answer</a></p>
    </div>
  </div>
))}
</div>
  </div>
        </div>
    
        </div>
        </div>
      
    )
}
