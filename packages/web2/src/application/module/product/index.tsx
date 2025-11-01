import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export const ProductModule = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 lg:mx-24 h-screen'>
      <div className="space-y-2 col-span-1">
        <img
          src={"/product/1.jpg"}
          className='w-full h-[70vh]'
        />
        <div className="grid grid-cols-5 gap-2">
          <img
            src={"/product/2.jpg"}
            className="size-36 object-cover"
          />

          <img
            src={"/product/3.jpg"}
            className="size-36 object-cover"
          />

          <img
            src={"/product/4.jpg"}
            className="size-36 object-cover"
          />

          <img
            src={"/product/5.jpg"}
            className="size-36 object-cover"
          />

          <img
            src={"/product/6.jpg"}
            className="size-36 object-cover"
          />

        </div>

      </div>
      <div className="p-4 lg:col-span-2">
        <div className='space-y-4'>
          <h4 className='text-4xl'>Peanuts Long Sleeve Sweatshirt</h4>
          <p>A Baseball theme collection , A favourate of Peanuts Friend</p>
          <h6>This Collection Feature Snoopy and his friends enjoying baseball in Vintage comic look. We Feature Fam <span className="underline">Read More</span></h6>
          <div className='flex items-center gap-2'>
            <h4 className="space-x-2">
              <span className='font-bold'>
                5k+
              </span>
              Solid</h4>
            <Star className="text-yellow-500" />
            <h5 className='font-bold'>4.9</h5>
            <p className="text-gray-500">(225 reviews)</p>
          </div>

          {/* ------------------ PRICE ------------------- */}
          <div className='flex items-center gap-4'>
            <h6 className="text-4xl font-bold">$122,00</h6>
            <p className="text-red-400">$156,00</p>
          </div>
          <div className='space-x-4'>
            <Button>Add To Cart</Button>
            <Button variant={"outline"}>Buy Item</Button>

          </div>
        </div>
      </div>
    </div>

  )

}
