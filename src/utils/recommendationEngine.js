t UserActivity = require('../models/UserActivity');
const Course = require('../models/Course');

const getRecommendedCourses = async (userId) => {
  // Fetch activities of the user
  const userActivities = await UserActivity.find({ userId });
  const viewedCourseIds = userActivities.map(activity => activity.courseId);

  // Fetch activities of other users who viewed the same courses
  const similarUsersActivities = await UserActivity.find({ courseId: { $in: viewedCourseIds }, userId: { $ne: userId } });

  // Aggregate course recommendations
  const courseRecommendations = {};
  similarUsersActivities.forEach(activity => {
    if (!courseRecommendations[activity.courseId]) {
      courseRecommendations[activity.courseId] = 0;
    }
    courseRecommendations[activity.courseId]++;
  });

  // Sort courses by recommendation score and fetch course details
  const recommendedCourseIds = Object.keys(courseRecommendations).sort((a, b) => courseRecommendations[b] - courseRecommendations[a]);
  const recommendedCourses = await Course.find({ _id: { $in: recommendedCourseIds } });

  return recommendedCourses;
};

module.exports = { getRecommendedCourses };
