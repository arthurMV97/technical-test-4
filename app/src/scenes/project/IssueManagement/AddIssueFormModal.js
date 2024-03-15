import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import LoadingButton from "../../../components/loadingButton";
import api from "../../../services/api";
import toast from "react-hot-toast";

const AddIssueFormModal = ({ isOpen, onCloseModal, projectId, addNewIssue }) => {
    if (!isOpen) return null;
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const { data } = await api.get("/user");
            console.log('data', data);
            setUsers(data);
        })();
    }, [isOpen])


    return (
        <div
            className=" absolute top-0 bottom-0 left-0 right-0 bg-[#00000066] flex justify-center p-[1rem] z-50 "
            onClick={() => onCloseModal()}>
            <div
                className="w-[40%] h-fit bg-[white] p-[25px] rounded-md flex flex-column justify-center items-center "
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <h3 className="text-[22px] font-semibold ml-2 mt-4 mb-1">Add new issue</h3>

                <Formik
                    initialValues={{}}
                    onSubmit={async ({ type, assigneeId, title, description, }, { setSubmitting }) => {
                        try {
                            const params = { type, title, description, assigneeId, assigneeName: users.find(user => user._id === assigneeId).name, projectId }
                            const res = await api.post("/issue", params);
                            if (!res.ok) throw res;
                            addNewIssue(res.data)
                            toast.success("Created!");
                            setSubmitting(false);
                            onCloseModal();

                        } catch (e) {
                            console.log(e);
                            toast.error("Some Error!", e.code);
                            setSubmitting(false);

                        }
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <React.Fragment>
                            <div className="w-full  text-left content-baseline">
                                <div>
                                    <div className="text-[14px] text-[#212325] font-medium	">Title</div>
                                    <input className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="title" value={values.title} onChange={handleChange} />
                                </div>
                                <div>
                                    <div className="text-[14px] text-[#212325] font-medium	">Description</div>
                                    <textarea rows="5" cols="33" className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="description" value={values.description} onChange={handleChange} />
                                </div>
                                <div className="mb-2">
                                    <div className="text-[14px] text-[#212325] font-medium ">Type</div>
                                    <select className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="type" value={values.type} onChange={handleChange}>
                                        <option value="FEATURE">Feature</option>
                                        <option value="BUG">Bug</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="text-[14px] text-[#212325] font-medium	">Assign to:</div>
                                    <select className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="assigneeId" value={values.assigneeId} onChange={handleChange}>
                                        <option value=""></option>
                                        {users.map((user) => <option value={user._id}>{user.name}</option>
                                        )}
                                    </select>
                                </div>
                                <LoadingButton
                                    className="mt-[1rem] bg-[#0560FD] text-[16px] font-medium text-[#FFFFFF] py-[12px] px-[22px] rounded-[10px]"
                                    loading={isSubmitting}
                                    onClick={handleSubmit}>
                                    Create
                                </LoadingButton>
                            </div>
                        </React.Fragment>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default AddIssueFormModal;