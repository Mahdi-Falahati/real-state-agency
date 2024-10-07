export default function ChoiceUs({ title, icon, position }) {
  return (
    <div className={`flex justify-${position} mt-10 w-full`}>
      <p
        className={`text-2xl bg- flex-col justify-center items-cnter font-semibold`}
      >
        {icon}
        {title}
      </p>
    </div>
  );
}
