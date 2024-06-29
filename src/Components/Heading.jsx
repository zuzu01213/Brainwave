export const Heading = ({classname, title}) => {
    return (
        <div>
            {title && <h2 className={"h2"}>{title}</h2>}
        </div>

    )
}