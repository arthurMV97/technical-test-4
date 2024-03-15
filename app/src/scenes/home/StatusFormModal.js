import { Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import LoadingButton from "../../components/loadingButton";
import api from "../../services/api";

const StatusFormModal = ({ isOpen, onCloseModal, id, onStatusUpdated }) => {
    if (!isOpen) return null;



    return (
        <div
            className=" absolute top-0 bottom-0 left-0 right-0 bg-[#00000066] flex justify-center p-[1rem] z-50 "
            onClick={() => onCloseModal()}>
            <div
                className="w-[40%] h-fit bg-[white] p-[25px] rounded-md flex flex-column justify-center items-center "
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <h3 className="text-[22px] font-semibold ml-2 mt-4 mb-1">Update Issue Status</h3>

                <Formik
                    initialValues={{}}
                    onSubmit={async ({ status }, { setSubmitting }) => {
                        try {
                            console.log('status', status);
                            const res = await api.put(`/issue/${id}`, { status });
                            if (!res.ok) throw res;
                            onStatusUpdated()
                            toast.success("Updated!");
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
                                <select className="projectsInput text-[14px] font-normal text-[#212325] rounded-[10px]" name="status" value={values.status} onChange={handleChange}>
                                    <option value="" hidden></option>
                                    <option value="TODO">To Do</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="DONE">Done</option>

                                </select>
                            </div>

                            <LoadingButton
                                className="mt-[1rem] bg-[#0560FD] text-[16px] font-medium text-[#FFFFFF] py-[12px] px-[22px] rounded-[10px]"
                                loading={isSubmitting}
                                onClick={handleSubmit}>
                                Update
                            </LoadingButton>

                        </React.Fragment>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default StatusFormModal;