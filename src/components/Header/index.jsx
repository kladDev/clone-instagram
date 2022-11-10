import { MagnifyingGlass } from "phosphor-react";

export default function Header() {
    return (
        <div>
            <div className="logo">
                <img
                    src="https://i.pinimg.com/originals/58/78/fa/5878faabdbde40edd6a32228e946a120.jpg"
                    alt=""
                />
            </div>

            <div className="searchBar">
                <MagnifyingGlass size={32} />
            </div>

            <div className="options"></div>
        </div>
    )
}