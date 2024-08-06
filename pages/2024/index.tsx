import React from "react";
import Floating_Nav from "../../components/ui/2024/Floating-Nav";
import Image from "next/image";
import BannerImage from "../../assets/2024-assets/banner.png"
import {Poppins} from 'next/font/google'
import FrequentQuestions from "../../components/ui/2024/faq";
import Link from "next/link";
import { Divider } from "@mantine/core";
import SectionHeader from "../../components/ui/2024/sectionHeader";
import Footer from "../../components/ui/2024/NewFooter";
import NewCountdown from "../../components/ui/2024/NewCountdown"
import { LocationCity, Place} from "@mui/icons-material";
import ScheduleBloc from "../../components/ui/2024/ScheduleBloc";
import OurTeam from "../../components/individual/OurTeam";
import { Grid } from "@mui/material";


function Home_2024 (){
    return(
        <Grid container overflow='clip'>
    <div className="flex flex-col justify-center w-full h-full gap-y-5">
    <div className=" relative w-full flex justify-center" id="home">
    <Grid
        item
        xs={12}
    >
    <Image
    className=" rounded-b-3xl w-full min-w-fit "
    layout="responsive"
    src={BannerImage}
    alt='banner'
    width={1440}
    height={810}
    />
    <div className="absolute inset-0 flex  justify-center items-center font-poppins font-semibold leading-none text-blue-800 w-full">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl leading-none">
          HACKWESTX V
        </div>
    </div></Grid>
    
    {/* <div className="absolute justify-center content-center inset-0 flex font-poppins font-semibold text-5xl leading-none text-blue-800">September 14th and 15th 2024</div> */}
    </div>
    <Floating_Nav/>
    <div className=" my-4 flex flex-col justify-center text-center font-light text-3xl w-3/4 gap-6 mx-auto" >
        <div>
        HackWes<div className="inline text-yellow-700">TX</div> V is Texas Tech’s <div className="inline text-yellow-700">fifth</div> student-run hackathon.
        </div>
        <div>
        A hackathon is an event where participants, often working in teams, engage in <div className="inline text-yellow-700">intensive collaboration</div> to create innovative solutions to <div className="inline text-yellow-700">real world problems</div> within a limited time frame.
        </div>
        <div>
        HackWesTX is a <div className="inline text-yellow-700">24-hour</div> event.
        </div>
    </div>
    <Grid item xs={12} mt={10} px="auto">
    <ScheduleBloc />
    </Grid>
   
    
    <div className="flex flex-col mx-auto w-4/5 my-8">
        <SectionHeader header='FAQ' />
        <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
            For any additional questions <Link className=" text-yellow-700 m-0 p-0" href={'mailto:contact@hackwestx.tech'}>contact us.</Link>
        </div>
        <FrequentQuestions/>
    </div>
    <Footer/>
</div>  
</Grid>
    )
};

Home_2024.getLayout = (page: React.ReactElement) => page;

export default Home_2024;