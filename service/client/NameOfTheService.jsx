import "./index.css";
import Questions from "./components/3.questions/Questions.js"
const NameOfTheService = () => {

  return (
    <div className="app pr-16 pl-16">  
    <div className="grid grid-cols-1 gap-4  w-3/5  mx-auto">
       <Questions />
    </div> 
    <div className="grid gap-2  w-3/5 mt-4 mx-auto" style ={{display : 'flex'}}>       
    </div>
  </div>
  );
};

export default NameOfTheService;
