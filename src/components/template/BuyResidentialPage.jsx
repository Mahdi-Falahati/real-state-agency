import Card from "@/module/Card";
import SideBar from "@/module/SideBar";

export default function BuyResidentialPage({ data }) {
  return (
    <div className="flex overflow-hidden justify-around items-center sm:items-start flex-col sm:flex-row">
      <div data-aos="zoom-out-left">
        <SideBar />
      </div>
      <div
        data-aos="zoom-out-right"
        className="flex justify-around items-center flex-wrap"
      >
        {data.length === 0 && (
          <p className="text-red-700 text-center font-semibold text-xl tracking-wider">
            آگهی براساس فیلتر خواسته شده یافت نشد...
          </p>
        )}
        {data?.map((item) => (
          <Card key={item._id} data={item} margin={"my-7"} />
        ))}
      </div>
    </div>
  );
}
