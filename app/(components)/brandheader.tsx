import Image from "next/image"
export default function BrandLogo() {
    return <div>
        <div className="w-24 h-24 m-5 scale-150 lg:block lg:block flex justify-center">
            <Image width={250} height={250} alt="brand logo" src="assets/logo.png" />
        </div>
    </div>
}