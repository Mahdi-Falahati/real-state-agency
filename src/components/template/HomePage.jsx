import { cities, services } from "@/constants/string";
import CategoryCard from "@/module/CategoryCard";
import { GiSemiClosedEye } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiContractLine } from "react-icons/ri";
import ChoiceUs from "@/module/ChoiceUs";

export default function HomePage() {
  return (
    <section className="inline-block mt-16 overflow-hidden">
      <h1 className="text-center text-3xl font-semibold tracking-wider text-blue-950">
        آژانس مسکن فلاحتی
      </h1>
      <div className="flex justify-center font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-blue-950">
          سامانه
        </h2>
        <span className="text-indigo-500 inline-flex flex-col h-[35px]  overflow-hidden">
          <ul className="mx-4 animate-text-slide text-center">
            {services?.map((service, index) => (
              <li className="text-2xl" key={index}>
                {service}
              </li>
            ))}
          </ul>
        </span>
        <h2 className="text-center text-2xl font-semibold tracking-wider text-blue-950">
          ملک
        </h2>
      </div>

      <section
        className="flex justify-around mt-24 mb-14 flex-wrap"
        data-aos="fade-down-right"
      >
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="دفتر" name="office" />
        <CategoryCard title="مغازه" name="store" />
      </section>

      <section className="inline-block my-20">
        <h2 className="font-semibold overflow-hidden text-2xl flex justify-center items-center">
          شهر های پربازدید
          <GiSemiClosedEye className="mr-2" />
        </h2>
        <ul className="flex flex-wrap justify-around items-center mb-20 mt-5">
          {cities?.map((city, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="flex justify-center items-center font-semibold tracking-wider text-gray-600 shadow-inner shadow-gray-300 rounded-lg min-w-[250px] px-1 mx-2 my-5 py-2"
            >
              <IoMdCheckmarkCircleOutline className="ml-2 text-green-700 text-2xl" />
              {city}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 flex justify-center items-center flex-col mx-2">
        <h2 className="font-semibold text-2xl flex justify-center items-center">
          چرا باید ما را انتخاب کنید <TbTargetArrow className="mr-2" />
        </h2>
        <div className="w-full sm:w-[400px] md:w-[600px]">
          <ChoiceUs
            title="امنیت در معامله"
            positionX={"justify-start"}
            icon={
              <MdOutlineSecurity className={`text-green-400 ${iconStyles}`} />
            }
          />

          <ChoiceUs
            title="قیمت های مناسب"
            positionX={"justify-center"}
            icon={
              <FaMoneyBillTrendUp className={`text-yellow-400 ${iconStyles}`} />
            }
          />

          <ChoiceUs
            title="قرار داد های نظارت شده"
            positionX={"justify-end"}
            icon={<RiContractLine className={`text-red-500 ${iconStyles}`} />}
          />
        </div>
      </section>
    </section>
  );
}

const iconStyles = "text-center text-4xl w-full mb-2";
