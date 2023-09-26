import React from "react";

export default function LoadingCardHome() {
  return (
    <article className="w-full max-w-[300px] flex flex-col gap-6 justify-self-center h-[406px] rounded-xl my-6 ">
      <div className="flex flex-col gap-2 justify-self-start w-full ">
        <div className="bg-neutral-400 w-[200px] h-[150px] animate-pulse " />
        <div className="bg-neutral-400 w-[85px] h-[8px] animate-pulse  rounded-full " />
      </div>
      <div className="w-full max-w-[150px] h-[10px] bg-neutral-400 animate-pulse opacity-10  rounded-full " />
      <div className="flex flex-col gap-3 justify-self-start ">
        <div className="w-[80%] max-w-[300px] h-[8px] bg-neutral-400 animate-pulse rounded-full " />
        <div className="w-[80%] max-w-[300px] h-[8px] bg-neutral-400 animate-pulse rounded-full " />
        <div className="w-[80%] max-w-[300px] h-[8px] bg-neutral-400 animate-pulse rounded-full " />
        <div className="w-[80%] max-w-[200px] h-[8px] bg-neutral-400 animate-pulse rounded-full" />
      </div>
    </article>
  );
}
