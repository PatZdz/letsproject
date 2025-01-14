'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ClientLogos() {
    const [showFirstSet, setShowFirstSet] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstSet(prev => !prev);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 items-center -mx-4">
                    {showFirstSet ? (
                        <>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_1.svg"
                                    alt="Client Logo 1"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_2.svg"
                                    alt="Client Logo 2"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_3.svg"
                                    alt="Client Logo 3"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_4.svg"
                                    alt="Client Logo 4"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_5.svg"
                                    alt="Client Logo 5"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_6.svg"
                                    alt="Client Logo 6"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_7.svg"
                                    alt="Client Logo 7"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="vectors/client_logo_8.svg"
                                    alt="Client Logo 8"
                                    width={120}
                                    height={45}
                                    className="opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
