import user1 from '../assets/profile-pictures/user1.jpg'
import user2 from '../assets/profile-pictures/user2.jpg'
import user3 from '../assets/profile-pictures/user3.jpg'
import user4 from '../assets/profile-pictures/user4.jpg'
import user5 from '../assets/profile-pictures/user5.jpg'
import user6 from '../assets/profile-pictures/user6.jpg'
import user7 from '../assets/profile-pictures/user7.jpg'
import user8 from '../assets/profile-pictures/user8.jpg'
import user9 from '../assets/profile-pictures/user9.jpg'
import user10 from '../assets/profile-pictures/user10.jpg'
import user11 from '../assets/profile-pictures/user11.jpg'
import post1 from '../assets/post-pictures/post1.jpg'
import post2 from '../assets/post-pictures/post2.jpg'
import post3 from '../assets/post-pictures/post3.jpg'
import { House, UsersRound, Store, CircleUserRound, Bell, Menu,Clock4,Bookmark,MonitorPlay,Users,CalendarX,Airplay,CircleHelp,Settings,LayoutGrid,Grip,CarFront, Vault, Sofa, PhoneIcon, Smartphone, Book, Milk, ShipWheel, Pencil, WashingMachine, Amphora, HeartPulse, Frame, Paintbrush,} from 'lucide-react'
import Bodylotion from '../assets/market-article/Bodylotion.jpg'
import computer from '../assets/market-article/computer.jpg'
import Dress from '../assets/market-article/Dress.jpg'
import guitar from '../assets/market-article/guitar.jpg'
import pants from '../assets/market-article/pants.jpg'
import Phone from '../assets/market-article/Phone.jpg'
import Shoes from '../assets/market-article/Shoes.jpg'
import womanbag from '../assets/market-article/womanbag.jpg'




