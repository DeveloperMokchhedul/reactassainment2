import React, { useState } from 'react';
import Title from './common/Title';
import Styletext from './common/Styletext';
import Description from './common/Description';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function CountUpSection() {
    const [start, setStart] = useState(false);

    return (
        <div className="bg-bg-primary">
            <div
                className="md:py-[114px] py-[32px] px-[24px] rounded-[24px]"
                style={{
                    backgroundImage: "url('/images/countupbg.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    margin: "0px 24px",
                }}
            >
                <div className="md:w-[597px]  md:pl-[72px]">
                    <Title className={"text-[32px] font-semibold leading-[39px]"}>
                        Allocate effort where your reps make an impact.
                    </Title>
                    <Styletext className={"text-primary text-[32px] leading-[39px] tracking-[-1%]"}>
                        Let us handle the rest.
                    </Styletext>
                    <Description className={"mt-[17px] text-[20px]"}>
                        Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
                    </Description>
                    <ScrollTrigger onEnter={() => setStart(true)} onExit={() => setStart(false)}>
                        <div className="mt-[30px] md:mt-[94px] text-white md:grid md:grid-cols-3 text-start md:gap-[48px]">
                            <div className="text-center  ">
                                <Title className={"text-[40px] text-start md:text-center text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={32} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px] text-start md:text-center"}>Improvement in Open Rates</Description>
                            </div>
                            <div className="text-center mt-[32px] md:mt-[0px]">
                                <Title className={"text-[40px] text-start md:text-center text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={75} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px] text-start md:text-center"}>Improvement in Ramp Time</Description>
                            </div>
                            <div className="text-center mt-[32px] md:mt-[0px]">
                                <Title className={"text-[40px] text-start md:text-center text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={35} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px] text-start md:text-center"}>Improvement in Meetings Booked</Description>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    );
}

export default CountUpSection;
