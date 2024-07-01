export const Heading = ({classname, title}) => {
    return (
        <div
        className={`${classname} max-w-[50rem] mx-auto 
        mb-12 lg:mb-20`}

        >
            {title && <h2 className={"h2"}>{title}</h2>}
            {text && <p className={"body-2 mt-4 text-n-4"}></p>}
        </div>

    )
}