import React, { useState } from "react";
import { CreateRoutines } from "../api/CreateRoutines";

export const RoutineForm = ({ token }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [creatorName, setCreatorName] = useState("");
    const [activities, setactivities] = useState("");
