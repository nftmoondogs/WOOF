import { apple, bill, google, collage } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionImgReverse} sm:pt-0 pb-12`}>
  <img src={collage} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-9 pb-44 sm:pl-32"  />



</div>

<div className={`${layout.sectionInfo} sm:flex drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pr-32`}>
  <h2 className={`${styles.heading5}`}>WOOF Token
 <br className="sm:block hidden" /> </h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  WOOF is the one of the very first Solana dog coin for the people, by the people with 50% of the total supply airdropped to the Solana community. Here to get bring people together and create the most savage community of the web3 space. 
  </p>



</div>
   </section>
  )


export default Billing