import Image from 'next/image';
import React from 'react';

const OurProducts = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 text-center mb-16 w-full">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products and Partnerships</h2>
                        <p className="text-gray-600 mt-4 text-[15px] md:text-base max-w-2xl mx-auto">
                            We partner with local farmers in Ogbomosho, Nassarawa, and Kogi to source the best quality products. We are available to export anywhere around the world at affordable, competitive prices.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Raw Cashew Nut (RCN)</h3>
                            <p className="text-gray-500">
                                We specialize in high-quality Raw Cashew Nuts with 180 to 220 nut counts
                                and a strong Kernel Output Ratio (KOR).
                            </p>

                            <p className="text-gray-500">
                                To build quality and trust, we are cultivating our own plantation in Ogbomosho in several acres,
                                with over 1,000 trees grown from premium Brazilian gumbo seedlings.
                            </p>

                            <p className="text-gray-500">
                                Raw cashew nuts are widely used for edible kernels, snacks,
                                confectioneries, oil extraction, and food processing industries.
                            </p>

                            <p className="text-gray-500">
                                We work with NAFDAC and relevant authorities to ensure safe export standards
                                for local and international markets.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-48">
                            <Image src="/imgs/img2 (1).jpeg" layout="fill" objectFit="cover" alt="Cashew Collage Image 1" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/img2 (2).jpeg" layout="fill" objectFit="cover" alt="Cashew Collage Image 2" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/img2 (5).jpeg" layout="fill" objectFit="cover" alt="Cashew Collage Image 3" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/img2 (4).jpeg" layout="fill" objectFit="cover" alt="Cashew Collage Image 4" className="rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    {/* Image will be added here for Palm Oil */}
                    <div className="grid grid-cols-2 gap-4 order-2">
                        <div className="relative h-48">
                            <Image src="/imgs/palmoil (2).jpg" layout="fill" objectFit="cover" alt="Palm Oil Collage Image 1" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/palmoil (2).png" layout="fill" objectFit="cover" alt="Palm Oil Collage Image 2" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/palmoils (3).jpg" layout="fill" objectFit="cover" alt="Palm Oil Collage Image 3" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/palmoil (1).png" layout="fill" objectFit="cover" alt="Palm Oil Collage Image 4" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 md:order-2">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Palm Oil</h3>
                            <p className="text-gray-500">
                                We cultivate and partner with trusted palm plantations to source
                                premium fresh fruit bunches for quality palm oil production.
                            </p>

                            <p className="text-gray-500">
                                Our palm oil is carefully processed to maintain its natural rich color,
                                freshness, and nutritional value.
                            </p>

                            <p className="text-gray-500">
                                Suitable for domestic use, food industries, and export markets,
                                we maintain reliable supply all year round.
                            </p>

                            <p className="text-gray-500">
                                We also work with NAFDAC and regulatory bodies to ensure international quality standards.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Ginger</h3>
                            <p className="text-gray-500">
                                We source premium fresh ginger directly from experienced farmers
                                and carefully select only high-grade produce.
                            </p>

                            <p className="text-gray-500">
                                Our ginger is cleaned, sorted, and processed into dried products
                                suitable for food, beverages, medicine, and industrial use.
                            </p>

                            <p className="text-gray-500">
                                Known for strong aroma, rich flavor, and long shelf life,
                                our ginger meets international export expectations.
                            </p>

                            <p className="text-gray-500">
                                We are available to export anywhere in the world at affordable,
                                competitive prices.
                            </p>
                        </div>
                    </div>
                    {/* Image will be added here for Ginger */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-48">
                            <Image src="/imgs/gingerdry (1).png" layout="fill" objectFit="cover" alt="Ginger Collage Image 1" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/gingerdry (2).png" layout="fill" objectFit="cover" alt="Ginger Collage Image 2" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/gingerdry (3).png" layout="fill" objectFit="cover" alt="Ginger Collage Image 3" className="rounded-lg" />
                        </div>
                        <div className="relative h-48">
                            <Image src="/imgs/gingerdry (4).png" layout="fill" objectFit="cover" alt="Ginger Collage Image 4" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;