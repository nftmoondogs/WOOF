import { quotes } from "../assets"
import styles, { layout } from '../style';


const FeedbackCard = ({ content, name, title, img}) => (
  <div>
  <section id="clients" class="w-full text-center text-white pl:5">
    <div class="w-full px-0 py-24 mx-auto">
      <div class="text-center mb-20">

        <h1 class={`${styles.heading6}`}>
          Frequently Asked Question
        </h1>
       
      </div>
      <div class=" lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-left sm:pl-64 sm:pr-72 pl-5 pr-5">
        <div class="py-[24px] space-y-[8px] text-left">
          <details class="mb-4">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            Is there a Discord?
            </summary>

            <span>
            Yes, our devs created the best discord server ever for our community members and we will be launching it in few days!
            </span>
          </details>

        
<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
            How are the $WOOF distributed?
            </summary>

            <span>
           50% of the total supply will be airdropped to the Solana community. 

           The 50% Airdrop will split as follows:
           20% to Solana community members who intracts with our socials. [ Will be sent instantly using "Hey Wallet"]
           15% to early book open traders.
           10% to Solana artists and collectors. 
           5% to Solana developers.
            </span>
          </details>


<details class="mb-4 pt-5 border-t-[1px] border-t-[#3F3E45]">
            <summary class="font-rav font-semibold text-goldenyellow rounded-md py-2 px-4">
              I am unable to swap my $WOOF token yet?
            </summary>

            <span>
              We will provide liquidity to the $WOOF token after reaching 10k followers on our twitter. Before that you can try to collect as much $WOOF in airdrops as you can. 
            </span>
          </details>


        </div>
      </div>
    </div>
  </section>
</div>
  )


export default FeedbackCard