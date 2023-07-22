import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoals, updateGoal } from "../features/goals/goalSlice";
import { CgCloseO } from "react-icons/cg";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className={`goal ${goal.status === "done" ? "goal-done" : ""}`}>
      <div>{new Date(goal.createdAt).toLocaleString("pl-PL")}</div>
      <h2>{goal.text}</h2>
      <h3>
        {goal.status === "done" ? (
          <>
            <MdOutlineDoneOutline />
          </>
        ) : (
          <>In progress⏳</>
        )}
      </h3>
      <button onClick={() => dispatch(deleteGoals(goal._id))} className="close">
        <CgCloseO />
      </button>
      {goal.status !== "done" && (
        <button
          onClick={() => dispatch(updateGoal({ id: goal._id, status: "done" }))}
          className="update-buttton"
        >
          Mark as done
        </button>
      )}
    </div>
  );
}

export default GoalItem;
