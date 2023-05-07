import { VStack } from "@chakra-ui/react";
import { DB } from "../../DB";
import Course from "../components/Course";

const AllCourses = () => {
  return (
    <VStack spacing="1rem" mt="4">
      {DB.courses.map((course, index) => {
        return (
          <Course key={index} heading={course.heading} about={course.about} />
        );
      })}
    </VStack>
  );
};

export default AllCourses;
