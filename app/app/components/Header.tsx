import Image from "next/image";
import Logo from "../assets/logo.svg";
import { Button } from "./Button";
export const Header = () => {
    return (
        <div className="flex h-[40px] flex-row justify-between">
            <h1 className="text-4xl font-bold">
                <Image src={Logo} alt="Babol" width={108} height={32} />
            </h1>
            <Button text="Download the app" />
        </div>
    );
}