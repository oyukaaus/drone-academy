import CourseCard from "@/src/components/course/CourseCard";
import { courseData } from "@/src/data/dummy";

export default function MidPage() {
  return (
      <CourseCard course={courseData[1]} />
  );
}
