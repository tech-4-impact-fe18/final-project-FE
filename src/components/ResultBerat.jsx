import React from 'react'
import './Result.css'
import picture from '../assets/result.png'

const ResultBerat = () => {
  return (
    <div className='card-result'>
        <div className="mt-20">
        <div className="flex justify-center ">
          <div className="rounded-lg shadow-lg bg-white max-w-md shadow-md">
          <h1 className="text-2xl font-black text-violet-400 text-center mt-3 mb-5 shadow-sm">Sapasikolog.com</h1>
            <div className="p-6">
                <img src={picture} alt="Image Not Found"/>
              <h3 className="text-gray-900 text-2xl font-extrabold mb-10">Hasil Tes Kamu : Sedang</h3>
              <p className="text-black-700 text-base mb-2">
              Hasil tes kamu menunjukkan kamu memiliki persepsi tingkat stres yang <b>Berat</b>. Saat ini kamu cenderung merasa memiliki banyak beban dalam hidupmu.</p>
              <p>Mungkin kamu merasa tidak berdaya untuk menyelesaikan berbagai permasalahan yang kamu alami. Banyak hal tidak terduga yang terjadi dan kamu mulai merasa kehilangan kontrol atas hidupmu.</p>
              <div className="text-center mt-10">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-violet-200 text-black font-medium text-s leading-tight uppercase rounded shadow-md hover:bg-violet-400 hover:shadow-lg text-white focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Kembali
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultBerat