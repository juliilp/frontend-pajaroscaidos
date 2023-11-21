import React, { useState, useEffect, useRef } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMessage2Line } from "react-icons/ri";
import { SlLike } from "react-icons/sl";
import { FaRegFaceLaughSquint } from "react-icons/fa6";
import { FaRegFaceSadTear, FaRegFaceAngry } from "react-icons/fa6";
import { PiHandsClapping, PiBirdLight } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import api from "../../../api/api";
import { CustomContext } from "@/store/ContextProvider";

const IconsReactions = ({ id, commentsQuantity, reactions }) => {
  const { UserContext } = CustomContext();

  const [sending, setSending] = useState(false);

  useEffect(() => {
    setReactionState((prevReactionsState) => ({
      ...prevReactionsState,
      like: filterReactionsByType(reactions, "like"),
      free: filterReactionsByType(reactions, "free"),
      sad: filterReactionsByType(reactions, "sad"),
      laugh: filterReactionsByType(reactions, "laugh"),
      angry: filterReactionsByType(reactions, "angry"),
      applause: filterReactionsByType(reactions, "applause"),
      love: filterReactionsByType(reactions, "love"),
    }));
  }, [reactions]);

  const filterReactionsByType = (reactions, type) => {
    return reactions.filter((reaction) => reaction.reaction === type);
  };

  const findReactionsByUserId = (reactions22) => {
    const result = reactions22?.filter(
      (reaction) => reaction.userId === UserContext?.id
    );

    return result.length > 0;
  };

  const [reactionsState, setReactionState] = useState({
    like: [],
    free: [],
    sad: [],
    laugh: [],
    angry: [],
    applause: [],
    love: [],
  });

  const handleReaction = async (reaction) => {
    try {
      if (sending) {
        return;
      }

      setSending(true);

      const response = await api.post(`/reaction/create/${id}`, {
        idUser: UserContext.id,
        reaction,
      });

      if (response.status === 200) {
        const reactionsCopy = { ...reactionsState };

        const newReaction = response.data.newReaction;

        newReaction.userId = UserContext?.id;
        newReaction.user = { nick_name: UserContext?.nick_name };

        reactionsCopy[reaction].push(newReaction);

        setReactionState(reactionsCopy);
      }
    } catch (error) {
      console.error("error al dar el me gusta::", error);
    } finally {
      setSending(false);
    }
  };

  const handleUnReaction = async (reaction, reactionName) => {
    if (sending) {
      return;
    }

    const reactionUser = reaction.find((e) => e.userId === UserContext.id);

    setSending(true);

    try {
      const response = await api.delete(`/reaction/delete/${reactionUser.id}`);

      if (response.status === 200) {
        const reactionsCopy = { ...reactionsState };

        const reactionFiltered = reactionsCopy[reactionName].filter(
          (e) => e.id !== reactionUser.id
        );

        reactionsCopy[reactionName] = reactionFiltered;

        setReactionState(reactionsCopy);
      }
    } catch (error) {
      console.error("error al sacar el me gusta::", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-free-${id}`}
            className="flex flex-row items-center"
          >
            <PiBirdLight
              color={
                findReactionsByUserId(reactionsState.free)
                  ? "#188f08fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#31ff0342] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.free)
                  ? () => handleUnReaction(reactionsState.free, "free")
                  : () => handleReaction("free")
              }
            />
            <span
              className={` font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.free)
                  ? "text-[#188f08fc]"
                  : ""
              }`}
            >
              {reactionsState.free.length}
            </span>
          </a>
        </div>

        {reactionsState.free[0] ? (
          <Tooltip
            id={`my-tooltip-children-free-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.free.map((reaction, i) => (
                <span key={i}>{reaction.user.nick_name}</span>
              ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-angry-${id}`}
            className="flex flex-row items-center"
          >
            <FaRegFaceAngry
              color={
                findReactionsByUserId(reactionsState.angry)
                  ? "#b70101fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#ff03035c] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.angry)
                  ? () => handleUnReaction(reactionsState.angry, "angry")
                  : () => handleReaction("angry")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.angry)
                  ? "text-[#b70101fc]"
                  : ""
              }`}
            >
              {reactionsState.angry.length}
            </span>
          </a>
        </div>
        {reactionsState.angry[0] ? (
          <Tooltip
            id={`my-tooltip-children-angry-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.angry.map((reaction, i) => (
                <span key={i}>{reaction.user.nick_name}</span>
              ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-applause-${id}`}
            className="flex flex-row items-center"
          >
            <PiHandsClapping
              color={
                findReactionsByUserId(reactionsState.applause)
                  ? "#c49f03fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#c49f034d] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.applause)
                  ? () => handleUnReaction(reactionsState.applause, "applause")
                  : () => handleReaction("applause")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.applause)
                  ? "text-[#c49f03fc]"
                  : ""
              }`}
            >
              {reactionsState.applause.length}
            </span>
          </a>
        </div>
        {reactionsState.applause[0] ? (
          <Tooltip
            id={`my-tooltip-children-applause-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.applause[0] &&
                reactionsState.applause.map((reaction, i) => (
                  <span key={i}>{reaction.user.nick_name}</span>
                ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-sad-${id}`}
            className="flex flex-row items-center"
          >
            <FaRegFaceSadTear //azul
              color={
                findReactionsByUserId(reactionsState.sad)
                  ? "#0314c4fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#0314c445] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.sad)
                  ? () => handleUnReaction(reactionsState.sad, "sad")
                  : () => handleReaction("sad")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.sad)
                  ? "text-[#0314c4fc]"
                  : ""
              }`}
            >
              {reactionsState.sad.length}
            </span>
          </a>
        </div>
        {reactionsState.sad[0] ? (
          <Tooltip
            id={`my-tooltip-children-sad-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.sad[0] &&
                reactionsState.sad.map((reaction, i) => (
                  <span key={i}>{reaction.user.nick_name}</span>
                ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-laugh-${id}`}
            className="flex flex-row items-center"
          >
            <FaRegFaceLaughSquint
              color={
                findReactionsByUserId(reactionsState.laugh)
                  ? "#c46703fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#c4670357] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.laugh)
                  ? () => handleUnReaction(reactionsState.laugh, "laugh")
                  : () => handleReaction("laugh")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.laugh)
                  ? "text-[#c46703fc]"
                  : ""
              }`}
            >
              {reactionsState.laugh.length}
            </span>
          </a>
        </div>
        {reactionsState.laugh[0] ? (
          <Tooltip
            id={`my-tooltip-children-laugh-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.laugh[0] &&
                reactionsState.laugh.map((reaction, i) => (
                  <span key={i}>{reaction.user.nick_name}</span>
                ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-love-${id}`}
            className="flex flex-row items-center"
          >
            <IoMdHeartEmpty
              color={
                findReactionsByUserId(reactionsState.love)
                  ? "#E11447"
                  : "#000000"
              }
              size={25}
              className={`rounded-full  hover:bg-[#e1144763] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.love)
                  ? () => handleUnReaction(reactionsState.love, "love")
                  : () => handleReaction("love")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.love)
                  ? "text-[#E11447]"
                  : ""
              }`}
            >
              {reactionsState.love.length}
            </span>
          </a>
        </div>
        {reactionsState.love[0] ? (
          <Tooltip
            id={`my-tooltip-children-love-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.love[0] &&
                reactionsState.love.map((reaction, i) => (
                  <span key={i}>{reaction.user.nick_name}</span>
                ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="relative inline-block">
        <div className="p-2 cursor-pointer ">
          <a
            data-tooltip-id={`my-tooltip-children-like-${id}`}
            className="flex flex-row items-center"
          >
            <SlLike
              color={
                findReactionsByUserId(reactionsState.like)
                  ? "#03b1c4fc"
                  : "#000000"
              }
              size={25}
              className={`rounded-md  hover:bg-[#03b1c45e] cursor-pointer ${
                sending ? "opacity-50 pointer-events-none" : ""
              }`}
              onClick={
                sending
                  ? null
                  : findReactionsByUserId(reactionsState.like)
                  ? () => handleUnReaction(reactionsState.like, "like")
                  : () => handleReaction("like")
              }
            />
            <span
              className={`font-semibold text-lg ml-2 ${
                findReactionsByUserId(reactionsState.like)
                  ? "text-[#03b1c4fc]"
                  : ""
              }`}
            >
              {reactionsState.like.length}
            </span>
          </a>
        </div>
        {reactionsState.like[0] ? (
          <Tooltip
            id={`my-tooltip-children-like-${id}`}
            place="right-start"
            delayShow={1000}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              {reactionsState.like[0] &&
                reactionsState.like.map((reaction, i) => (
                  <span key={i}>{reaction.user.nick_name}</span>
                ))}
            </div>
          </Tooltip>
        ) : null}
      </div>

      <div className="hidden lg:flex items-center direction:row mt-2 p-2 ">
        <RiMessage2Line color="#0C6410" size={25} />
        <span className="text-[#0C6410] font-semibold text-lg ml-2">
          {commentsQuantity}
        </span>
      </div>
    </>
  );
};

export default IconsReactions;
