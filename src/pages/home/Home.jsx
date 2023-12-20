import React from 'react'
import Footer from '../../components/footer/Footer'
import hexagon from "../../assets/Hexagon.png"
import img1 from "../../assets/img-i.png"
import img2 from "../../assets/img-ii.png"
// import img3 from "../../assets/img-iii.png"
// import img4 from "../../assets/img-iv.png"
// import img5 from "../../assets/img-v.png"
// import img6 from "../../assets/img-vi.png"
import gamePlay from "../../assets/gameplay-icon.png"
import swords from "../../assets/swords-icon.png"
import shield from "../../assets/shield-icon.png"
import DefaultButton from '../../components/buttons/DefaultButton'
import DefaultCard from '../../components/cards/DefaultCard'
import Header from '../../components/header/Header'
import { AiFillThunderbolt } from "react-icons/ai";
import { FaChevronDown } from 'react-icons/fa'

const Home = ({toggleMenu}) => {
  
  const scrollToElement = (elementId)=>{
    const element = document.getElementById(elementId)
    if(element){
      element.scrollIntoView()
    }
  }

  return (
    <> 
      <div className='page home'>
        <div className='content'>
          <Header toggleMenu={toggleMenu} />
          {/* Hero section */}
          <div className='section hero' id='#home'>
            <div className='go-down' onClick={()=>{
              scrollToElement("about")
            }}>
              <FaChevronDown />
            </div>

            <div className='left'>
              
              <h1>
                Unleash your survival instincts in a futuristic apocalypse
              </h1>

              <p>
                Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.
              </p>

              <div className='actions-holder'>
                <DefaultButton text={"Download"} width={202} height={40} isVector={false} action={()=>{
                  scrollToElement("download")
                }} />
                <DefaultButton text={"Learn More"} width={202} height={40} type={"outline"} action={()=>{
                  scrollToElement("about")
                }} />
              </div>

              <div className='cards-holder'>
                
                <DefaultCard width={200} height={231} text={"Gameplay and Textures"} action={()=>{
                  scrollToElement("about")
                }} iconSrc={gamePlay} />
                
                <DefaultCard width={200} height={231} text={"Items and Collectibles"} action={()=>{
                  scrollToElement("about")
                }} iconSrc={swords} />
              
                <DefaultCard width={200} height={231} text={"Heroes and Game Locations"} action={()=>{
                  scrollToElement("about")
                }} iconSrc={shield} />
              
              </div>
            
            </div>
            
            <div className='right'>
              <img src={hexagon} alt='' className='hexagon' />
              <img src={img1} alt='' className='character' />
              <div className='line-cut'>
                <div className='downloads'>
                  <span>1,435,997+</span> Downloads <AiFillThunderbolt />
                </div>
              </div>
            </div>
          
          </div>
          
          {/* About section */}
          <div className='section about' id='about'>
            <div className='text'>
              <h2>Harness the Power Of Innovation In A Game Of Survival</h2>
              <p>
              Discover unique mechanics and enhancements that take your gaming experience to new heights.
              </p>
            </div>
            <div className='img-holder'>
              <img src={img2} alt='' />
            </div>
            
            <DefaultCard iconSrc={gamePlay} text={'Intense Survival Gameplay'} hideBtn={true} details={"Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse."} />

            <DefaultCard iconSrc={gamePlay} text={'Cooperative Multiplayer'} hideBtn={true} details={"Join forces with friends or other players in cooperative multiplayer mode. Tackle challenging missions together, coordinate strategies, and combine your unique abilities."} />

            <DefaultCard iconSrc={gamePlay} text={'Tactical Combat and Customization'} hideBtn={true} details={"Engage in adrenaline-pumping combat encounters, utilizing a range of futuristic weapons, gadgets, and abilities. Customize your play style, strategize your approach, and outmaneuver enemies for tactical advantage."} />
          </div>

          {/* Download section */}
          <div className='section download' id='download'>
            Download
          </div>

          {/* Faqs section */}
          <div className='section faqs' id='faqs'>
            Faqs
          </div>

          {/* footer */}
          <Footer />
        
        </div>

      </div>
    </>
  )
}

export default Home