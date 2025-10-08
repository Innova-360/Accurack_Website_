import React from 'react'
import PricingSection from './_components/PricingPlans'
import Header from '@/components/ui/Headers/Header'
import GoodCompany from '../Contact/_components/GoodCompany'
import TransformSection from '@/components/common/Transform'
import PricingFAQs from './_components/PricingFAQs'

export default function page() {
    return (
        <div className='my-10 md:my-16'>

            <Header title="Simple & Transparent pricing for all business sizes" description="Choose the Accurack plan that best fits your business needs or get a custom quote for enterprise-level solutions" headingClassName="font-title text-primary w-full" />

            <PricingSection />

            <GoodCompany />

            <PricingFAQs />

            <TransformSection />

        </div>
    )
}