export const UserDatas = [
    {
        user:"Marc antoine",
        Img: user1,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post1,
        likeCount:0,
    },
    {
        user:"Mary Roberts",
        Img: user2,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
    {
        user:"antoine Roberts",
        Img: user3,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post3,
        likeCount:0,
    },
    {
        user:"Chris",
        Img: user4,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
    {
        user:"Roger mayer",
        Img: user5,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
    {
        user:"Jane Rowland",
        Img: user6,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post1,
        likeCount:0,
    },
    {
        user:"julie Roberts",
        Img: user7,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post3,
        likeCount:0,
    },
    {
        user:"joseph Roberts",
        Img: user8,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
    {
        user:"Corine Ruth",
        Img: user9,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post3,
        likeCount:0,
    },
    {
        user:"Chen",
        Img: user10,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
    {
        user:"Grace Isle",
        Img: user11,
        text: "This is our first post on this platform, we are glad to be a part of this huge family and we really expect that our experience on your platform will be amazing, give us a like ",
        postPic: post2,
        likeCount:0,
    },
]

export const MenuLinks= [
    {
        mIcon: <House/>,
        mName:"Home",
        mLink:"/home",
    },
    {
        mIcon: <UsersRound/>,
        mName:"Friends",
        mLink:"/friends",
    },
    {
        mIcon: <Store/>,
        mName:"MarketPlace",
        mLink:"/market",
    },
    {
        mIcon: <CircleUserRound/>,
        mName:"Profile",
        mLink:"/profile",
    },
    {
        mIcon: <Bell/>,
        mName:"Notifications",
        mLink:"/notifications"
    },
    {
        mIcon: <Menu/>,
        mName:"Menu",
        mLink:"/menu",
    },
]

export const fDemands=[
    {
        fName: "Jack Barret",
        fPic:user2,
    },
    {
        fName: "John Barret",
        fPic:user3,
    },
    {
        fName: "Marc Morton",
        fPic:user4,
    },
    {
        fName: "Robbin Barret",
        fPic:user5,
    },
    {
        fName: "Roger Barret",
        fPic:user6,
    },
    {
        fName: "Chris Marc",
        fPic:user7,
    },
]

export const notContent=[
     
        "Aujourd'hui","Hier"
        
    
]

export const  Aujourdhui=[
    {
        sender:"John Jacobs",
        msg:"Commented your picture",
        sPic:user10,
    },
    {
        sender:"John Jacobs",
        msg:"Commented your picture",
        sPic:user11,
    },
]
export const Hier=[
    {
        sender:"John Jacobs",
        msg:"Commented your picture",
        sPic:user2,
    },
    {
        sender:"John Jacobs",
        msg:"Commented your picture",
        sPic:user3,
    },
    {
        sender:"John Jacobs",
        msg:"Commented your picture",
        sPic:user7,
    },
]

export const menuContents = [

    {
        mName:"Souvenirs",
        mIcon:<Clock4/>,
    },
    {
        mName:"Enregistrements",
        mIcon:<Bookmark className=""/>,
    },
    {
        mName:"Groupes",
        mIcon:<UsersRound/>,
    },
    {
        mName:"Video",
        mIcon:<MonitorPlay/>,
    },
    {
        mName:"MarketPlace",
        mIcon:<Store/>,
    },
    {
        mName:"Amis en ligne",
        mIcon:<Users/>,
    },
    {
        mName:"Fils",
        mIcon:<Airplay/>,
    },
    {
        mName:"Evenements",
        mIcon:<CalendarX/>,
    },
]

export const menuFooters =[

    { 
        mName:"Aide et assistance",
        mIcon:<CircleHelp/>,
    },
    { 
        mName:"Parametres et confidentialite",
        mIcon:<Settings/>,
    },
    { 
        mName:"Acces professionnel",
        mIcon:<LayoutGrid/>,
    },
    { 
        mName:"Autres Produits Meta",
        mIcon:<Grip/>,
    },

]

export const marketArticles = [
    {
        name:"Lotion",
        pic:Bodylotion,
        Price:"1500FC",
    },
    {
        name:"Ordinateur Gamer",
        pic:computer,
        Price:"1500$",
    },
    {
        name:"Robe",
        pic:Dress,
        Price:"25000FC",
    },
    {
        name:"Guitarre acoustique",
        pic:guitar,
        Price:"150$",
    },
    {
        name:"Pantalon Homme",
        pic:pants,
        Price:"3500FC",
    },
    {
        name:"Iphone 13",
        pic:Phone,
        Price:"350$",
    },
    {
        name:"Chaussures",
        pic:Shoes,
        Price:"45000FC",
    },
    {
        name:"Sac damme",
        pic:womanbag,
        Price:"15000FC",
    },
]

export const userInfo=[
    {
        name:"Marc Antoine",
        pic: user1,
        ban: user4,
    }
]


export const friendsList=[
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
    {
        name:"Marc Arthur",
        pic: user10,
        age: 19,
    },
]

export const categoriesList = [
    {
        name:"Antiquites et Objets de Collection",
        icon :<Amphora/>,
    },
    {
        name:"Electromenagers",
        icon :<WashingMachine/>,
    },
    {
        name:"Art et artisanat",
        icon :<Pencil/>,
    },
    {
        name:"Pieces automobiles",
        icon :<ShipWheel/>,
    },
    {
        name:"Bebes",
        icon :<Milk/>,
    },
    {
        name:"Livres, films et musique",
        icon :<Book/>,
    },
    {
        name:"Appareils electroniques ",
        icon :<Smartphone/>,
    },
    {
        name:"Meubles",
        icon :<Sofa/>,
    },
    {
        name:"Vide grenier",
        icon :<Vault/>,
    },
    {
        name:"Vehicule",
        icon :<CarFront/>,
    },
    {
        name:"Sante et Beaute",
        icon :<HeartPulse/>,
    },
    {
        name:"Articles d'interieur et decoration",
        icon :<Frame/>,
    },
    {
        name:"Amenagement interieur et outils ",
        icon :<Paintbrush/>,
    },
]