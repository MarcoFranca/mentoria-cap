import { Separator } from "@/components/ui/separator"
import { Hero } from "@/components/marketing/hero"
import { Proof } from "@/components/marketing/proof"
import { Offer } from "@/components/marketing/offer"
import { Objections } from "@/components/marketing/objections"
import { FAQ } from "@/components/marketing/faq"
import { CTA } from "@/components/marketing/cta"
import { MarketingHeader } from "@/components/marketing/header"
import {AudienceFit} from "@/components/marketing/audience-fit";
import { Footer } from "@/components/marketing/footer"

export default function Page() {
    return (
        <div id="top">
            <MarketingHeader />

            <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
                <Hero/>

                <div className="my-10 md:my-14">
                    <Separator />
                </div>

                <Proof />
                <div className="my-10 md:my-14">
                    <Separator />
                </div>

                <Offer />
                <div className="my-10 md:my-14">
                    <Separator />
                </div>

                <AudienceFit />
                <div className="my-10 md:my-14">
                    <Separator />
                </div>

                <FAQ />
                <div className="my-10 md:my-14">
                    <Separator />
                </div>

                <CTA />

                <Footer />
            </main>
        </div>
    )
}
