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
                className="py-[114px] rounded-[24px]"
                style={{
                    backgroundImage: "url('/images/countupbg.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    margin: "0px 48px",
                }}
            >
                <div className="w-[597px] pl-[72px]">
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
                        <div className="mt-[94px] text-white grid grid-cols-3 gap-[48px]">
                            <div className="text-center">
                                <Title className={"text-[40px] text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={32} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px]"}>Improvement in Open Rates</Description>
                            </div>
                            <div className="text-center">
                                <Title className={"text-[40px] text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={75} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px]"}>Improvement in Ramp Time</Description>
                            </div>
                            <div className="text-center">
                                <Title className={"text-[40px] text-primary font-bold mb-[10px]"}>
                                    {start && <CountUp start={0} end={35} duration={3} />}%
                                </Title>
                                <Description className={"text-[20px]"}>Improvement in Meetings Booked</Description>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    );
}

export default CountUpSection;
