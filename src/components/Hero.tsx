import Typewriter from 'typewriter-effect';

export default function Hero({}) {
    return(
        <section className=" dark:text-gray-100 relative mx-auto grid w-full max-w-container grid-cols-1 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col items-center py-16 text-center md:py-32 md:pb-16 lg:pb-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-2xl font-normal leading-none sm:text-4xl text-black">Không chỉ thiết kế
                    <span className="text-sky-500 font-bold inline">
                        {
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString(' Logo')
                                    .pauseFor(100)
                                    .deleteAll()
                                    .typeString(' Banner')
                                    .pauseFor(100)
                                    .deleteAll()
                                    .typeString(' Namecard')
                                    .pauseFor(100)
                                    .deleteAll()
                                    .start()
                                }}
                                options={{
                                    loop: true,
                                }}
                            />
                        }
                    </span>
                    <div className="text-2xl font-normal leading-none sm:text-4xl">Chúng tôi <span className="font-bold text-sky-500">xây dựng thương hiệu</span> cho bạn</div>
                </h1>
            </div>
        </section>
    )
}