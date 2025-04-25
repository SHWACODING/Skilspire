import Card from "@/components/CardTemplate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Scholarships() {
  const CoursesData = [
    {
      title: "Fundamentals of Digital Marketing - Google",
      description:
        "Learn the fundamentals of digital marketing with this free course from Google. After completing the course, you will be a professional in Digital Marketing and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "40 Hours | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl:
        "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
    },
    {
      title: "Inbound Marketing – HubSpot Academy",
      description:
        "Learn the fundamentals of inbound marketing with this free course from HubSpot Academy. After completing the course, you will be a professional in Inbound Marketing and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "4 Hours | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://academy.hubspot.com/courses/inbound-marketing",
    },
    {
      title: "Digital Marketing Strategy – Coursera",
      description:
        "Learn how to create a digital marketing strategy with this free course from the University of Edinburgh. After completing the course, you will be a professional in Digital Marketing Strategy and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "4 Weeks | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://www.coursera.org/learn/digital-marketing-strategy",
    },
    {
      title: "Introduction to Graphic Design – Udemy",
      description:
        "Learn the fundamentals of graphic design with this free course from Udemy. After completing the course, you will be a professional in Graphic Design and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "2 Hours | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: " https://www.udemy.com/course/introduction-to-graphic-design/",
    },
    {
      title: "Graphic Design – Alison",
      description:
        "Learn the fundamentals of graphic design with this free course from Alison. After completing the course, you will be a professional in Graphic Design and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "10-15 Hours | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://alison.com/course/graphic-design",
    },
    {
      title: "Graphic Design Specialization – Coursera",
      description:
        "Learn the fundamentals of graphic design with this free course from Coursera. After completing the course, you will be a professional in Graphic Design and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "4 Weeks | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://www.coursera.org/specializations/graphic-design",
    },
    {
      title: "CS50 – Harvard University - edX",
      description:
        "Learn the fundamentals of computer science with this free course from Harvard University. After completing the course, you will be a professional in Computer Science and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "12 Weeks | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://cs50.harvard.edu/x/",
    },
    {
      title: "Learn Python 3 – Codecademy",
      description:
        "Learn the fundamentals of Python programming with this free course from Codecademy. After completing the course, you will be a professional in Python programming and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "25 Hours | Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://www.codecademy.com/learn/learn-python-3",
    },
    {
      title: "The Odin Project",
      description:
        "Learn web development with this free course from The Odin Project. After completing the course, you will be a professional in Web Development and also you will receive a certificate and can add it to your CV or LinkedIn profile.",
      content: "Free | Certificate",
      linkLabel: "Enroll Now",
      linkUrl: "https://www.theodinproject.com/",
    },
  ];

  return (
    <div>
      <Header />
      <section className="p-10 pt-14 bg-curlyBackground bg-no-repeat bg-cover bg-bottom w-full h-full">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {CoursesData.map(
            ({ title, description, content, linkLabel, linkUrl }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                content={content}
                linkLabel={linkLabel}
                linkUrl={linkUrl}
              />
            ),
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
