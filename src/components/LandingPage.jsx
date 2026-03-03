import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '../lib/utils';
import one from '../assets/1.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import three from '../assets/3.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';
import eight from '../assets/8.png';
import nine from '../assets/9.png';
import ten from '../assets/10.png';
import dollarImg from '../assets/dollar.png';

export default function LandingPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", email);
        alert(`Thanks! Email submitted: ${email}`);
        setEmail('');
    };

    return (
        <div className="relative w-full min-h-screen bg-[#FDFDFD] overflow-hidden font-sans flex flex-col items-center justify-center">

            {/* ====== ACETERNITY DOT BACKGROUND ====== */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
                )}
            />
            {/* Radial gradient mask for faded center look */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[52px] md:text-[52px] lg:text-[62px] font-bold tracking-tighter text-black leading-[1.05] mb-4"
                >
                    All <span className="text-gray-300 font-medium tracking-tight">[Hidden]</span> Opportunities.<br />
                    One Place.
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-[#86868b] text-[17px] font-medium tracking-tight mb-8"
                >
                    Stop consuming,{' '}
                    <span className="text-[#1d1d1f] font-semibold">Start Acting.</span>
                </motion.p>

                <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    onSubmit={handleSubmit}
                    className="relative w-full max-w-[460px] mx-auto p-1.5 rounded-full bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-black/10 focus-within:shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-6 pr-[130px] py-3 rounded-full focus:outline-none bg-transparent text-[17px] text-[#1d1d1f] font-medium placeholder:text-[#86868b] placeholder:font-normal"
                    />
                    <button
                        type="submit"
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 h-[42px] bg-[#1d1d1f] hover:bg-black hover:scale-105 active:scale-95 transition-all duration-300 rounded-full flex items-center justify-center text-white text-[15px] font-semibold tracking-wide shadow-sm"
                    >
                        Join Waitlist
                    </button>
                </motion.form>
            </div>


            {/* Six Image - Centre-Right Top */}
            <motion.div
                initial={{ opacity: 0, y: -30, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[6%] left-[55%] z-20"
            >
                <img src={six} alt="six" className="w-[320px] drop-shadow-[0px_25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>

            {/* Twitter & Seven Image */}
            <motion.div
                initial={{ opacity: 0, y: -30, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: -14 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="absolute top-[22%] left-[77%] z-20"
            >
                <img src={seven} alt="Twitter" className="w-[300px] drop-shadow-[0px_25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>

            {/* Email & Eight Image */}
            <motion.div
                initial={{ opacity: 0, y: -30, rotate: 3 }}
                animate={{ opacity: 1, y: 0, rotate: 10 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="absolute top-[47%] left-[75%] z-20"
            >
                <img src={eight} alt="Email" className="w-[250px] drop-shadow-[0px_25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>

            {/* Opportunity & Nine Image */}
            <motion.div
                initial={{ opacity: 0, y: 30, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 8 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className="absolute top-[62%] left-[65%] z-20"
            >
                <img src={nine} alt="Opportunity" className="w-[250px] drop-shadow-[0px_25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>
            {/* ===== TILTED MARQUEE STRIP ===== */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="absolute top-[74%] right-[-10%] w-[180%] overflow-hidden z-10 -rotate-[10deg] origin-bottom-right pointer-events-none"
            >
                <div className="flex gap-0 overflow-hidden py-1">
                    <div className="flex gap-6 animate-marquee whitespace-nowrap shrink-0 px-4">
                        {['Series A Announced', 'Hidden Opportunities', 'Find Accelerators', 'Ground Breakers', 'YC W26', 'Latents', 'Deal Flow', 'Missed Chances', 'OpenAI $40B', 'Investor Outreach', 'Stealth Mode', 'Term Sheet', 'Venture Capital', 'Seed Round'].map((t, i) => (
                            <span key={i} className="inline-flex items-center gap-2 bg-[#F0F0F0] text-[#B0B0B0] text-[13px] font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-[#E0E0E0]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8C8C8] inline-block shrink-0" />
                                {t}
                            </span>
                        ))}
                    </div>
                    <div aria-hidden className="flex gap-6 animate-marquee whitespace-nowrap shrink-0 px-4">
                        {['Series A Announced', 'Hidden Opportunities', 'Find Accelerators', 'Ground Breakers', 'YC W26', 'Latents', 'Deal Flow', 'Missed Chances', 'OpenAI $40B', 'Investor Outreach', 'Stealth Mode', 'Term Sheet', 'Venture Capital', 'Seed Round'].map((t, i) => (
                            <span key={i} className="inline-flex items-center gap-2 bg-[#F0F0F0] text-[#B0B0B0] text-[13px] font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-[#E0E0E0]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8C8C8] inline-block shrink-0" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-0 right-0 z-20"
            >
                <img src={ten} alt="Newspaper" className="w-[400px] drop-shadow-[0px_-20px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>

            {/*  Ground Breaker & Five Image */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-[8%] left-[0%] md:left-[20%] z-10"
            >
                <img src={five} alt="Ground Breaker" className="w-[240px] drop-shadow-[0px_10px_10px_rgba(139,32,21,0.8)]" />
            </motion.div>

            {/* One and SeriesA Image */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 10 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute top-[25%] left-[10%] md:left-[3%] z-20"
            >
                <img src={one} alt="SeriesA" className="w-[270px] drop-shadow-[0px_25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div>



            {/* Four & Find Accelerators Image */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: 20 }}
                animate={{ opacity: 1, x: 0, y: 50, rotate: -6 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-[48%] left-[2%] md:left-[6%] z-20"
            >
                <img src={four} alt="findAccelerators" className="w-[255px] drop-shadow-[0px_25px_20px_rgba(0,0,0,0.4)]" />
            </motion.div>

            {/* Show Me & Three Image */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                animate={{ opacity: 1, x: 0, y: 20, rotate: 7 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-[65%] left-[2%] md:left-[25%] z-20"
            >
                <img src={three} alt="ShowMe" className="w-[380px] drop-shadow-[0px_25px_20px_rgba(0,0,0,0.3)]" />
            </motion.div>

            {/* Nikhil Image - Right Side
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 10 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[50%] right-[10%] md:right-[4%] z-20"
            >
                <img src={nikhilImg} alt="Nikhil" className="w-[260px] md:w-[220px] drop-shadow-[0px_45px_20px_rgba(0,0,0,0.5)] rounded-2xl" />
            </motion.div> */}

            {/* Dollar Image (Bottom Center)
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-10 md:-bottom-35 left-1/2 -translate-x-1/2 z-20"
            >
                <img src={dollarImg} alt="Dollar" className="w-[400px] md:w-[600px] drop-shadow-[0px_-25px_40px_rgba(0,0,0,0.15)]" />
            </motion.div> */}

            {/* Dollar Image - Bottom Left 45deg */}
            <motion.div
                initial={{ opacity: 0, y: 280 }}
                animate={{ opacity: 1, y: 150 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="absolute bottom-5 left-10 z-20 rotate-30"
            >
                <img src={dollarImg} alt="Dollar" className="w-[340px] drop-shadow-[0px_-20px_40px_rgba(0,0,0,0.12)]" />
            </motion.div>


            {/* Bottom Left Lottie Animation */}
            <motion.div
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[2%] md:bottom-[0%] right-[10%] md:left-[8%] w-48 md:w-64 z-20 pointer-events-none"
            >
                <DotLottieReact
                    src="https://lottie.host/7a69ede1-1eca-49b8-82f7-17a0e04f68b4/aVFlcIgc4F.lottie"
                    loop
                    autoplay
                />
            </motion.div>

        </div>
    );
}
