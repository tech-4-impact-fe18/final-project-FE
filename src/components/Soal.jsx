import React, {useState} from 'react'

function Soal() {
  const [soal, setSoal] = useState([
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu tidak dapat mengendalikan hal-hal yang penting dalam hidup Kamu?",
     "Dalam satu minggu terakhir, seberapa sering Kamu menemukan bahwa Kamu tidak dapat mengatasi segala hal yang harus dilakukan?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa gelisah dan stres?",
     "Dalam satu minggu terakhir, seberapa sering Kamu mampu mengendalikan hal-hal yang mengganggu dalam hidup Kamu?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa kesal karena sesuatu yang terjadi secara tidak terduga?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa ada berbagai kesulitan yang menumpuk begitu banyak sehingga Kamu tidak dapat mengatasinya?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa yakin terhadap kemampuan Kamu dalam menangani masalah pribadi?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu dapat mengendalikan hal-hal dalam hidup Kamu?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa marah karena hal-hal yang terjadi di luar kendali Kamu?",
     "Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa segala sesuatu berjalan sesuai keinginan Kamu?"
    ],
  )

  const handleClick = () => {
    console.log("ini bisa")
  }

  return (
    <div className="card m-5 p-5 border-0" style={{margin : '3rem'}}>
        <h2 className="card-header border-0 pb-5 pt-1" style={{backgroundColor: 'white'}}><i>SapaSikolog.com</i></h2>
        {/* <h5 className="card-title mb-5 mt-1">Dalam satu minggu terakhir, seberapa sering Kamu merasa kesal karena sesuatu yang terjadi secara tidak terduga?</h5> */}
        {soal.map((items, index) => {
          return (
            <>
              <h5 key={index}>{items}</h5>
              <div className="jawaban">
                  <button id="1">Tidak Pernah</button>
                  <button id="2">Jarang</button>
                  <button id="3">Kadang-kadang</button>
                  <button id="4">Cukup Sering</button>
                  <button id="5">Sering</button>
              </div>
            </>
          )
        })}
        <div className="tombol">
              <button onClick={handleClick}>Selanjutnya</button>
              <button id="selesai" className="selesai" onClick="result()">Selesai</button>
        </div>
    </div>
  )
}

export default Soal