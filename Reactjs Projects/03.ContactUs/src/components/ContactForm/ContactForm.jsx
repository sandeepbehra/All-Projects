import { useState } from 'react';
import Button from '../Buttons/Button'
import style from './ContactForm.module.css'
import { LuMessageSquareMore } from "react-icons/lu";
import { MdCall } from "react-icons/md";


const ContactForm = () => {


  function onSubmit(e){
  e.preventDefault()

  setName(e.target[0].value)
  setEmail(e.target[1].value)
  setAddress(e.target[2].value)


  }

  const[name,setName] = useState(" ")
  const[email,setEmail] = useState(" ")
  const[address,setAddress] = useState(" ")

  function btnClick()
  {
    console.log("clicked ok")
  }
  return (
    <div className={style.main_section}>
     <div className={style.left_section}>
     <div className={style.header_btn}>
     <Button text ={"VIA SUPPORT CHAT"} icon ={<LuMessageSquareMore />}></Button> 
     <Button  text ={"VIA CALL"} icon ={<MdCall />}></Button> 
     </div>
     <div>
     <Button  btn ={btnClick} text ={"VIA EMAIL FORM"} isOutline = {true} icon ={<LuMessageSquareMore />}></Button> 
     </div>
     


     <div >
      <form onSubmit={onSubmit}>
      <div className={style.form_div}>
        <div  className={style.form_content}>
       
       <label htmlFor='name'>Name</label>
       <input type='text'  name='name'></input>
       </div>
       <div  className={style.form_content}>
       <label htmlFor='email'>Email</label>
       <input type='email'  name='email'></input>
       </div>
       <div  className={style.form_content}>
       <label htmlFor='name'>Address</label>
       <textarea rows={6}></textarea>
       </div>
       
        <div className={style.subBtn}>
     <Button text ={"Submit"} ></Button> 

        </div>
        </div>

      </form>
     </div>

<div>
  {
    name+" "+email+" "+address
  }
</div>




     </div>


     <div className={style.right_section}>
     <img src='images/service.png'></img>
     </div>
    </div>
  )
}

export default ContactForm