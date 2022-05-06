import React, { useEffect, useState } from 'react'
import './KhachHang.scss'
import Toolbar from '../../components/Toolbar/Toolbar';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShowInfo from '../../components/ShowInfo/ShowInfo';
import { dateFormat } from '../../utils/dateFormat';
import './KhachHang.scss'
import ButtonSecond from '../../components/ButtonSecond/ButtonSecond';

type Props = {}

interface Vaccine {
    MaVaccine: string,
    TenVaccine: string,
    SoLuong: number,
    TinhTrang: string,
    Gia: number,
    MaNCU: string,
    TrangThai: string,
    NgayHenTiem: string,
}

interface GoiTiemChung {
    MaGoiTiemChung: string,
    TenGoi: string,
    SoLuong: number,
    Gia: number,
    TinhTrang: string,
    DSVaccine: Array<Vaccine>,
    TrangThai: string,
    NgayHenTiem: string,
}

interface KhachHang {
    MaKH: string,
    CMND: string,
    TenKH: string,
    DiaChi: string,
    GioiTinh: string,
    SDT: string,
    NgaySinh: Date,
    NguoiGiamHo: NguoiGiamHo,
}

interface NguoiGiamHo {
    TenNguoiGiamHo: string,
    MoiQuanHe:string
    SDT: string,
}

interface HoSoDangKiTiemChung {
    MaHoSoDangKiTiemChung: string
    MaKH: string,
    NgayLap: Date,
    TongTien: number,
    DSVaccine: Array<Vaccine>,
    DSGoiTiemChung: Array<GoiTiemChung>
}


const Khachhang = (props: Props) => {
    let { id } = useParams()
    const navigate = useNavigate()
    const [khachHang, setKhachHang] = useState<KhachHang | null>(null)
    const [hoSoTiemChung, setHoSoTiemChung] = useState<HoSoDangKiTiemChung | null>(null)

    useEffect(() => { 
        const fetchKhahHang = async () => {
            const KH = await axios.get(`http://localhost:5000/khachhang/${id}`)
            setKhachHang(KH.data)
        }

        const fetchHoSo = async () => {
            const HS = await axios.get(`http://localhost:5000/ho-so-dang-ki-tc/${id}`)
            setHoSoTiemChung(HS.data)
        }

        fetchKhahHang()
        fetchHoSo()
    }, [id])

    console.log(hoSoTiemChung)

    const onClickVaccine = () => {
        navigate(`/chon-vaccine/${khachHang?.MaKH}`)
    }

    const onClickGTC = () => {
        navigate(`/chon-goi-tc/${khachHang?.MaKH}`)
    }

    if(!khachHang) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <>
                <div className='page_khach_hang'>
                    <div className='page_khach_hang_title'>
                        Thông tin người tiêm
                    </div>
                    <div className='page_khach_hang_info'>
                        <div>
                            <ShowInfo label='Tên khách hàng' value={khachHang.TenKH}/>
                        </div>
                        <div>
                            <ShowInfo label='Ngày sinh' value={dateFormat(khachHang.NgaySinh.toString())}/>
                        </div>
                        <div>
                            <ShowInfo label='Số điện thoại' value={khachHang.SDT}/>
                        </div>
                        <div>
                            <ShowInfo label='Giới tính' value={khachHang.GioiTinh}/>
                        </div>
                    </div>
                    <div className='page_khach_hang_address'>
                        <ShowInfo label='Địa chỉ' value={khachHang.DiaChi}/>
                    </div>
                </div>
                
                {
                    khachHang?.NguoiGiamHo ? (
                        <div className='page_khach_hang'>
                            <div className='page_khach_hang_title'>
                                Thông tin người giám hộ
                            </div>
                            <div className='page_khach_hang_info'>
                                <div>
                                    <ShowInfo label='Tên khách hàng' value={khachHang.NguoiGiamHo.TenNguoiGiamHo}/>
                                </div>
                                <div>
                                    <ShowInfo label='Mối quan hệ' value={khachHang.NguoiGiamHo.MoiQuanHe}/>
                                </div>
                                <div>
                                    <ShowInfo label='Số điện thoại' value={khachHang.NguoiGiamHo.SDT}/>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    ''
                }

                <div className='page_khach_hang_HSDKTC'>
                    <div>
                        <ButtonSecond label='Sửa' onClick={() => onClickVaccine()} style={{position: 'absolute', top: 10, right: 0}} />
                        <div className='page_khach_hang_title'>
                            Vaccine
                        </div>

                        <div className='table_container'>
                            <table className='table_root' >
                                <tr className='table_header'>
                                    <th>Tên Vaccine</th>
                                    <th>Số lượng</th>
                                    <th>Ngày hẹn tiêm</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                                {
                                    hoSoTiemChung?.DSVaccine?.map((vaccine, idx) => (
                                        <tr className='table_value' key={idx} onClick={() => {}}>
                                                <td>{vaccine.TenVaccine}</td>
                                                <td>{vaccine.SoLuong}</td>
                                                <td>{dateFormat(vaccine?.NgayHenTiem || '')}</td>
                                                <td>{vaccine.TrangThai}</td>
                                                <td>
                                                    <ButtonSecond label='Xuất hóa đơn' onClick={() => {}}  />
                                                </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>

                <div className='page_khach_hang_HSDKTC'>
                    <ButtonSecond label='Sửa' onClick={() => onClickGTC()}  style={{position: 'absolute', top: 10, right: 0}} />
                    <div>
                        <div className='page_khach_hang_title'>
                            Gói tiêm chủng
                        </div>

                        <div className='table_container'>
                            <table className='table_root' >
                                <tr className='table_header'>
                                    <th>Tên gói</th>
                                    <th>Số lượng</th>
                                    <th>Ngày hẹn tiêm</th>
                                    <th>Trạng thái</th>
                                    <th>Thao tác</th>
                                </tr>
                                {
                                     hoSoTiemChung?.DSGoiTiemChung?.map((goiTiem, idx) => (
                                        <tr className='table_value' key={idx} onClick={() => {}}>
                                                <td>{goiTiem.TenGoi}</td>
                                                <td>{goiTiem.SoLuong}</td>
                                                <td>{dateFormat(goiTiem?.NgayHenTiem || '')}</td>
                                                <td>{goiTiem.TrangThai}</td>
                                                <td>
                                                <ButtonSecond label='Xuất hóa đơn' onClick={() => {}}  />
                                                </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Khachhang