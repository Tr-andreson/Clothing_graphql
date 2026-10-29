"use client"
import { ProductModule } from "@/components/module/product"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <>
      <section className="bg-[#f4f4f4] container block lg:flex items-center justify-center lg:min-h-screen w-full overflow-hidden space-y-4 p-4 lg:space-x-6">
          {/* Text Content */}
          <div>
            <h1
						className="text-gray-600 lg:text-3xl"
            >
              Collections
            </h1>

            <div
              className="mt-6 lg:mt-8 text-xl lg:text-2xl text-gray-600 space-y-2"
            >
              <p>You can explore and shop many different collections</p>
              <p>From various brands here</p>
            </div>

            <div
              className="flex items-center  justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                className="mt-6 px-8 py-3 text-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Shop Now
              </Button>

              <Button
                asChild
                size="lg"
                className="mt-6 px-8 py-3 text-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                <a href="/login">Login</a>
              </Button>
            </div>
          </div>

          {/* Image Content */}
					<div className="flex items-center justify-center">
						<img 
						className="size=[50%]"
							src="hero1.png"
						/>
					</div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className='container space-y-4 my-6'>
        <h2 className='text-center text-lg lg:text-3xl'>Recent Products</h2>
 					<ProductModule />
      </motion.section>
    </>

  )

}
