import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/util";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType
}


const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return ( 
        <Tab className="relative flex aspect-square justify-center cursor-pointer items-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            fill
                            alt="image"
                            src={image.url}
                            className="object-cover object-center"
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent"
                    )}/>
                </div>
            )}
        </Tab>
     );
}
 
export default GalleryTab;