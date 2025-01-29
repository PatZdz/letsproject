import { motion } from 'framer-motion';

interface PricingCardProps {
  isSpecial?: boolean;
}

interface PriceRowProps {
  title: string;
  price: string;
  isTotal?: boolean;
}

const PriceRow = ({ title, price, isTotal }: PriceRowProps) => (
  <div className="flex justify-between items-center">
    <span className={isTotal ? 'font-bold' : ''}>{title}</span>
    <span className={`${isTotal ? 'text-xl' : ''} font-bold`}>{price}</span>
  </div>
);

export const PricingCard = ({ isSpecial }: PricingCardProps) => (
  <motion.div
    whileHover={{y: -4}}
    className={`${
      isSpecial 
        ? 'bg-[#3257A5] text-white' 
        : 'bg-white'
    } rounded-xl p-8 relative`}
  >
    {isSpecial && (
      <div className="absolute -top-4 right-8 bg-red-600 text-white px-4 py-2 rounded-lg font-bold transform -rotate-2 shadow-lg">
        OSZCZĘDZASZ 5 000 ZŁ!
      </div>
    )}
    
    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
      {isSpecial ? 'Oferta Specjalna' : 'Oferta Standardowa'}
    </h3>
    
    <div className="space-y-3 md:space-y-4">
      <PriceRow 
        title="2 strony internetowe" 
        price={isSpecial ? '13 999 zł' : '16 000 zł'} 
      />
      <PriceRow 
        title="2 logo" 
        price={isSpecial ? 'GRATIS!' : '3 000 zł'} 
      />
      <div className="flex justify-between items-start">
        <div className="flex flex-col md:flex-row">
          <span>Umowa retainerska</span>
          <span className="md:ml-1 font-bold">({isSpecial ? '12' : '6'} miesięcy)</span>
        </div>
        <span className="font-bold">4 000 zł</span>
      </div>
      <div className={`pt-4 border-t ${isSpecial ? 'border-white/20' : 'border-gray-200'}`}>
        <PriceRow 
          title="Razem" 
          price={isSpecial ? '17 999 zł' : '23 000 zł'} 
          isTotal 
        />
      </div>
    </div>

    {isSpecial && (
      <div className="mt-6 p-4 bg-white/10 rounded-lg">
        <h4 className="text-lg font-bold mb-4">Przyszłe korzyści:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <span className="mr-2">✓</span> Kolejne strony za 5 500zł za sztukę
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Kolejne logo za 500zł za sztukę
          </li>
        </ul>
      </div>
    )}
  </motion.div>
);
