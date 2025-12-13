import instance from "../util/instance";
export const adminAPI = {
    getAdminMedicineApprovalList : ()=>instance.get("/api/admin/medicine/approval"),
    getAdminMedicineApprovalDetails: ({ id }) =>
        instance.get(`/api/admin/medicine/approval/${id}`)
}
