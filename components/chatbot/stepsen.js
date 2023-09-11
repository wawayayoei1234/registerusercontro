import { router } from "next/router";

function Information(){
  router.replace("/") ;
  return <p>This is our information page.</p>
 }

function Solution(){
  router.replace("/") ;
  return <p>This is our solution's information page.</p>
 }

 function Contact(){
  router.replace("/contact") ;
  return <p>This is our contact information page.</p>
 }

export default [
  {
    id: "1",
    message: "Hi there! What can we do for you?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "Who are you?", label: "Who are you?", trigger: "3" },
      {
        value: "What can you do for me?",
        label: "What can you do for me?",
        trigger: "5",
      },
      {
        value: "How can I contact you?",
        label: "How can I contact you?",
        trigger: "7",
      },
    ],
  },
  {
    id: "3",
    message:"We are Authweiler.",
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
    message:"We have various solutions to meet all types of customers' requirements.",
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
    message:"You can contact us in many ways.",
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
      { value: "Ask for help in other inquiries.", label: "Ask for help in other inquiries.", trigger: "1" },
    ],
  },
];