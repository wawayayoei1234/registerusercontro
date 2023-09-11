import { router } from "next/router";

function Information(){
  router.replace("/") ;
  return <p>และตอนนี้ฉันได้พาคุณไปที่หน้าข้อมูลของบริษัทแล้วค่ะ</p>
 }

function Solution(){
  router.replace("/") ;
  return <p>และตอนนี้ฉันได้พาคุณไปที่หน้าข้อมูลของโซลูชันแล้วค่ะ</p>
 }

 function Contact(){
  router.replace("/") ;
  return <p>และตอนนี้ฉันได้พาคุณไปที่หน้าข้อมูลสำหรับติดต่อพวกเราแล้วค่ะ</p>
 }
export default [
  {
    id: "1",
    message: "สวัสดีค่ะ ต้องการความช่วยทางด้านใดคะ",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "คุณเป็นใคร", label: "คุณคือใคร", trigger: "3" },
      {
        value: "คุณช่วยอะไรฉันได้บ้าง",
        label: "คุณช่วยอะไรฉันได้บ้าง",
        trigger: "5",
      },
      {
        value: "จะติดต่อคุณได้อย่างไร",
        label: "จะติดต่อคุณได้อย่างไร",
        trigger: "7",
      },
    ],
  },
  {
    id: "3",
    message:"พวกเราคือ บริษัท เดอะ รีโคฟเวอรี่ แอดไวเซอร์ จำกัด",
    trigger: "4",
  },
  {
    id: "4",
    component: (
      <div> 
        <Information />
      </div>
    ),
    asMessage: true,
    trigger: "9",
  },
  {
    id: "5",
    message:"พวกเรามีโซลูชันมากมายที่ตอบโจทย์ปัญหา และความต้องการของลูกค้าทุกท่าน",
    trigger: "6",
  },
  {
    id: "6",
    component: (
      <div> 
        <Solution/>
      </div>
    ),
    asMessage: true,
    trigger: "9",
  },
  {
    id: "7",
    message:"คุณสามารถติดต่อพวกเราได้หลากหลายช่องทาง",
    trigger: "8",
  },
  {
    id: "8",
    component: (
      <div> 
        <Contact/>
      </div>
    ),
    asMessage: true,
    trigger: "9",
  },
  {
    id: "9",
    options: [
      { value: "ขอความช่วยเหลือด้านอื่น ๆ", label: "ขอความช่วยเหลือด้านอื่น ๆ", trigger: "1" },
    ],
  },
];