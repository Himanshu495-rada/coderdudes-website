import img1 from './assets/telegram_bot.png'
import img2 from './assets/torrent-python.png'
import img3 from './assets/webview-android.png'
import img4 from './assets/qrscanner-android.png'
import img5 from './assets/esp-cam.png'
import img6 from './assets/timelapse-camera.png'
import blog1_data from './data/blog1_data'
import blog2_data from './data/blog2_data'
import blog3_data from './data/blog3_data'
import blog4_data from './data/blog4_data'
import blog5_data from './data/blog5_data'
import blog6_data from './data/blog6_data'

const PData = [
    {
        src: img1,
        card_title: "How to create Telegram Bot in Python ? | Telegram Bot in Python.",
        card_description: "In this blog we are going to learn how to make telegram bot in python to scan text from image. Also known as OCR bot.",
        card_link: "/project1",
        card_emb_link: "https://www.youtube.com/embed/H58P2gntbNw",
        card_code_link: "https://github.com/Himanshu495-rada/Telegtam-OCR-Bot",
        blog_data: blog1_data()
    },
    {
        src: img2,
        card_title: "How to download torrent using python| Python Projects Examples | Python Tutorial | python libtorrent",
        card_description: "In this blog we will learn how to download Torrent file using python.",
        card_link: "/project2",
        card_emb_link: "https://www.youtube.com/embed/V9CO2vyRkb8",
        card_code_link: "https://github.com/Himanshu495-rada/Torrent_python",
        blog_data: blog2_data()
    },
    {
        src: img3,
        card_title: "WebView in Android Studio | Quick Tutorial",
        card_description: "In this blog we are going to learn how to use WebView in android studio, and also we have updated one feature in our QR code scanner app ",
        card_link: "/project3",
        card_emb_link: "https://www.youtube.com/embed/FoUUIBANmng",
        card_code_link: "https://github.com/Himanshu495-rada/QRCodeScanner_App/tree/master",
        blog_data: blog3_data()
    },
    {
        src: img4,
        card_title: "How to make QR Code Scanner App From Scratch | Android Studio Projects Tutorial for Beginners.",
        card_description: "We are going to create An android app that has the ability to scan the QR code available.",
        card_link: "/project4",
        card_emb_link: "https://www.youtube.com/embed/RxUyEtXQySA",
        card_code_link: "https://github.com/Himanshu495-rada/QRCodeScanner_App/tree/master",
        blog_data: blog4_data()
    },
    {
        src: img5,
        card_title: "ESP32 CAM Beginners Tutorial | Face Detection | Getting Started",
        card_description: "In this blog we will learn how to use esp32 camera module. This will help you to build any kind projects easily.",
        card_link: "/project5",
        card_emb_link: "https://www.youtube.com/embed/iwa6q-ppHDY",
        card_code_link: "https://github.com/Himanshu495-rada/esp-camera-app/blob/main/WifiCam.ino",
        blog_data: blog5_data()
    },
    {
        src: img6,
        card_title: "BUILD A TIME LAPSE CAMERA | ESP32 CAM Beginners tutorial",
        card_description: "We are building time lapse camera using esp32 cam module with the help of micropython which is a similar to the python.",
        card_link: "/project6",
        card_emb_link: "https://www.youtube.com/embed/peTnIN9iicQ",
        card_code_link: "https://github.com/Himanshu495-rada/esp32-camera-micropython",
        blog_data: blog6_data()
    }
]

export default PData;