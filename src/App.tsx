import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleButtonClick = (value: string) => {
    if (value === '=' && input) {
      const calculation = eval(input.replace('÷', '/').replace('X', '*'));
      setResult(calculation.toString());
    } else if (value === 'Del') {
      setInput(input.slice(0, -1));
    } else if (value === 'MC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <section className='bg-white flex items-center justify-center h-full p-6'>
      <div className="bg-[#d5e3e0] h-[600px] w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-xl flex flex-col">
        <div className="h-1/4 px-4 flex bg-[#7898aa] rounded-t-xl items-center w-full">
          <div className='w-full px-2 h-20 flex items-center rounded-lg bg-[#92afad] justify-between'>
            <div id="display" className="text-gray-950 mb-7 text-2xl">{result}</div>
            <div id="display" className="text-gray-950 mt-2 text-3xl">{input}</div>
          </div>
        </div>
        <div className="grid-cols-4 grid-rows-5 grid gap-4 p-4 md:p-8">
          <button onClick={() => handleButtonClick('MC')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#4b7287] text-3xl">MC</button>
          <button onClick={() => handleButtonClick('%')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#4b7287] text-3xl">%</button>
          <button onClick={() => handleButtonClick('÷')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#4b7287] text-3xl">÷</button>
          <button onClick={() => handleButtonClick('X')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#4b7287] text-3xl">X</button>
          <button onClick={() => handleButtonClick('7')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">7</button>
          <button onClick={() => handleButtonClick('8')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">8</button>
          <button onClick={() => handleButtonClick('9')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">9</button>
          <button onClick={() => handleButtonClick('-')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">-</button>
          <button onClick={() => handleButtonClick('4')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">4</button>
          <button onClick={() => handleButtonClick('5')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">5</button>
          <button onClick={() => handleButtonClick('6')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">6</button>
          <button onClick={() => handleButtonClick('+')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">+</button>
          <button onClick={() => handleButtonClick('1')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">1</button>
          <button onClick={() => handleButtonClick('2')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">2</button>
          <button onClick={() => handleButtonClick('3')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">3</button>
          <button onClick={() => handleButtonClick('=')} className="w-full h-36  items-center justify-center rounded-xl text-white bg-[#f08717] row-span-2 text-4xl">=</button>
          <button onClick={() => handleButtonClick('0')} className="w-full h-16 items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">0</button>
          <button onClick={() => handleButtonClick('Del')} className="w-full h-16 items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">Del</button>
          <button onClick={() => handleButtonClick('.')} className="w-full h-16  items-center justify-center rounded-xl text-white bg-[#789ba8] text-4xl">•</button>

        </div>
      </div>
    </section>
  )
}

export default App