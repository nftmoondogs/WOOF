const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading6: "font-pt flex-1 xs:text-[50px] text-[30px] text-purple xs:leading-[60.8px] leading-[40px] sm:leading-[50px]",
    heading5: "font-pt flex-1 xs:text-[50px] text-[30px] text-creamgreen xs:leading-[60.8px] leading-[40px] sm:leading-[50px]",
    heading4: "font-pt flex-1 xs:text-[50px] text-[30px] text-goldenyellow xs:leading-[60.8px] leading-[40px] sm:leading-[50px]",
    heading3: "font-sydney flex-1 xs:text-[50px] text-[30px] text-white xs:leading-[110.8px] leading-[40px] sm:leading-[50px]",
    heading2: "font-sydney font-semibold xs:text-[50px] text-[30px] text-goldenyellow xs:leading-[76.8px] leading-[40px] sm:leading-[50px] w-full",
    paragraph: "font-mon font-normal text-white text-justify text-[18px] leading-[30.8px]",
    paragraph2: "font-mon font-normal text-creamgreen text-justify text-[18px] leading-[30.8px]",
    paragraph3: "font-mon font-pt font-semibold text-goldenyellow text-justify text-[30px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-0 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;
  

 