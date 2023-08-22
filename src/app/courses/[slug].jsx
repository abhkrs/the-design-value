// src/app/courses/[slug].js

import { useRouter } from 'next/router';
import api from '../../../utils/api'; // Check if the path is correct

export default function CoursePage({ course }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{course.CourseName}</h1>
      {/* Render other course details */}
    </div>
  );
}

export async function getStaticPaths() {
  // Implement this function if needed
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const response = await api.get(`/Courses/${slug}`); // Adjust the path accordingly
  const course = response.CourseData; // Adjust the property based on your API response structure

  return {
    props: {
      course
    }
  };
}
