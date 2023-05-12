export default function Title({ children, classNames = '' }) {
    return(
        <h1 className={`text-center md:text-left mx-4 my-4 py-8 text-3xl font-semibold md:mx-8 md:my-8 ${classNames}`}>{children}</h1>
    )
}