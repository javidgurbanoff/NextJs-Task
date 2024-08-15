import React from 'react';

const Card: React.FC = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black'>
      <main className='bg-black'>
        <div className='flex'>
          <h1 className='text-[#FFFFFF] text-[36px] mb-[24px]'>All Categories.</h1>
          <h1 className='text-[#A6A6A6] text-[36px]'>What’s you like</h1>
        </div>
        <div className='flex gap-[30px] flex-wrap justify-center'>
          <div className='w-[258px] rounded-[15px] overflow-hidden'>
            <div className='relative'>
              <img 
                className='w-full h-[167px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/09/abstract.jpg" 
                alt="Abstract"
              />
            </div>
            <h1 className='text-[#FFFFFF] text-[22px] text-center mt-[10px]'>Abstract</h1>
          </div>

          <div className='w-[258px] rounded-[15px] overflow-hidden'>
            <div className='relative'>
              <img 
                className='w-full h-[167px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/09/colorful.jpg" 
                alt="Colorful"
              />
            </div>
            <h1 className='text-[#FFFFFF] text-[22px] text-center mt-[10px]'>Colorful</h1>
          </div>

          <div className='w-[258px] rounded-[15px] overflow-hidden'>
            <div className='relative'>
              <img 
                className='w-full h-[167px] rounded-[15px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/09/creative.jpg" 
                alt="Creative"
              />
            </div>
            <h1 className='text-[#FFFFFF] text-[22px] text-center mt-[10px]'>Creative</h1>
          </div>

          <div className='w-[258px] rounded-[15px] overflow-hidden'>
            <div className='relative'>
              <img 
                className='w-full h-[167px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/09/digital-art.jpg" 
                alt="Digital Art"
              />
            </div>
            <h1 className='text-[#FFFFFF] text-[22px] text-center mt-[10px]'>Digital Art</h1>
          </div>

          <div className='w-[258px] rounded-[15px] overflow-hidden'>
            <div className='relative'>
              <img 
                className='w-full h-[167px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110' 
                src="https://xstore.b-cdn.net/elementor2/nft-crypto/wp-content/uploads/sites/13/2023/09/virtual-art.jpg" 
                alt="Virtual World"
              />
            </div>
            <h1 className='text-[#FFFFFF] text-[22px] text-center mt-[10px]'>Virtual World</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Card;
