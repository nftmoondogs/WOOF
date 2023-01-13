import { apple, bill, google, woof } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionImgReverse} sm:pt-0`}>
  <img src={woof} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-36 sm:pl-32"  />



</div>

<div className={`${layout.sectionInfo} sm:flex drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pr-32`}>
  <h2 className={`${styles.heading4}`}>Twitter Spaces! 
 <br className="sm:block hidden" /> Every single day.</h2>
  <p className={`${styles.paragraph2} pt-6 sm:pb-96 pt-0.5`}>
  In our Woof Space Twitter spaces, which we host on our Twitter, we regularly welcome 30+ Founders of the most eagerly awaited new Solana NFT projects. We provides these Projects $WOOF for their community members in return of them using $WOOF in their project's ecosystem, and in exchange, they add value to our holders by offering a large number of their WL spots to our community. 
  </p>



</div>
   </section>
  )


export default Billing