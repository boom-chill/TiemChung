import React, { useEffect, useState } from 'react'
import './ChonGoiTiemChung.scss'
import Toolbar from '../../components/Toolbar/Toolbar';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ButtonSecond from '../../components/ButtonSecond/ButtonSecond';

type Props = {

}

interface cartsTemp {
    SoLuong: number,
    SoLuongMua: number,
    NgayHenTiem: string
}

const ChonGoiTiemChung = (props: Props) => {
    let { id } = useParams()
    const [DSVaccine, setDSVaccine] = useState<any>([])
    const [carts, setCarts] = useState<cartsTemp[]>([])
    const navigate = useNavigate()
    useEffect(() => { 
        const fetchVaccine = async () => {
            const VC = await axios.get('http://localhost:5000/goi-tiem-chung')
            setDSVaccine(VC.data)
        }

        fetchVaccine()
    }, [])

    const cancle = () => {
        navigate(`/khach-hang/${id}`)
    }

    const addProduct = (item: any) => {
        const itemNew = {
            ...item,
            SoLuongMua: 1,
        }
        setCarts([itemNew, ...carts])
        const filteredAry = DSVaccine.filter((e: any) => { return e.MaGoiTiemChung !== item.MaGoiTiemChung })
    }

    const deleteProduct = (item: any | never) => {
        const filteredAry = carts.filter((e: any) => { return e.MaGoiTiemChung !== item.MaGoiTiemChung })
        setCarts(filteredAry)
    }

    const plusAmount = (item: any) => {

        const cartsTemp = [...carts]
        const objIndex = carts.findIndex(((e: any) => e.MaGoiTiemChung == item.MaGoiTiemChung))

        if (item.SoLuongTon <= cartsTemp[objIndex].SoLuongMua) return

        cartsTemp[objIndex].SoLuongMua += 1
        console.log(cartsTemp)
        setCarts(cartsTemp)
    }

    const minusAmount = (item: any) => {
        const cartsTemp = [...carts]
        const objIndex = carts.findIndex(((e: any) => e.MaGoiTiemChung == item.MaGoiTiemChung))

        if (cartsTemp[objIndex].SoLuongMua <= 1) return

        cartsTemp[objIndex].SoLuongMua -= 1

        setCarts(cartsTemp)
    }

    const handleChangeAMount = (item: any, value: any) => {
        if (isNaN(value)) return

        const cartsTemp = [...carts]
        const objIndex = carts.findIndex(((e: any) => e.MaGoiTiemChung == item.MaGoiTiemChung))

        if (item.SoLuong < value) return

        cartsTemp[objIndex].SoLuongMua = Number(value)

        setCarts(cartsTemp)
    }

    const handleChangeDate = (item: any, value: any) => {
        const cartsTemp = [...carts]
        const objIndex = carts.findIndex(((e: any) => e.MaGoiTiemChung == item.MaGoiTiemChung))

        cartsTemp[objIndex].NgayHenTiem = value

        setCarts(cartsTemp)
    }

    const checkValue = (item: any) => {
        const cartsTemp = [...carts]
        const objIndex = carts.findIndex(((e: any)  => e.MaGoiTiemChung == item.MaGoiTiemChung))

        if (cartsTemp[objIndex].SoLuongMua <= 0) {

            cartsTemp[objIndex].SoLuongMua = 1
        } else {
            return
        }
        setCarts(cartsTemp)
    }

    const save = async () => {
        console.log('carts', carts)
        await axios.post(`http://localhost:5000/dang-ki-tc-gtc/${id}`, {
           DSGoiTiemChung: carts
        })
        navigate(`/khach-hang/${id}`)
    }


  return (
      <>
        <div className='container'>
            <div className='container_header'>
                <Toolbar title='Danh sách khách hàng'>
                    <ButtonCustom onClick={() => cancle()} lable='Hủy' color='red' style={{marginRight: 20}}/>
                    <ButtonCustom onClick={() => save()} lable='Lưu' color='green'/>
                </Toolbar>
            </div>

            <div className='table_container'>
                <div className='second_toolbar'>

                </div>
                <table className='table_root' >
                    <tr className='table_header'>
                        <th>Vaccine</th>
                        <th>Số lượng mua</th>
                        <th>Số lượng tồn</th>
                        <th>Ngày hẹn tiêm</th>
                        <th>Tình trạng</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        DSVaccine.map((VS: any, idx: any) => (
                            <tr className='table_value' key={idx} onClick={() => {}}>
                                    <td>{VS['TenGoi']}</td>
                                    <td className='item-input'>
                                        {
                                            carts.filter((e: any) => e.MaGoiTiemChung === VS.MaGoiTiemChung).length > 0
                                            ? 
                                            <div className='input'>
                                                <button
                                                    onClick={() => minusAmount(VS)}
                                                >-</button>
                                                <div
                                                    className='input'
                                                >
                                                    <input
                                                        value={carts.filter((e: any) => e.MaGoiTiemChung === VS.MaGoiTiemChung)[0].SoLuongMua || 1}
                                                        onChange={(e) => handleChangeAMount(VS, e.target.value)}
                                                        onBlur={() => checkValue(VS)}
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => plusAmount(VS)}
                                                >+</button>
                                            </div>
                                            : <div className='item-input'>
                                                 
                                            </div>  
                                        }
                                    </td>
                                    <td>{VS['SoLuong']}</td>
                                    <td>
                                        {
                                             carts.filter((e: any) => e.MaGoiTiemChung === VS.MaGoiTiemChung).length > 0
                                             ? <input type="text" placeholder='__-__-____' onChange={(e) => handleChangeDate(VS, e.target.value)}/>
                                             : <div className='item-input'>
                                                 
                                            </div> 
                                        }
                                    </td>
                                    <td>{VS['TinhTrang']}</td>
                                    <td style={{}}>
                                        {
                                            VS['SoLuong'] <= 0 
                                            ? <ButtonSecond color='red' label='Đặt mua' onClick={()=>{}}/> :
                                        <input type="checkbox" style={{width: 20, height: 20}} onChange={carts.filter((e: any) => e.MaGoiTiemChung === VS.MaGoiTiemChung).length > 0 ? () => deleteProduct(VS) : () => addProduct(VS)} />
                                        }
                                    </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
      </>
  )
}

export default ChonGoiTiemChung