import BarGraphOne from "./components/BarGraphOne";
import BarGraphTwo from "./components/BarGraphTwo";
import DoughNutChart from "./components/DoughNutChart";
import DoughNutTwo from "./components/DoughNutTwo";
import LineGraph from "./components/LineGraph";




function App() {
  return (
    <div className="w-[100vw] h-screen flex flex-col">
      <div className="w-[100vw] h-[100px] bg-black text-white text-3xl flex justify-center items-center"><span>Graphical Representation</span></div>
      <div className="w-[100vw] h-[auto] flex flex-col md:flex-row">
        <div className="w-[100%] h-[auto] bg-black justify-start items-center flex flex-col md:w-[20%] md:h-[86vh]" >
          <h1 className="w-[auto] font-mono text-3xl text-center text-white">Dashboard</h1>
          <div className="w-[90%] h-[200px] flex justify-center items-center bg-black mx-2 my-3 px-2 py-2 rounded-md shadow-md border-white border-2 md:w-[90%] md:h-[200px]" >
            <BarGraphTwo/>
          </div>

          <div className="w-[90%] h-[350px] flex justify-center items-center bg-black mx-2 my-3 px-2 py-2 rounded-md shadow-md border-white border-2">
            <DoughNutTwo/>
          </div>
        </div>
        <div className="w-[100%] h-[auto] flex flex-col justify-start items-center bg-black md:w-[80%] md:h-[86vh]">
          <div className="w-[90%] h-[300px]  px-10 py-1 m-2 shadow-md rounded-md border-white border-2 md:w-[100%]">
            <LineGraph />
          </div>
          <div className="w-[90%] h-[auto] flex flex-col justify-center items-center my-5 md:w-[100%] md:flex-row md:h-[250px]">
            <div className="w-[100%] h-[250px] px-3 shadow-md my-3 flex justify-center items-center rounded-md border-white border-2 md:w-[50%] md:h-[100%] md:mx-3">
              <BarGraphOne/>
            </div>
            <div className="w-[100%] h-[250px] p-3 shadow-md mx-3 rounded-md border-white border-2 md:w-[50%] md:h-[100%] md:mx-3">
              <DoughNutChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 
