export interface Course {
    courseCode: string;
    subjectCode: string;
    level: string;
    progression: "A" | "B" | "C" | "AV";
    courseName: string;
    points: number;
    institutionCode: string;
    subject: string;
    syllabus: string;  
    isStarred?: boolean;  
}
