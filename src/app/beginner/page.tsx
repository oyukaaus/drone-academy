import CourseCard from "@/src/components/course/CourseCard";
import { courseData } from "@/src/data/dummy";

export default function BeginnerPage() {
  return (
    <div>
      <CourseCard course={courseData[0]} />
    </div>
  );
}