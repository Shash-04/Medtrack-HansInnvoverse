import { useEffect } from 'react';

interface Feature {
    title: string;
    info: string;
}

interface FeatureCardsProps {
    features?: Feature[];
}

const FeatureCards: React.FC<FeatureCardsProps> = ({ features = defaultFeatures }) => {
    useEffect(() => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('slide-in');
            }, index * 200);
        });
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card opacity-0 transform translate-y-8 
                            rounded-xl bg-gradient-to-br from-blue-600/90 to-purple-600/90 
                            backdrop-blur-sm p-6 sm:p-8
                            transition-all duration-500 ease-out
                            hover:translate-y-0 hover:scale-105 hover:shadow-2xl
                            shadow-lg shadow-teal-500/20
                            border border-white/20
                            relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                                {feature.title}
                            </h4>
                            <p className="text-white/90 leading-relaxed text-base sm:text-lg">
                                {feature.info}
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm -z-0"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const defaultFeatures: Feature[] = [
    {
        title: "Smart Inventory Control",
        info: "Real-time tracking, automated alerts, and efficient expiration management."
    },
    {
        title: "Boosted Efficiency",
        info: "Streamlined processes and intuitive interface save time and effort."
    },
    {
        title: "Pinpoint Accuracy",
        info: "Minimize errors in stock counting, data entry, and dispensing."
    },
    {
        title: "Enhanced Customer Service",
        info: "Quick access to stock info and faster prescription fulfillment."
    },
    {
        title: "Expert Support",
        info: "Comprehensive training and responsive customer support."
    }
];

export default FeatureCards;