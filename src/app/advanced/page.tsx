import CourseCard from "@/src/components/course/CourseCard";
import { courseData } from "@/src/data/dummy";

export default function AdvancedPage() {
  return (
    <div>
      <CourseCard course={courseData[2]} />
    </div>
  );
}