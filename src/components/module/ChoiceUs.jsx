import Image from "next/image";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function ChoiceUs() {
  return (
    <div>
      <div className="w-full h-[400px] md:h-[360px] relative flex justify-center items-center">
        <div
          data-aos="fade-right"
          className="absolute left-0 top-3 w-[260px] md:w-[350px] z-10 bg-white shadow-md shadow-slate-400 rounded-lg p-2"
        >
          <h3 className="flex text-xl font-medium">
            <MdOutlineSecurity className="ml-1 text-xl text-green-600" />
            قرار دادی امن
          </h3>
          <p className="text-justify leading-6 mt-1 px-1 tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <Image
          alt="city"
          src="/images/city.png"
          width={450}
          height={300}
          className="absolute top-20 sm:inline-block hidden"
        />
        <div
          data-aos="fade-left"
          className="absolute bottom-0 right-0 w-[260px] md:w-[350px] z-10 bg-white shadow-md shadow-slate-400 rounded-lg p-2"
        >
          <h3 className="flex text-xl font-medium">
            <FaMoneyBillTrendUp className="ml-1 text-xl text-yellow-500" />
            بهترین امکانت با مناسب ترین قیمت
          </h3>
          <p className="text-justify leading-6 mt-1 px-1 tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="text-gray-700 w-full p-4 text-justify mt-10 shadow-inner rounded-lg shadow-slate-400 leading-7 tracking-wide font-medium"
      >
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده
      </p>
    </div>
  );
}
