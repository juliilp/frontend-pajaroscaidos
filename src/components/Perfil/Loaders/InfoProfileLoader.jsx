export default function InfoProfileLoader() {
  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 w-[90%] lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md animate-pulse">
      <header className="flex h-20 lg:h-28 w-full bg-neutral-400 rounded-lg"></header>
      <section className="flex flex-col items-start w-full py-1 gap-3">
        <div className="w-full flex flex-col gap-2">
          <div className="bg-neutral-400 h-6 w-[65%] lg:w-[35%] rounded"></div>
          <div className="bg-neutral-400 h-6 w-[60%] lg:w-[30%] rounded"></div>
          <div className="bg-neutral-400 h-6 w-[70%] lg:w-[40%] rounded"></div>
          <div className="bg-neutral-400 h-6 w-[75%] lg:w-[35%] rounded"></div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="bg-neutral-400 h-6 w-[80%] lg:w-[50%] rounded"></div>
          <div className="bg-neutral-400 h-6 w-[70%] lg:w-[40%] rounded"></div>
        </div>
      </section>
    </section>
  );
}
