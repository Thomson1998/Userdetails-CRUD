import React, { useState } from "react";
import { MentorData } from "../Data/MentorData";
import BaseApp from "../core/base";

export default function TeacherComponent() {
    const [usermen, setUsermen] = useState(MentorData)
    return (
        <BaseApp title="Teacher Details">
            <div className="user-content">
                {usermen.map((teacher, ides) => (
                    <div className="user-card">
                        <h1>{teacher.name}</h1>
                        <p><b>Subject</b> : {teacher.subject}</p>
                        <p><b>Email</b> : {teacher.email}</p>
                        <p><b>Experience</b> : {teacher.experience}</p>
                    </div>
                ))}

            </div>

        </BaseApp>
    )
}