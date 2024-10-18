export type NavigationLink = {
  name: string;
  link: string;
};

export type CourseData = {
  index: number;
  courseTitle: string;
  courseImageUrl: string;
  courseDescription: string;
  courseDuration?: string;
  courseSignUpUrl?: string;
};

export type pesTeamMemberData = {
  imageUrl: string;
  teamMemberName: string;
  teamMemberRole: string;
  socialMedias: {
    imgUrl: string;
    socialUrl: string;
  }[];
};

export type certificateData = {
  id: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};
