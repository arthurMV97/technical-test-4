import React, { useCallback } from "react";
import Column from "./column";

const ISSUES_COLUMNS = [{ status: "TODO", title: "To do:" }, { status: "IN_PROGRESS", title: "In Progress:" }, { status: "DONE", title: "Done:" }]

const Board = ({ title, issues, removeIssue, updateStatus }) => {

    const filteredByTypeIssues = useCallback((issues, status) => {
        return issues.filter(issue => issue.status === status)
    }, [issues])


    return (<>
        <h2 className="text-[22px] font-semibold ml-2 mt-4 mb-1">{title}</h2>

        <div className="bg-white mb-[10px] rounded-lg  flex gap-4 p-3 justify-around">
            {issues && ISSUES_COLUMNS.map((element, index) => <Column key={index} title={element.title} issues={filteredByTypeIssues(issues, element.status)} removeIssue={removeIssue} updateStatus={updateStatus} />)}
        </div>

    </>)
}


export default Board;