import React, { useEffect, useState } from 'react'
import './DSKhachHang.scss'
import Toolbar from '../../components/Toolbar/Toolbar';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

type Props = {

}

const DSKhachHang = (props: Props) => {
    const [DSKhachHang, setDSKhachHang] = useState([])
    const navigate = useNavigate()
    useEffect(() => { 
        const fetchKhahHang = async () => {
            const KH = await axios.get('http://localhost:5000/khachhang')
            setDSKhachHang(KH.data)
        }

        fetchKhahHang()
    }, [])

    const onClick = (id: string) => {
        navigate(`/khach-hang/${id}`)
    }


  return (
      <>
        <div className='container'>
            <div className='container_header'>
                <Toolbar title='Danh sách khách hàng'>
                    <ButtonCustom onClick={() => {}} lable='Thêm khách hàng' color='blue'/>
                </Toolbar>
            </div>

            <div className='table_container'>
                <div className='second_toolbar'>

                </div>
                <table className='table_root' >
                    <tr className='table_header'>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Giới tính</th>
                        <th>CMND</th>
                    </tr>
                    {
                        DSKhachHang.map((KH, idx) => (
                            <tr className='table_value' key={idx} onClick={() => onClick(KH['MaKH'])}>
                                    <td>{KH['TenKH']}</td>
                                    <td>{KH['SDT']}</td>
                                    <td>{KH['GioiTinh']}</td>
                                    <td>{KH['CMND']}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
      </>
  )
}

export default DSKhachHang