export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white rounded-t-md p-4 font-semibold flex flex-wrap justify-around">
      <div>
        <h3 className="tracking-widest mb-3 text-xl">
          سامانه خرید و اجاره ملک فلاحتی
        </h3>
        <p className="w-full md:w-[500px] lg:w-[750px] leading-6 font-normal text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <ul className="flex flex-col md:list-disc flex-wrap sm:flex-row md:flex-col justify-around items-start mt-2">
        <li className="m-2">تعرفه های قانونی</li>
        <li className="m-2">دسترسی سریع</li>
        <li className="m-2">مشاورین خبره</li>
        <li className="m-2">قولنامه محضری</li>
      </ul>
    </footer>
  );
}
