import GoiTiemChung from '../models/GoiTiemChung.model';
import { KhachHang, HoSoDangKiTiemChung } from '../models/KhachHang.model';
import Vaccine from '../models/Vaccine.model';

export const DSKhachHang = async (req: any, res: any) => {
    try {
        const DSKhachHang: Array<any> = await KhachHang.find()
        res.send(DSKhachHang)
    } catch (error) {
        console.log(error)
    }
}

export const khachHang = async (req: any, res: any) => {
    const id: string = req.params.id
    console.log(id)
    try {
        const khachHang: any = await KhachHang.findOne({MaKH: id})
        res.send(khachHang)
    } catch (error) {
        console.log(error)
    }
}

export const hoSoKhachHang = async (req: any, res: any) => {
    const MaKH: string = req.params.id
    try {
        const hoSoDangKiTiemChung: any = await HoSoDangKiTiemChung.findOne({MaKH: MaKH}).lean()
        
        const DSVaccine = hoSoDangKiTiemChung?.DSVaccine
        const DSGoiTiemChung = hoSoDangKiTiemChung?.DSGoiTiemChung

        if(DSVaccine) {
            for(let i = 0; i < DSVaccine.length; i++) {

                const vaccine: Vaccine | null = await Vaccine.findOne({MaVaccine: DSVaccine[i].MaVaccine}, {MaVaccine: 1, TenVaccine: 1, _id: 0}).lean()
                if(vaccine) {
                    const vaccineMoi= {
                        ...hoSoDangKiTiemChung.DSVaccine[i],
                        ...vaccine,
                    }
                    hoSoDangKiTiemChung.DSVaccine[i] = vaccineMoi
                }
            }
            
        }

        if(DSGoiTiemChung) {
            for(let j = 0; j < DSGoiTiemChung.length; j++) {

                const goiTiemChung: GoiTiemChung | null = await GoiTiemChung.findOne({MaGoiTiemChung: DSGoiTiemChung[j].MaGoiTiemChung}, {TenGoi: 1, _id: 0}).lean()

                if(goiTiemChung) {
                    const goiTiemChungMoi = {
                        ...hoSoDangKiTiemChung.DSGoiTiemChung[j],
                        ...goiTiemChung,
                    }
                    hoSoDangKiTiemChung.DSGoiTiemChung[j] = goiTiemChungMoi
                }
            }
            
        }

        res.send(hoSoDangKiTiemChung)
    } catch (error) {
        console.log(error)
    }
}

export const dangKiTiemChungVaccine = async (req: any, res: any) => {
    const MaKH: string = req.params.id
    let { DSVaccine } = req.body
    try {
        DSVaccine.forEach((vaccine: any) => {
            vaccine['SoLuong'] = vaccine['SoLuongMua']
            vaccine['TrangThai'] = 'Hẹn Ngày Tiêm'
        })
        console.log('DSVaccine', DSVaccine)
        await HoSoDangKiTiemChung.findOneAndUpdate({MaKH: MaKH}, {
            $push: { DSVaccine: DSVaccine },
        }).lean()

        for (let i = 0; i < DSVaccine.length; i++ ) {
                await Vaccine.findOneAndUpdate({MaVaccine: DSVaccine[i].MaVaccine}, {
                    $inc: {SoLuong: -(+DSVaccine[i].SoLuongMua)}
                })
        }

        res.send('success')
    } catch (error) {
        console.log(error)
    }
}

export const dangKiTiemChungGoi = async (req: any, res: any) => {
    const MaKH: string = req.params.id
    let { DSGoiTiemChung } = req.body
    try {
        DSGoiTiemChung.forEach((vaccine: any) => {
            vaccine['SoLuong'] = vaccine['SoLuongMua']
            vaccine['TrangThai'] = 'Hẹn Ngày Tiêm'
        })
        console.log('DSGoiTiemChung', DSGoiTiemChung)
        await HoSoDangKiTiemChung.findOneAndUpdate({MaKH: MaKH}, {
            $push: { DSGoiTiemChung: DSGoiTiemChung },
        }).lean()

        for (let i = 0; i < DSGoiTiemChung.length; i++ ) {
                await GoiTiemChung.findOneAndUpdate({MaGoiTiemChung: DSGoiTiemChung[i].MaGoiTiemChung}, {
                    $inc: {SoLuong: -(+DSGoiTiemChung[i].SoLuongMua)}
                })
        }

        res.send('success')
    } catch (error) {
        console.log(error)
    }
}