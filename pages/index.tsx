import Hero from "@components/Hero";

export default function Home() {
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden pb-16 pt-[5.75rem]">
      <img src='/backgrounds/beam-bg.jpg'className={`absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]`} />
      <Hero />
    </div>
  )
}
