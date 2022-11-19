import React from 'react'


function ResultCategory({testResult, deskripsi}) {
  return (
    <>
        <h3 className="text-gray-900 text-2xl font-extrabold mb-10">Hasil Tes Kamu : {testResult}</h3>
              <p className="text-black-700 text-base mb-2">
              {deskripsi}
              </p>
    </>
  )
}

export default ResultCategory