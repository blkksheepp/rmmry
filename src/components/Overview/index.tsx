import { Plus } from "lucide-react"

const Overview = () => {
    return (
        <div id="overview" className="h-screen overflow-hidden  bg-primary pt-8 ~pl-6/10 select-none">
            {/* Nav Header */}
            <div className=" flex flex-row items-center gap-32 pt-4 pb-6 font-light uppercase">
                <p className="text-foreground">01</p>
                <p className="text-background bg-foreground px-4 rounded-full">Overview</p>
            </div>

            {/* Main Content */}
            <div className="h-full flex-1 flex flex-row">
                {/* Details Secttion */}
                <div className="w-full h-full pb-24 flex flex-col justify-between">
                    {/* Heading */}
                    <p className="text-foreground text-5xl uppercase w-[70%]">How RMMRY Uses Your Data Is Simple.</p>

                    {/* Description */}
                    <div>
                        {/* Description Heading */}
                        <p className="text-foreground text-6xl uppercase">Upload Your Data</p>
                        {/* Description Content */}
                        <p className="mt-4 leading-relaxed text-foreground text-lg uppercase w-[60%]">upload your model to rmmry portal or 3rd party data management system. we work with you to integrate your project schedule. schedule of values, and any other metadata that matters. upload your model to rmmry portal or 3rd party data management system.</p>

                        {/* Nav Dots */}
                        <div className="flex flex-row gap-2.5 mt-8">
                            <div className='w-6 h-4 rounded-full bg-foreground border border-foreground'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                            <div className='w-4 h-4 rounded-full border-[2px] border-foreground border-opacity-55'></div>
                        </div>
                    </div>
                </div>

                {/* Media Section */}
                <div className="w-full flex flex-col">
                    {/* Heading */}
                    <p className="text-foreground text-5xl uppercase">Step 1/4</p>

                    {/* Media */}
                    <div className="mt-8 w-full h-full relative mb-16">
                        {/* Image */}
                        <img src="src/assets/images/content.jpg" alt="Overview Media 1" className="absolute w-full h-full rotate-[180deg] object-cover" />

                        {/* Button */}
                        <button className="absolute w-[350px] bottom-24 left-1/2 translate-x-[-50%] flex justify-between items-center bg-background text-foreground px-4 py-0.5 rounded-full uppercase">
                            <span>Learn More</span>
                            <Plus className="px-0.5 py-0.5 rounded-full h-auto w-7" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview