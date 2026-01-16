import React, { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const LaunchCountdown: React.FC = () => {
    const calculateTimeLeft = () => {
        const launchDate = new Date('2026-02-19T00:00:00-03:00'); // 19/02/2026 às 00h (horário de Brasília)
        const now = new Date();
        const difference = launchDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => String(num).padStart(2, '0');

    const isLaunched = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    if (isLaunched) {
        return (
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-green-400">
                <div className="text-center mb-6">
                    <h3 className="text-white text-xl md:text-3xl font-extrabold mb-3">
                        🎉 Aplicativo Lançado!
                    </h3>
                    <p className="text-white/90 font-medium text-lg mb-6">
                        O futuro do cuidado pediátrico já chegou.
                    </p>
                    <a
                        href="#contato"
                        className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition-all transform hover:scale-105"
                    >
                        Solicitar Link de Download
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-yellow-300">
            <div className="text-center mb-4">
                <h3 className="text-[#0d1b2a] text-xl md:text-2xl font-extrabold mb-2">
                    🚀 Lançamento Oficial
                </h3>
                <p className="text-[#0d1b2a]/80 font-bold text-lg">19 de Fevereiro de 2026</p>
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg">
                    <div className="text-2xl md:text-4xl font-black text-[#0d1b2a] mb-1">
                        {formatNumber(timeLeft.days)}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-[#0d1b2a]/70 uppercase tracking-wide">
                        Dias
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg">
                    <div className="text-2xl md:text-4xl font-black text-[#0d1b2a] mb-1">
                        {formatNumber(timeLeft.hours)}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-[#0d1b2a]/70 uppercase tracking-wide">
                        Horas
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg">
                    <div className="text-2xl md:text-4xl font-black text-[#0d1b2a] mb-1">
                        {formatNumber(timeLeft.minutes)}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-[#0d1b2a]/70 uppercase tracking-wide">
                        Min
                    </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 text-center shadow-lg">
                    <div className="text-2xl md:text-4xl font-black text-[#0d1b2a] mb-1 animate-pulse">
                        {formatNumber(timeLeft.seconds)}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-[#0d1b2a]/70 uppercase tracking-wide">
                        Seg
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center">
                <p className="text-[#0d1b2a]/80 text-sm font-semibold">
                    ⏰ Faltam {timeLeft.days} dias para revolucionar o cuidado pediátrico!
                </p>
            </div>
        </div>
    );
};

export default LaunchCountdown;
