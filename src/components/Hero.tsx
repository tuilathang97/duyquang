export default function Hero({}) {
    return(
        <section className=" dark:text-gray-100 relative mx-auto grid w-full max-w-container grid-cols-1 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-normal leading-none sm:text-5xl text-black">Không chỉ
                    <span className="text-sky-500 font-bold"> tạo logo,</span>
                    <div className="text-4xl font-normal leading-none sm:text-5xl">Chúng tôi <span className="font-bold text-sky-500">xây dựng thương hiệu</span> cho bạn</div>
                </h1>
                <div className="flex flex-wrap justify-center lg:mt-40">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-900 text-yellow-50">Bắt đầu</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded text-black border-gray-900">Tìm hiểu thêm</button>
                </div>
            </div>
        </section>
    )
}