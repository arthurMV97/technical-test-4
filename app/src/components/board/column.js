import React from "react";
import IssueCard from "./IssueCard"
const Column = ({ title, issues, removeIssue, updateStatus }) => {
    return (<div className="flex-col p-2 min-h-max" >
        <p className="font-semibold">{title}</p>
        <div className="h-full ">
            <div className="bg-slate-100 rounded-md p-2  min-h-150 w-96  ">
                {issues.map((issue, index) => (<IssueCard key={index} issueInfos={issue} removeIssue={removeIssue} updateStatus={updateStatus} />))}
            </div>


        </div>
    </div>);
};

export default Column;
