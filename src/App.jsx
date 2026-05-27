import './App.css'
import Left from './components/Left'
import Mid from './components/Mid'
import Right from './components/Right'

function App() {
  return (
    <>
      <div className="flex bg-black text-white w-full">

        {/* LEFT SIDEBAR */}
        <div className="w-17.5 md:w-22.5 xl:w-[18%]">
          <div className="fixed top-0 left-0 h-screen w-17.5 md:w-22.5 xl:w-[18%]">
            <Left />
          </div>
        </div>

        {/* MAIN FEED */}
        <div className="w-[calc(100%-70px)] md:w-[calc(100%-90px)] lg:w-[50%] xl:w-[52%] border-x border-zinc-700 min-h-screen ml-17.5 md:ml-22.5 lg:ml-0">
          <Mid />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block lg:w-[30%] ">
          <div className="sticky top-0 h-screen overflow-y-auto scrollbar-none">
            <Right />
          </div>
        </div>

      </div>
    </>
  )
}

export default App