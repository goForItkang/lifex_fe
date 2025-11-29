import { data } from "react-router-dom";
import instance from "../util/instance"
import React from 'react';

export const patientAPI = {
    getPatientList :() => instance.get("/api/patients"),
    getPatientDetails: (id) => instance.get(`/api/ai/patient/${id}`),
};
