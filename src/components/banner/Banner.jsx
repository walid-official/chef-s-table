import BannerImage from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${BannerImage})`}} className='w-full bg-cover bg-center px-4 py-36 rounded-xl'>
            <div className='text-white text-center'>
                <h1 className='font-bold lg:text-6xl md:text-5xl text-4xl sm:w-[70%] mx-auto lg:leading-tight'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='sm:w-[80%] mx-auto py-6 text-[18px]'>Whether you are a beginner or a seasoned chef, our expert-led sessions offer personalized guidance and inspiration. Join us for an enriching culinary experience that is sure to ignite your passion for food and cooking.</p>
                <div className="sm:flex gap-2 justify-center space-y-2 sm:space-y-0">
                    <button className='bg-[#4ade80] px-10 py-4 rounded-full font-bold border-[#4ade80] hover:bg-transparent duration-200 border w-full sm:w-60'>Explore Now</button>
                    <button className='bg-[#4ade80] px-10 py-4 rounded-full font-bold border-[#4ade80] hover:bg-transparent duration-200 border w-full sm:w-60'>Our FeedBack</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;