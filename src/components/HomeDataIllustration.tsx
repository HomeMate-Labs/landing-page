
const HomeDataIllustration = () => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 max-w-3xl mx-auto overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* House with appliances */}
        <div className="w-full h-full max-w-2xl relative">
          {/* House outline */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[70%] bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"></div>
          
          {/* Roof */}
          <div className="absolute bottom-[70%] left-1/2 transform -translate-x-1/2 w-[90%] h-[20%] bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 skew-y-[-15deg]"></div>
          
          {/* Appliances - simplified */}
          <div className="absolute bottom-[10%] left-[30%] w-[15%] h-[25%] bg-gray-200 dark:bg-gray-600 rounded-md border border-gray-300 dark:border-gray-500">
            {/* Refrigerator */}
            <div className="absolute top-1/3 left-1/4 right-1/4 h-[2px] bg-gray-400"></div>
            <div className="absolute right-1/4 top-1/2 w-[4px] h-[4px] rounded-full bg-gray-400"></div>
          </div>
          
          {/* TV */}
          <div className="absolute bottom-[40%] left-[60%] w-[20%] h-[15%] bg-black rounded-md border border-gray-600">
            <div className="absolute inset-[2px] bg-blue-400/20 dark:bg-blue-500/20 rounded-sm"></div>
          </div>
          
          {/* Smart thermostat */}
          <div className="absolute bottom-[45%] left-[25%] w-[8%] h-[8%] bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
          </div>
          
          {/* Floating dollar signs over appliances */}
          <GoldCoin className="absolute top-[25%] left-[30%] animate-float" />
          <GoldCoin className="absolute top-[35%] left-[60%] animate-float [animation-delay:1s]" />
          <GoldCoin className="absolute top-[50%] right-[30%] animate-float [animation-delay:2s]" />
          <GoldCoin className="absolute top-[15%] right-[40%] animate-float [animation-delay:3s]" />
        </div>
      </div>
    </div>
  );
};

const GoldCoin = ({ className }: { className?: string }) => {
  return (
    <div className={`${className || ""}`}>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-white font-bold shadow-md">
        <span className="text-lg">$</span>
      </div>
    </div>
  );
};

export default HomeDataIllustration;
