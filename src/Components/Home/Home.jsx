import React from 'react'
import style from '../Home/Home.module.css'
import home from '../../Assets/home.jpeg'
import dinning from '../../Assets/dinning.png'
import living from '../../Assets/living.png'
import bedroom from '../../Assets/bedroom.png'
import beautiful from '../../Assets/b.PNG'
import beautiful2 from '../../Assets/b2.PNG'
import door from '../../Assets/door.png'
import portrait from '../../Assets/portrait.png'
import kitchen from '../../Assets/kitchen.png'
import lab from '../../Assets/lab.png'
import room from '../../Assets/room.png'
import table from '../../Assets/table.png'
import vase from '../../Assets/vase.png'
import chair from '../../Assets/chair.png'
import tabluea from '../../Assets/tabluea.png'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'


//const handleShowmore =() =>{
  //setVisibleProducts(visibleProducts + 12);
//}
export default function Home() {
  return (
    <div>
      <img src={home} className={`${style.profile}`} />
      <div className='container'>
      <div clssName={`${style.triangle}`}>
      <p className={`${style.address}`}>New Arrival</p>

      <p className={`${style.derma}`}>Discover Our New Collection</p>
      <p className={`${style.treat}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <button className={`${style.press}`}>BUY NOW</button>
    </div>
    </div>
    
    <div  className="container my-5 py-5">
   <p className={`${style.browse}`}> Browse The Range </p>
   <p className={`${style.collection}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
    <div className='container'>
    <div className='row'>
      <div className='col-sm-4'>
        <div className='card'>
          <img src={dinning} className={`${style.dinning}`}/>
        </div>
        <p className={`${style.text}`}>Dinning</p>
      </div>
      <div className='col-sm-4'>
        <div className='card'>
          <img src={living} className={`${style.living}`}/>
        </div>
        <p className={`${style.text}`}>Living</p>
      </div>
      <div className='col-sm-4'>
        <div className='card'>
          <img src={bedroom} className={`${style.bedroom}`}/>
          </div>
          <p className={`${style.text}`}>Bedroom</p>
        </div>
        </div>
    </div>
    <div className="container" my-5 py-5>
      <p className={`${style.products}`}>Our Products</p>
<FeaturedProducts/>
    </div>

  <div className='container'>
    <div className='row'>
      <div className='col-md-4'>
  <h2 className={`${style.beautiful}`}>
  50+ Beautiful rooms 
  inspiration
  </h2>
  <h5 className={`${style.designer}`}>Our designer already made a lot of beautiful prototipe of rooms that inspire you</h5>
  <button className={`${style.explore}`}>Explore More</button>
  </div>


<div className='col-md-4'>
  <img src={beautiful} className={`${style.bea}`}/>
</div>
<div className='col-md-4'>
<img src={beautiful2} className={`${style.be}`}/>
</div>
</div>
</div>
<div className='container my-5 py-5'>
  <h5 className={`${style.title1}`}>Share your setup with</h5>
  <h2 className={`${style.title2}`}>#FuniroFurniture</h2>
  <div className='container'>
  <img src={door} className={`${style.door}`}/>
  <img src={lab} className={`${style.lab}`}/>
  <img src={tabluea} className={`${style.tabluea}`}/>
  <img src={vase} className={`${style.vase}`}/>
  <img src={room} className={`${style.room}`}/>
  <img src={portrait} className={`${style.portrait}`}/>
  <img src={kitchen} className={`${style.kitchen}`}/>
  <img src={table} className={`${style.table}`}/>
  <img src={chair} className={`${style.chair}`}/>
 

  </div>
</div>
    </div>
    
  )
}
