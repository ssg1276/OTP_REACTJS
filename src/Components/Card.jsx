import { React, useState } from 'react'

function Card() {
  const [length, setLength] = useState('')
  const [result, setResult] = useState('')

  function copyOtp() {
    window.navigator.clipboard.writeText(result)
    alert('Copied')
  }
  function generateOtp() {
    console.log(length)
    let otpLength = length
    let otp = ''
    let num = '0123456789'

    for (let i = 0; i < otpLength; i++) {
      const key = Math.floor(Math.random() * 10)
      otp += num[key]
    }
    setResult(otp)
  }
  return (
    <div className=" bg-slate-700 w-[450px] h-auto rounded-md shadow-orange-100s shadow-md">
      <div className="flex flex-col m-4 p-2 items-center text-center justify-center font-black text-3xl text-cyan-50">
        <p>Otp Generator</p>
        <input
          className="m-2"
          type="range"
          name=""
          id=""
          min={2}
          max={10}
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />
        <p className="text-xl">Length: {length}</p>
        <button
          onClick={generateOtp}
          className=" bg-cyan-500 p-4 text-xl rounded-md m-6"
        >
          Generate
        </button>
        <input
          type="text"
          className="p-1 rounded-md text-black w-[320px]"
          placeholder="Otp"
          value={result}
          readOnly
        />
        <button
          onClick={copyOtp}
          className=" p-3  text-cyan-500 m-2 bg-yellow-300  rounded-md "
        >
          Copy
        </button>
      </div>
    </div>
  )
}

export default Card
