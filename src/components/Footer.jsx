import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col pr-12 pl-12 border-t-[1px] border-t-[#3F3E45]`}>
   
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 pb-15 ">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white pb-6">
        Copyright Ⓒ 2023 WOOF. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 pb-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
          
        ))}
      </div>
    </div>
    <div className={`${styles.flexCenter} ${styles.paddingY} w-full border-t-[1px] border-t-[#3F3E45]`}> </div>
  </section>




);



export default Footer;
