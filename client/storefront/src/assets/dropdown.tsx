import { ReactElement } from "react";

const DropDown: React.FC = (): ReactElement => {
    return (
        <>
            <div className="dropdown">
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
        </>
    )
}

export default DropDown;