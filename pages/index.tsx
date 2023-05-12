import Hero from "@components/Hero";
import MyLatestWorks from "@components/Features";
import Section from "@components/Section";
import Title from "@components/Title";
import MarqueeList from "@components/MarqueeList";
import Banner from "@components/Banner";
import Logos from "@components/Logos";
import ContactUs from "@components/ContactUs";

const images = [
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg', alt: ''},
  {src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg', alt: ''}
];

export default function Home() {

  return (
    <div className="relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
      <img src='/backgrounds/beam-bg.jpg'className={`absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]`}></img>
      <Hero />
      <MyLatestWorks />
      <Section classNames={`w-full mx-0 relative z-20 lg:pb-0`}>
        <Title>Ấn phẩm gần đây</Title>
        <MarqueeList images={images}/>
      </Section>

      <Section classNames={`w-full mx-0 relative z-20 lg:pb-0`}>
        <Title>Banner</Title>
        <Banner />
      </Section>

      <Section classNames={`w-full mx-0 relative z-20 lg:pb-0`}>
        <Title>Logos</Title>
        <Logos />
      </Section>

      <ContactUs />
    </div>
  )
}