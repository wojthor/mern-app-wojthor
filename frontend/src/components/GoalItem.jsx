import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoals } from "../features/goals/goalSlice";
import { CgCloseO } from "react-icons/cg";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("pl-PL")}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoals(goal._id))} className="close">
        <CgCloseO />
      </button>
    </div>
  );
}

export default GoalItem;
