import React from 'react'

const page = () => {



   const vd = {
    video_name:"Introducing Aeris | Defeat Boring | Brand Film"
  }

const des = []

  const yt = {
    channel_logo:"url",
    Channel_name:"TATA CARS",
    subcount:"511k",
    likes:"332",
    share_btn:"url_share"
  }
  const description = {
    viewcount:"4161",
    up_date:"Sep 25,2026",
    hashtags:["#Tataareis ", "TATA",  ],
    details:" For those who loves adventure",



    comments:["hi","nice car","wow"]

  }
  const name1 = "Ameen"
  console.log(vd)
  console.log(yt)
  console.log(description)
  return (
    <div>

      <div>
        <h1 className='text-8xl font-bold text-amber-500'>This is my first next.js Project.</h1>
        <p className='text-4xl font-extrabold text-'>{name1}</p>
      </div>
    </div>
  )
}

export default page
