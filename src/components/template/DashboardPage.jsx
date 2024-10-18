export default async function DashboardPage() {
  const date = new Date(user.createdAt).toLocaleDateString("fa-IR");

  return (
    <div>
      <h3 className="text-3xl font-semibold my-2">سلام 👋</h3>
      <p className="text-lime-700 font-semibold tracking-wider my-2 text-xl">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند .
      </p>
      <div className="flex items-center tracking-wider text-gray- italic font-semibold">
        <p className="ml-2">تاریخ عضویت : </p>
        <span>{date}</span>
      </div>
    </div>
  );
}
