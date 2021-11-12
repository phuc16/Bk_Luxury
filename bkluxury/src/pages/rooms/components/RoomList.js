import ImageClub from '../images1/ClubKing.png'
import ImageSuper from '../images1/ClubTwin.png'
import ImageDeluxe from '../images1/Term.png'
import IconCouch from '@mui/icons-material/Weekend'
import IconWifi from '@mui/icons-material/Wifi'
import IconCoffee from '@mui/icons-material/Coffee'
import IconKingBed from '@mui/icons-material/KingBed'
import IconTwinBed from '@mui/icons-material/Bed';
import IconAC from '@mui/icons-material/AcUnit'

const EquipmentList = {
    Lounge: {
      title: 'CLUB LOUNGE ACCESS',
      icon: IconCouch
    },
    Wifi: {
      title: 'WIFI',
      icon: IconWifi
    },
    Breakfast:{
        title: 'BREAKFAST FOR 2',
        icon: IconCoffee
    },
    KingBed: {
        title: 'KING BED',
        icon: IconKingBed
    },
    AirConditioner:{
        title: 'AIR CONDITIONER',
        icon: IconAC,
    },
    TwinBed: {
        title: "TWIN BED",
        icon: IconTwinBed
    }
}

export const RoomList = {

    ClubKingRoom: {
        name: "CLUB KING ROOM",
        description: "Perfect choice for discerning travelers who are seeking exclusive privileges with free wifi access, iPod deck, espresso machine, private check in, breakfast, all day refreshments and evening cocktails in our spacious and chic Club InterContinental Lounge at InterContinental Saigon Hotel. Non smoking rooms only.",
        img: ImageClub,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.KingBed,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
    ClubTwinRoom: {
        name: "CLUB TWIN ROOM",
        description: "These premium rooms are part of the Club InterContinental experience, designed to make sure your needs are taken care of, from check-in to the moment you leave. Ideal for both short and long stays, business travelers will enjoy exclusive privileges such as free wifi access, iPod deck, espresso machine, private check in, breakfast, all day refreshments and evening cocktails in our spacious and chic Club InterContinental Lounge at InterContinental Saigon Hotel. Non smoking rooms only.",
        img: ImageSuper,
        area: '38 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.TwinBed,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    },
    ThirdPerson: {
        name: "THIRD PERSON SUPPLEMENTS",
        description: "Free of charge with children 5 years old or younger. With Children between 6 and 11 years old, if without breakfast: 22.50 USD++ per child per night, With breakfast: 30.00 USD++ per child per night. In case children 12 years old or older, and adults: Without breakfast: 45.00 USD++ per person per night, With breakfast: 60.00 USD++ per person per night. Each room with maximum number of occupants per room: 3 persons including children. Supplements are subject to 5% service charge and 10% tax.",
        img: ImageDeluxe,
        area: '0 SQUARE METRES',
        equip: [
            EquipmentList.Lounge,
            EquipmentList.Wifi,
            EquipmentList.AirConditioner,
            EquipmentList.Breakfast
        ]
    }
}