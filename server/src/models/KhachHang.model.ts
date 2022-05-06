import { Schema, model, connect } from 'mongoose';

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
    NgaySinh: Date,
    GioiTinh: string,
}


const KhachHangSchema = new Schema<KhachHang>(
    {
        MaKH: String,
        CMND: String,
        TenKH: String,
        DiaChi: String,
        GioiTinh: String,
        SDT: String,
        NgaySinh: Date,
        NguoiGiamHo: {
            TenNguoiGiamHo: String,
            NgaySinh: Date,
            GioiTinh: String,
            required: false,
        }
    }
)

export const KhachHang = model<KhachHang>('KhachHang', KhachHangSchema)


interface HoSoDangKiTiemChung {
    MaHoSoDangKiTiemChung: string
    MaKH: string,
    NgayLap: Date,
    TongTien: number,
    DSVaccine: Array<any>,
    DSGoiTiemChung: Array<any>,
    Gia: number,
}

const HoSoDangKiTiemChungSchema = new Schema<HoSoDangKiTiemChung>(
    {
        MaHoSoDangKiTiemChung: String,
        MaKH: String,
        DSVaccine: [
            {
                MaVaccine: String,
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,
                Gia: Number,
            }
        ],
        DSGoiTiemChung: [
            {
                MaGoiTiemChung: String,
                SoLuong: Number,
                TrangThai: String,
                NgayHenTiem: Date,
                Gia: Number,
            }
        ],
        NgayLap: Date,
        TongTien: Number,
    }
)

export const HoSoDangKiTiemChung = model<HoSoDangKiTiemChung>('HoSoDangKiTiemChung', HoSoDangKiTiemChungSchema)
