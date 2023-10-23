import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import background1 from '../../images/img1.jpg'
import background2 from '../../images/img5.jpg'
import background3 from '../../images/img3.jpg'

export default function CardList() {
  return (
    <div className=' mt-3 flex flex-col space-y-5  md:flex-row  md:space-x-7 md:space-y-0'>
    <Card className="md:max-w-[24rem] lg:max-w-[24rem] max-w-[48rem] overflow-hidden" >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src={background1}
          alt="ui/ux review check"
          className=' w-full'
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Dolore magna aliqua
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
    </Card>
    <Card className="md:max-w-[24rem] lg:max-w-[24rem] max-w-[48rem] overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <img
       src={background2}
        alt="ui/ux review check"
        className=' w-full'
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h4" color="blue-gray">
        Morbe eieifend a libero
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire others.
      </Typography>
    </CardBody>
   
    </Card>
    <Card className="md:max-w-[24rem] lg:max-w-[24rem] max-w-[48rem] overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      <img
        src={background3}
        alt="ui/ux review check"
        className=' w-full'
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h4" color="blue-gray">
      Morbe eieifend a libero
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire others.
      </Typography>
    </CardBody>
    
    </Card>
    </div>
    
  )
}
