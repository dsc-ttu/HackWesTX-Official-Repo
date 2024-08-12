import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";

const RegistrationPage = () => {
    return (
        <Grid container overflow="clip">
            <div className="flex flex-col justify-center w-full h-full gap-y-5">
                <div className="my-4 flex flex-col justify-center text-center font-light text-4xl w-3/4 gap-6 mx-auto">
                    <div>
                        Register for HackWes
                        <div className="inline text-yellow-700">TX</div> V.
                    </div>
                    <div className="text-3xl">
                        Reload the page if you don't see anything.
                        Click here to go <Link href={'/2024'} className="inline text-yellow-700">back.</Link></div>
                </div>

                {/* Embed the Townscript iframe */}
                <div className="flex justify-center my-8">
                    <iframe
                        id="ts-iframe"
                        src="https://www.townscript.com/v2/widget/hackwestx-v-2024-113224/booking"
                        frameBorder="0"
                        height="600"
                        width="80%"
                        title="Townscript Booking"
                    ></iframe>
                    
                </div>

                <div className="flex flex-col mx-auto w-4/5 my-8">
                    <div className="text-center font-light text-3xl w-3/4 gap-6 mx-auto my-8">
                        For any additional questions,{" "}
                        <a
                            className="text-yellow-700 m-0 p-0"
                            href="mailto:contact@hackwestx.tech"
                        >
                            contact us.
                        </a>
                    </div>
                </div>
            </div>
        </Grid>
    );
};

// Ensure no layout is applied
RegistrationPage.getLayout = (page: React.ReactElement) => page;

export default RegistrationPage;
