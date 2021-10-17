import React from 'react'

const QuestAns = (props) => (
  <div>
    {props.data && props.data.slice(0, 2).map((e, k) => (
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
              <a  className="underline ml-2 mr-1 " onClick = {()=>e.question_helpfulness+1}>Yes</a>({e.question_helpfulness})</p><p className=" mr-4 text-gray-600">|</p><p><a href="#" className="underline text-gray-600 ">Report</a></p>
          </div>
        </div>
        <div className="optionscontainer text-gray-600">
          <p>Helpful?<a href="#" className="underline ml-2 mr-1" onClick = {()=>e.question_helpfulness+1}>Yes</a>({e.question_helpfulness})</p><p className=" ml-4">|</p><p><a href="#" className="underline ml-4">Add Answer</a></p>
        </div>
      </div>
    ))}
    <div className="questionscontainer  mt-3">
      <div className="w-2/3">
        <div>
          <p className="font-sans font-ms ml-6 mt-2 text-gray-600 text-xs">Yes, as you can see in these photos.</p>
          <div className="photoscontainer">
            <div onClick={() => props.handle()} className="box-border mt-3 ml-6 h-12 w-20 p-4 border-2 border-gray-400 bg-gray-100  "></div>
            <div onClick={() => props.handle()} className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400 bg-gray-100  "></div>
            <div onClick={() => props.handle()} className="box-border mt-3 ml-3 h-12 w-20 p-4 border-2 border-gray-400 bg-gray-100  "></div>
          </div>
          <div className="detailscontainer mt-2">
            <p className="font-sans font-ms ml-6 text-gray-400 ">
              by User1337 - <b> Seller,</b> May 1, 2019</p><p className=" ml-4 mr-4 text-gray-600">|</p><p className=" mr-4 text-gray-600">Helpful?<a href="#" className="underline ml-2 mr-1 ">Yes</a>
              (0)</p><p className=" mr-4 text-gray-600">|</p><p><a href="#" className="underline text-gray-600 ">Report</a></p>
          </div>
          <p className="show font-sans font-bold ml-6 mt-4 text-gray-600 ">LOAD MORE ANSWERS</p>
        </div>
      </div>
      <div className="optionscontainer text-gray-600">
        <p>Helpful?<a href="#" className="underline ml-2 mr-1">Yes</a>(2)</p>
        <p className=" ml-4">|</p>
        <p><a href="#" className="underline ml-4">Add Answer</a></p>
      </div>
    </div>

  </div>



)

export default QuestAns