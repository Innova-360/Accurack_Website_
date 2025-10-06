import Card from '@/components/ui/Card/Card'
import Header from '@/components/ui/Headers/Header'
import React from 'react'

const CardsData = [
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    },
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    },
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    },
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    },
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    },
    {
        imageSrc: "/Images/preview.png",
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels across multiple warehouses with real-time updates, ensuring optimal inventory management and reducing stockouts.",
    }
]

export default function WarehouseAndLogisticsManagement() {
    return (
        <div className='w-full max-w-6xl mx-auto py-16'>
            <Header title='Warehouse & Logistics Management' />

            <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {CardsData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.imageSrc}
                        title={card.title}
                        text={card.description}
                        iconWidth={500}
                        variant="simple"
                        rounded
                        className="p-6"
                    />
                ))}
            </div>
        </div>
    )
}
