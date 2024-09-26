import { z } from "zod";

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

// Contact form types
export const contactFormSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;

// Contact form types
export const franchiseFormSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  location: z.string().min(2).max(300),
  motivation: z.string().min(2).max(300),
  budget: z.number(),
  message: z.string().min(2).max(300),
});

export type TFranchiseFormSchema = z.infer<typeof franchiseFormSchema>;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
};
