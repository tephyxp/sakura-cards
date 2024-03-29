'use client'
import CardReading from "@/app/components/CardsComponents/CardReading"
import ButtonsRendered from "@/app/components/ButtonComponent/ButtonsRendered"

const pageReading = () => {
    return (
        <div>
            <nav className="flex md:flex-row flex-col items-center pt-16">
                <h2 className="md:text-[3.5rem] md:mx-36 mx-[4.5rem] text-justify text-[45px] mb-10 mb:mb-0">La respuesta a tu pregunta</h2>
                <ButtonsRendered />
            </nav>
            <CardReading />
        </div>
    )
}

export default pageReading

