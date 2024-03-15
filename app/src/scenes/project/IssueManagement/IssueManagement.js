import React, { useEffect, useState } from "react";
import Board from "../../../components/board/board";
import { COLUMNS } from "../../../constants";
import AddIssueFormModal from "./AddIssueFormModal";
import api from "../../../services/api";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import toast from "react-hot-toast";

const IssuesManagement = () => {

    const { id } = useParams();
    const [isOpen, setOpen] = useState(false)
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/issue/project/${id}`);
            setIssues(data)
        })();



    }, [])

    const removeIssue = async (id) => {
        const confirm = window.confirm("Are you sure ?");
        if (!confirm) return;
        try {
            const res = await api.remove(`/issue/${id}`)
            if (!res.ok) throw res;
            toast.success("Deleted!");
            const newIssuesList = issues.filter((issue) => issue._id !== id)
            setIssues(newIssuesList)

        } catch (e) {
            console.log(e);
            toast.error("Some Error!", e.code);

        }

    }
    return (
        <>
            < div className="flex flex-wrap p-3 gap-4 text-black" >
                <div className="w-full bg-[#ffffff] border border-[#E5EAEF] rounded-[16px] overflow-hidden">
                    <div className="p-6  ">
                        <Board title={"Project Issues"} issues={issues} removeIssue={removeIssue} />
                        <div className="flex flex-column items-center ">
                            <button
                                className="bg-[#0560FD] text-[#fff] py-[12px] px-[20px] rounded-[10px] text-[16px] font-medium w-32"
                                onClick={() => {
                                    setOpen(true);
                                }}>
                                + Add Issue</button></div>
                    </div>
                </div>
            </div >
            <AddIssueFormModal isOpen={isOpen} onCloseModal={() => setOpen(false)} addNewIssue={(newIssue) => setIssues((issues) => ([...issues, newIssue]))} projectId={id} />
        </>
    )
}

export default IssuesManagement;