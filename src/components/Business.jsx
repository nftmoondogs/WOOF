import { apple, bill, google, collage } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
   <section id="product" className={layout.sectionReverse}>

<div className={`${layout.sectionImgReverse} sm:pt-0`}>
  <img src={collage} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-36 sm:pl-32"  />



</div>

<div className={`${layout.sectionInfo} sm:flex drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pr-32`}>
  <h2 className={`${styles.heading4}`}>A collection built with
 <br className="sm:block hidden" />utility & community at<br className="sm:block hidden" /> the foundation.</h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  we’re no strangers to building with utility in mind. That’s why every Moondog is also your key to our private Discord – where you’ll have admittance to our gated channels.

Once inside, you will have exclusive access to events, airdrops, and access to the wls spots of the most anticipated upcoming NFT projects.
  </p>



</div>
   </section>
  )


export default Billing