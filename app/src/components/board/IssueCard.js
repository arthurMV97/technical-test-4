import React from "react";
import DeleteCross from "../../assets/DeleteCross";

const IssueCard = ({ issueInfos, index, removeIssue, updateStatus }) => {
    return (
        <div className={`bg-white border rounded-md p-3  my-2 ${updateStatus && "cursor-pointer"}`} onClick={() => updateStatus?.(issueInfos._id)}>
            <div className="flex flex-flow justify-between">
                <p className="font-semibold">{issueInfos?.title}</p>
                {removeIssue && <button className="bg-white  pr-1" onClick={() => { removeIssue(issueInfos._id) }}><DeleteCross /></button>}
            </div>
            <p className="text-s w-30 break-words leading-4	">{issueInfos?.description}</p>
            <div className="flex flex-flow justify-between">
                <p className="text-xs mt-2">Reporter: {issueInfos.reporter}</p>
                <p className="text-xs mt-2">Assignee: {issueInfos.assigneeName}</p>

                <div draggable={false} className={`border-2 rounded-sm ${issueInfos.type == "BUG" ? "border-purple-600" : "border-sky-600"}  p-1`}>
                    <p className="text-xs  p-0">{issueInfos.type === "BUG" ? "Bug" : "Feature"}</p>
                </div>
            </div>

        </div>)
}
export default IssueCard;


