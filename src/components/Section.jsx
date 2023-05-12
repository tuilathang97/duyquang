export default function Section({ children, classNames = '' }) {
    return(
        <section className={`${classNames}`}>
            <div className="w-full px-5 mx-auto md:max-w-none lg:max-w-[85rem]">
                { children }
            </div>
        </section>
    )
}