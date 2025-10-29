"use client"
import { ProductCard } from "@/components/module/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-[#f4f4f4] min-h-screen w-full overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] py-8 lg:py-0">
          {/* Text Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Collections
            </motion.h1>

            <motion.div
              className="mt-6 lg:mt-8 text-xl lg:text-2xl text-gray-600 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>You can explore and shop many different collections</p>
              <p>From various brands here</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="mt-6 px-8 py-3 text-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Shop Now
              </Button>

              <Link
                href="/login"
                className="mt-6 px-8 py-3 text-lg bg-black text-white hover:bg-gray-800 transition-colors duration-300"
              >
                Login
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[300px] lg:h-[500px] xl:h-[600px]">
              <Image
                src="/hero1.png"
                alt="Fashion Collections"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className='container mt-10'>
        <h2 className='text-center text-3xl my-10'>Or Subscribe to our News Letter</h2>
        <div className="grid grid-cols-4 gap-4">
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
          <ProductCard name={"testing"} price={0} img={"/img/1.png"} />
        </div>
      </section>

    </>
  );
}
