import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import "../pages/Result.css"
import {
  increment_1,
  increment_2,
  increment_3,
  increment_4,
  increment_5,
} from "../redux/reducer/SkorReducer"

const soal = [
   "1. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu tidak dapat mengendalikan hal-hal yang penting dalam hidup Kamu?",
   "2. Dalam satu minggu terakhir, seberapa sering Kamu menemukan bahwa Kamu tidak dapat mengatasi segala hal yang harus dilakukan?",
   "3. Dalam satu minggu terakhir, seberapa sering Kamu merasa gelisah dan stres?",
   "4. Dalam satu minggu terakhir, seberapa sering Kamu mampu mengendalikan hal-hal yang mengganggu dalam hidup Kamu?",
   "5. Dalam satu minggu terakhir, seberapa sering Kamu merasa kesal karena sesuatu yang terjadi secara tidak terduga?",
   "6. Dalam satu minggu terakhir, seberapa sering Kamu merasa ada berbagai kesulitan yang menumpuk begitu banyak sehingga Kamu tidak dapat mengatasinya?",
   "7. Dalam satu minggu terakhir, seberapa sering Kamu merasa yakin terhadap kemampuan Kamu dalam menangani masalah pribadi?",
   "8. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa Kamu dapat mengendalikan hal-hal dalam hidup Kamu?",
   "9. Dalam satu minggu terakhir, seberapa sering Kamu merasa marah karena hal-hal yang terjadi di luar kendali Kamu?",
   "10. Dalam satu minggu terakhir, seberapa sering Kamu merasa bahwa segala sesuatu berjalan sesuai keinginan Kamu?"
  ]
function Soal() {
  const [changeButton, setChangeButton] = useState(false)
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    setIndex(index + 1)
    if (index == soal.length -2) {
      setChangeButton(true)
    }
  }

  const dispatch = useDispatch()
  const [skor, setSkor] = useState(0)

  const Increment_1 = () => {
    dispatch(increment_1())
    setSkor(skor + 1)
  }
  const Increment_2 = () => {
    dispatch(increment_2())
    setSkor(skor + 2)
  }
  const Increment_3 = () => {
    dispatch(increment_3())
    setSkor(skor + 3)
  }
  const Increment_4 = () => {
    dispatch(increment_4())
    setSkor(skor + 4)
  }
  const Increment_5 = () => {
    dispatch(increment_5())
    setSkor(skor + 5)
  }

  return (
    <div className="card m-5 p-5 border-0" style={{margin : '3rem'}}>
        <h2 className="card-header border-0 pb-5 pt-1" style={{backgroundColor: 'white'}}><i>SapaSikolog.com</i></h2>
        <h5 className="card-title mb-5 mt-1">{soal[index]}</h5>
              <div className="jawaban hover:bg-blue mt-10">
                  <button id="1" onClick={Increment_1}>Tidak Pernah</button>
                  <button id="2" onClick={Increment_2}>Jarang</button>
                  <button id="3" onClick={Increment_3}>Kadang-kadang</button>
                  <button id="4" onClick={Increment_4}>Cukup Sering</button>
                  <button id="5" onClick={Increment_5}>Sering</button>
                  <span>{skor}</span>
              </div>
        <div className="tombol">
              {changeButton ? 
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={hasil}>Selesai</button> : 
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Selanjutnya</button>}
        </div>
    </div>
  )
}

export default Soal