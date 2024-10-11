export default function ChoiceUs({ title, icon, positionX }) {
  return (
    <div className={`flex ${positionX} mt-10 w-full`}>
      <p
        className={`text-2xl bg- flex-col justify-center items-cnter font-semibold`}
      >
        {icon}
        {title}
      </p>
    </div>
  );
}
