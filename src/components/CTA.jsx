import { card } from "../assets"
import styles, { layout } from "../style"
import { door } from "../assets"
import { paw } from "../assets"

const CardDeal = () => (

  <section>



<div className={` w-full justify-center flex w-[100%] h-[100%] pt-44`}>
  <img src={paw} alt="billing" 
  className=" flex object-center drop-shadow-2xl sm:w-[20%] sm:h-[20%] w-[60%] h-[60%] " />
  
</div>

<div className={` w-full justify-center flex w-[100%] h-[100%] pb-44`}>
<a href="https://docs.google.com/forms/d/e/1FAIpQLScqrleKkYxYq81iZSy_VD3W3oyD4YMQjz9TmoTZiCtaiAWl_Q/viewform?usp=sf_link" target="_blank" rel="noreferrer"><button type="button" class="text-yellow-400 hover:text-white border justify-center flex object-center border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Enter Quest</button></a>
</div>
</section>
  )


export default CardDeal