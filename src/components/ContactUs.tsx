import Image from 'next/image'

export default function ContactUs() {
    return(
        <section className="bg-white mt-10">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 text-black">Liên hệ</h2>
                <p className="font-light text-center text-gray-500 text-black-800 sm:text-xl">Mời anh/chị kết nối với em để được tư vấn phương án thiết kế chi tiết hơn.</p>
                <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 text-black-800 sm:text-xl">Rất vui khi được hợp tác!!</p>

                <div className='flex justify-center items-center mb-8'>
                    <a href='https://www.facebook.com/bogia.bo.3?locale=vi_VN' target='_blank' className='border-r-2 pr-8'>
                        <Image className='cursor-pointer' src="./icons/messenger.svg" alt="" height={64} width={64} />
                    </a>
                    <a href='' target='_blank' className='pl-8'>
                        <Image className='cursor-pointer' src="/icons/zalo-qr.jpg" alt="" height={128} width={128} />
                    </a>
                </div>

                {/* <h3 className="w-[10%] h-[1px] bg-black m-auto mb-8 lg:mb-10 lg:w-[20%]"></h3> */}
{/* 

                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-800">Email của anh/chị</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black-800 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 ring-sky-500 focus:border-sky-400 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-800">Chủ đề</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-black-800 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 ring-sky-500 focus:border-sky-400 dark:shadow-sm-light" placeholder="Chủ để" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800">Nội dung</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black-800 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-sky-500 focus:border-sky-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 ring-sky-500 focus:border-sky-400" placeholder="Chi tiết thiết kế"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-400 sm:w-40 sm:mx-auto block hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300">Gửi</button>
                </form> */}
            </div>
            </section>
    )
}