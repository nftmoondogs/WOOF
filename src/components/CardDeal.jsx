import { card } from "../assets"
import styles, { layout } from "../style"
import { door } from "../assets"

const CardDeal = () => (
    <section className={layout.section}>
<div className={`${layout.sectionInfo} drop-shadow-2xl sm:pt-52 sm:pb-0 sm:pl-32`}>
  <h2 className={`${styles.heading4}`}>A token built with utility & community at the foundation</h2>
  <p className={`${styles.paragraph} pt-6 sm:pb-96 pt-0.5`}>
  we’re no strangers to building with utility in mind. That’s why Woof Token is dedicated to bring as many use cases of the coin as possible.
  </p>


</div>

<div className={`${layout.sectionImg}sm:pt-0`}>
  <img src={door} alt="billing"
  className="w-[75] sm:flex relative z-[5] drop-shadow-2xl sm:pt-0 pb-52 sm:pr-32" />
</div>
    </section>
  )


export default CardDeal