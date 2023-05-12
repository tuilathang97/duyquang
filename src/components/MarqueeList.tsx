import Image from "next/image";

interface MarqueeListProps {
    images: Image[];
}

interface Image {
    src: string;
    alt: string;
}

export default function MarqueeList( props  : MarqueeListProps) {
    const { images } = props;
    const Items = () => {
        return(
            <>
                { images.map(image => {
                    return(
                        <div key={image.src} className="overflow-hidden rounded-lg">
                            <Image width={200} height={200} className="max-w-full rounded-lg duration-300 ease-out hover:scale-125 w-[200px] h-[155px]"
                                src={image.src}
                                alt={image.alt}/>
                        </div>
                    )
                })}
            </>
        )
    }
    return(
        <div className="overflow-x-hidden relative h-[326px] rounded-lg">
            <Marquee>
                <Items />
            </Marquee>
            <Marquee isFirstMarquee={false}>
                <Items />
            </Marquee>
        </div>
    )
}

const Marquee = ({ children, isFirstMarquee = true }) => {
    return(
        <div className={`grid grid-cols-marqueeGrid gap-4 pl-4 md:pl-4 ${isFirstMarquee ? 'animate-marquee' : 'animate-marquee2'} absolute`}>
            { children }
        </div>
    )
}