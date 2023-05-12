import { AiOutlineInstagram, AiOutlineIdcard } from "react-icons/ai";
import { GiStairsGoal, GiVerticalBanner } from "react-icons/gi";
import { FcBullish, FcMindMap, FcOnlineSupport } from 'react-icons/fc';

export default function MyLatestWorks({}) {
    return (
        <div className="relative z-20 sm:z-auto">
            <div className="mx-auto max-w-container px-10 pb-16 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex md:max-w-2xl mx-auto lg-max-w-none ">
                    <div className="p-1">
                        <FcMindMap size={48} />
                    </div>
                    <div className="px-4 pt-2 pr-8 mb-8">
                        <h2 className="font-medium text-lg mb-4">Khả năng nhận diện</h2>
                        Ấn phẩm tạo ấn tượng đầu tốt, thiết kế hiệu quả, có khả năng ghi nhớ tốt giúp thuyết phục khách hàng.
                    </div>
                </div>

                <div className="flex md:max-w-2xl mx-auto lg-max-w-none ">
                    <div className="p-1">
                        <FcBullish size={48} />
                    </div>
                    <div className="px-4 pt-2 pr-8 mb-8">
                        <h2 className="font-medium text-lg mb-4">Chất lượng, uy tín</h2>
                        Đội ngũ trẻ chuyên nghiệp, năng động, nhiệt huyết đuọc đào tạo bài bản. Tạo điểm nhấn cho nhãn hàng, đáp ứng 
                        tiêu chuẩn thị trường. Ứng dụng kết hợp trí thông minh nhân tạo vào thiết kế.
                    </div>
                </div>

                <div className="flex md:max-w-2xl mx-auto lg-max-w-none ">
                    <div className="p-1">
                        <FcOnlineSupport size={48} />
                    </div>
                    <div className="px-4 pt-2 pr-8 mb-8">
                        <h2 className="font-medium text-lg mb-4">Bền vững lâu dài</h2>
                        Đảm bảo chất lượng sản phẩm, chăm sóc khách hàng về sau.
                    </div>
                </div>
            </div>
        </div>
    )
}