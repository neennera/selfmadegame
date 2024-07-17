import { useState } from "react";
import { question } from "./assets/question";
interface qProps {
  left: string;
  right: string;
}
function App() {
  const [scale, setScale] = useState(0);
  const [show, setShow] = useState(false);
  const [q, setQ] = useState<qProps | undefined>(undefined);

  return (
    <>
      <main className="min-h-screen min-w-screen bg-slate-100 px-[50px] justify-start items-center flex flex-col space-y-[20px]">
        <h1 className="text-[3rem] font-bold mt-[10vh]"> 1 - 10 Scale</h1>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 text-xl dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setScale(Math.floor(Math.random() * 10) + 1);
            setQ(question[Math.floor(Math.random() * 25) + 1]);
          }}
        >
          New Round
        </button>

        <div className="w-[30vw] mt-[10vh] flex  flex-col lg:flex-row justify-between items-center h-[35vh]">
          <div className="space-y-3">
            <p className="text-lg font-semibold">Your scale is...</p>
            <button
              type="button"
              className="bg-gray-300 py-2 rounded-md w-[150px] flex items-center justify-center"
              onClick={() => {
                setShow(!show);
              }}
            >
              <p className="italic">{show ? "hide" : "show"}</p>
            </button>
          </div>
          <div
            className="relative w-1/2 h-full flex items-center justify-center"
            onClick={() => {
              setShow(!show);
            }}
          >
            <p className="absolute text-[6rem] mt-[10%]">{scale}</p>
            {show && (
              <div className="absolute w-[200px] h-[80%] rounded-sm bg-slate-200"></div>
            )}
          </div>
        </div>
        {q != undefined && (
          <div className="flex flex-row rounded-lg overflow-hidden">
            <div className="font-bold text-2xl text-black w-[180px] bg-purple-400 text-center items-center flex justify-center h-[100px]">
              {q.left}
            </div>
            <div className="font-bold text-2xl text-black w-[180px] bg-pink-300 text-center items-center flex justify-center h-[100px]">
              {q.right}
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
