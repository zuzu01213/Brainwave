export const Heading = ({classname, title}) => {
    return (
        <div
        className={`${classname} max-w-[50rem] mx-auto 
        mb-12 lg:mb-20`}

        >
            {title && <h2 className={"h2"}>{title}</h2>}
        </div>

    )
}