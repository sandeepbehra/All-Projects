import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={style.navbar}>
     <div className={style.logo}>
        <img src='./images/Frame.png'></img>
     </div>
     <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     </div>
   </div>
  )
}

export default Navigation