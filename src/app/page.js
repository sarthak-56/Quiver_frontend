"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <img className="w-full" src="/mainimg.png" />
      </div>

      <nav className="flex flex-wrap justify-center">
        <ul className="flex flex-wrap text-white w-full gap-1 text-xs lg:text-sm md:font-bold">
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Shree Jagannath</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Politics</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">State</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Business</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Education</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">National</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">International</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Health & Liftstyle</li>
          <li className="bg-red-700 hover:bg-white hover:text-red-700 p-2 md:p-4 lg:p-6">Technology</li>

        </ul>
      </nav>



      <div className="flex flex-rows gap-2 md:gap-4 ">

        <div className="basis-1/8 mt-1 border-2 p-1 border-gray-300">
          <h1 className="font-extrabold text-center text-sky-500 text-sm md:text-xl">Yesterday</h1>
          <div className="grid grid-rows-6 mt-1 justify-center gap-1 md:gap-4">
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/1.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/2.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/3.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/4.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/5.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/6.jpg" />
          </div>
        </div>

        <div className="md:gap-2 mt-1  border-2 p-1 border-gray-300 basis-3/4">
          <h2 className="font-extrabold text-center text-sm md:text-xl text-sky-500">Today</h2>
          <h1 className="font-extrabold text-green-800 text-sm md:text-2xl">TOP HEADLINES</h1>
          <div className="grid grid-rows-2">
            <div className="gap-1 md:gap-2 grid grid-cols-2">
              <div>
                <img className="h:30 md:h-60" src="/7.jpg" />
                <h1 className="text-xs md:font-bold md:text-xl text-red-600 ">In the vast expanse of the
                  cosmos, humanity's journey unfolds, a symphony of exploration and discovery
                  echoing through mos, humanity's journey unfolds, a symphony of exploration and discovery
                  echoing through </h1>
              </div>
              <div className="grid grid-cols-2 gap-1 md:gap-4 ">

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/8.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/9.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/10.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/11.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/12.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

                <div class="relative h-10vh w-30vw md:h-40 md:w-50">
                  <img class="h-full w-full object-cover" src="/13.jpg" alt="Image" />
                  <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex justify-center">
                    <h1 class="text-white text-xs md:text-xl md:font-bold">Content generated for the item also.</h1>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <h1 className="font-extrabold text-red-800 text-sm md:text-2xl">SPECIAL REPORT</h1>
              <div className=" grid grid-cols-3 gap-1 mt-2">
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/14.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/15.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/16.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/17.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/18.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
                <div>
                  <img className=" h-20 w-30 sm:h-20 sm:w-40 md:h-30 md:w-60 lg:h-40 lg:w-80" src="/19.jpg" />
                  <h1 className="text-xs md:text-xl md:font-bold">This is the content for the photo.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/8  border-2 p-1 mt-1 border-gray-300">
          <h2 className="font-extrabold text-center text-sky-500 text-sm md:text-xl">Watch our videos</h2>
          <div className="grid grid-rows-6 mt-1 justify-center gap-1 md:gap-4">
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/20.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/21.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/22.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/23.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/24.jpg" />
            <img className="h-20 w-20 md:h-40 md:w-40 " src="/25.jpg" />
          </div>
        </div>


      </div>
      <div className="flex flex-cols-2 gap-2">
        <div className="bg-black ">
          <h1 className="rotate-90 font-extrabold mt-40 text-white origin-center text-2xl">Sarthak Mishra</h1>
        </div>

        <div className="grid grid-cols-5 mt-2  gap-1 md:gap-2">
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/26.png" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/27.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/28.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/29.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/30.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/31.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/32.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/33.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/34.png" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
          <div>
            <img className="h-20 w-40 md:h-40 md:w-60 " src="/36.jpg" />
            <h1 className="text-xs md:font-bold">this is the content for thgis
              image to view it.</h1>
          </div>
        </div>
      </div>


      <footer className="bg-gray-800 font-semibold p-4">
        <div className="container mx-auto">
          <p className="text-white text-center">&copy; {new Date().getFullYear()} Weldx IT. All rights are reserved</p>
        </div>
      </footer>
    </div>

  );
}
