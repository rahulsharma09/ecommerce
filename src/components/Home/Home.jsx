import React from 'react'
import Products from '../Products/Products'
import Carousal from '../Carousal/Carousal'
import MultipleCard from '../MultipleCard/MultipleCard'
import './Home.css'

const Home = () => {
  let multipleItemProducts = [
    {
      "title":"Home appliances | Up to 55% off",
      "images": [
        {
          "link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
          "title":"Air Conditioners"
        },
        {
          "link" : "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
          "title":"Refrigirators"
        },
        {
          "link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
          "title": "Microwaves"
        },
        {
          "link":"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
          "title":"Washing Machines"
        }
      ]
    },
    {
      "title":"Up to 60% off | Professional tools, testing",
      "images": [
        {
          "link":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
          "title": "Professional Tools"
        },
        {
          "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg",
          "title": "Measuring Instruments"
        },
        {
          "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg",
          "title": "Cleaning Supplies"
        },
        {
          "link":"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg",
          "title": "Medical Supplies"
        },
        
      ]
    },
    {
      "title":"Up to 60% off | Styles for women",
      "images": [
        {
          "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
          "title": "Women's Clothing"
        },
        {
          "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
          "title": "Footwear+Handbags"
        },
        {
          "link" : "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
          "title": "Watches"
        },
        {
          "link": "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
          "title": "Fashion jwellery"
        },
      ]
    },
    {
      "title":"Up to 60% off | Styles for men",
      "images": [
        {
          link:"https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          title:"Clothing"
        },
        {
          link: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
          title:"Footwear"
        },
        {
          link: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
          title:"Watches"
        },
        {
          link: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
          title:"Bags & luggage"
        }
      ]
    },
  ]
  return (
    <div>
      <Carousal />
      <section className='prod-section ml-4 mr-4'>
        <MultipleCard multipleItemProducts={multipleItemProducts} />
        <h3>Today's Deals</h3>
        <hr />
        <Products />
      </section>
    </div>
  )
}

export default Home