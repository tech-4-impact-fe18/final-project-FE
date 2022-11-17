import React from 'react'

function Soal() {
  return (
    <div className="card  m-5 p-5 border-0">
        <h2 className="card-header border-0 pb-5 pt-1" style={{backgroundCcolor: 'white'}}><i>SapaSikolog.com</i></h2>
        <h5 className="card-title mb-5 mt-1">Dalam sebulan terakhir, seberapa sering Anda merasa kesal karena sesuatu yang terjadi secara tidak terduga?</h5>
            <div className="jawaban">
                <button id="1">Tidak Pernah</button>
                <button id="2">Jarang</button>
                <button id="3">Kadang-kadang</button>
                <button id="4">Cukup Sering</button>
                <button id="5">Sering</button>
            </div>
            <div className="tombol">
            <button id="next">Selanjutnya</button>
            <button id="selesai" className="selesai" onClick="result()">Selesai</button>
            </div>
    </div>
  )
}

export default Soal