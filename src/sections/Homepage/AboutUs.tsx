import { Button } from "@/components/Button/Button";
import { FC } from "react";

export const AboutUs:FC = () => (
    <div className="py-[108px] px-4">
        <div className="flex items-start justify-between">
            <p className="heading flex-1">Inspiring Dynamic Passion Leads to Excellence</p>
            <div className="flex flex-col flex-1 gap-[27px]">
                <p className="sub-heading">Welcome to our world! Before embarking on your exploration of our offerings, allow us to unveil the story behind our brand. Our About page serves as a gateway to understanding our journey, values, and the relentless passion propelling us forward.Get To Know Us Better</p>
                <Button variant={'default'}>More about us</Button>
            </div>
        </div>
    </div>
)