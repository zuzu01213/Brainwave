import brackets from "../../assets/svg/Brackets.jsx";

export const Tagline = ({className, children}) => {
    return (
        <div className={`tagline flex items-center justify-center mt-52 ${className || ""}`}>
            {brackets('left')}
            <div className={"mx-3 text-n-3"}>
                {children}
            </div>
            {brackets('right')}
        </div>
    )
}