import Template from "@/components/EventsTemplate";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Scholarships() {
  const ScholarshipsData = [
    {
      title: "UWC منحة المدارس المتحدة العالمية",
      description:
        "تعتبر هذه المنحة واحدة من أهم الفرص لطلاب الثانوية العامة الراغبين في الحصول على تعليم عالمي. تهدف هذه منحة إلى جمع طلاب من مختلف أنحاء العالم لتلقي تعليم شامل في بيئة متعددة الثقافات. تتوفر هذه المنحة للطلاب الذين تتراوح أعمارهم بين 16 و18 عامًا، وتشمل الرسوم الدراسية وتكاليف المعيشة في واحدة من المدارس التابعة لمنظمة UWC المنتشرة في 17 دولة حول العالم. يتم اختيار الطلاب بناءً على التفوق الأكاديمي، المهارات القيادية، والمشاركة المجتمعية. يمكن للطلاب التقديم على هذه المنحة من خلال موقع المنظمة الرسمي ",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.uwc.org/scholarships",
    },
    {
      title: "منحة صندوق الأمل لطلاب الثانوية العامة",
      description:
        "تستهدف هذه المنحة الطلاب المتفوقين أكاديميًا الذين ينتمون إلى أسر ذات دخل محدود، وتمنحهم فرصة مواصلة تعليمهم في مدارس ثانوية خاصة أو دولية. تشمل المنحة الرسوم الدراسية وتكاليف المعيشة، مما يتيح للطلاب التركيز على دراستهم دون القلق بشأن الجوانب المالية. يتم اختيار الطلاب بناءً على أدائهم الأكاديمي المتميز، بالإضافة إلى حاجتهم المالية والمشاركة في الأنشطة التطوعية. هذه المنحة تعتبر بوابة لتحقيق أحلام الطلاب في الحصول على تعليم أفضل",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.dsamohe.gov.jo/Internal/Zone",
    },
    {
      title: "منحة مؤسسة التعليم فوق الجميع برنامج الفاخورة",
      description:
        "توفر هذه المنحة فرصة للطلاب من المناطق المتأثرة بالنزاعات لإكمال تعليمهم الثانوي في بيئة آمنة ومميزة. تستهدف المنحة الطلاب الذين أظهروا تفوقًا أكاديميًا ولكنهم يواجهون تحديات اقتصادية أو اجتماعية تعيق تقدمهم التعليمي. تغطي المنحة الرسوم الدراسية وتكاليف المعيشة بالكامل، مما يمنح الطلاب الاستقرار المالي الذي يحتاجونه للتركيز على دراستهم",
      linkLabel: "Scholarship Link",
      linkUrl: "https://educationaboveall.org/our-programmes/al-fakhoora",
    },
    {
      title: "Davis International Scholars Program منحة",
      description:
        "هذه المنحة موجهة للطلاب الدوليين الذين يطمحون للحصول على تعليم ثانوي في المدارس الأمريكية أو الدولية المرموقة. تتوفر هذه الفرصة للطلاب المتفوقين الذين يمتلكون مهارات قيادية بارزة، ويشاركون في الأنشطة المجتمعية. تغطي المنحة الرسوم الدراسية وتكاليف السكن، مما يتيح للطلاب فرصة متابعة دراستهم في بيئة تعليمية متقدمة. يتم قبول الطلاب بناءً على تقييم شامل لأدائهم الأكاديمي وأنشطتهم الخارجية.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://www.milton.edu/wp-content/uploads/2020/11/Davis-International-Scholars-Program.pdf",
    },
    {
      title: "African Leadership Academy ALA منحة",
      description:
        "تقدم أكاديمية القيادة الأفريقية (ALA) منحة دراسية موجهة للطلاب الأفارقة المتفوقين في المرحلة الثانوية. تهدف الأكاديمية إلى تطوير قادة المستقبل من خلال تقديم تعليم دولي عالي الجودة، يعتمد على بناء القدرات القيادية وتطوير مهارات ريادة الأعمال. تشمل المنحة الرسوم الدراسية وتكاليف المعيشة، وتستمر لمدة عامين. الطلاب المختارون يخضعون لتدريب مكثف في مجالات القيادة والمجتمع المدني، بالإضافة إلى تعليمهم الأكاديمي",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.africanleadershipacademy.org",
    },
    {
      title: "Lester B. Pearson منحة جامعة تورنتو الدولية",
      description:
        "تُعد جامعة تورنتو واحدة من أفضل الجامعات في العالم، وتقدم  هذه منحة للطلاب الدوليين المتميزين أكاديميًا والذين أظهروا مهارات قيادية. تغطي المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يطمحون لتطوير أنفسهم أكاديميًا ومجتمعيًا. يجب أن يتسم المتقدمون بالتفوق الأكاديمي والمشاركة في الأنشطة المجتمعية",
      linkLabel: "Scholarship Link",
      linkUrl: "https://future.utoronto.ca/pearson/about/",
    },
    {
      title: "منحة جامعة كامبريدج للطلاب الدوليين",
      description:
        "جامعة كامبريدج، واحدة من أقدم وأعرق الجامعات في العالم، تقدم منحًا للطلاب الدوليين لدراسة البكالوريوس. تشمل المنحة الرسوم الدراسية وبدل المعيشة، وتستهدف الطلاب المتفوقين أكاديميًا الذين يبدون التزامًا بالمساهمة في مجتمعاتهم.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.cambridgetrust.org/scholarships",
    },
    {
      title: "منحة جامعة أكسفورد للطلاب الدوليين",
      description:
        "تقدم جامعة أكسفورد، المعروفة بتميزها الأكاديمي، منحًا دراسية للطلاب الدوليين في مختلف التخصصات. تغطي المنح الرسوم الدراسية، وتكاليف المعيشة، وتهدف إلى جذب الطلاب الموهوبين من جميع أنحاء العالم.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-support/reach-oxford-scholarship",
    },
    {
      title: "منحة جامعة هارفارد للطلاب الدوليين",
      description:
        "تقدم جامعة هارفارد منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://college.harvard.edu/financial-aid",
    },
    {
      title: "منحة جامعة ستانفورد للطلاب الدوليين",
      description:
        "تقدم جامعة ستانفورد منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://financialaid.stanford.edu/undergrad/",
    },
    {
      title: "منحة جامعة ييل للطلاب الدوليين",
      description:
        "تقدم جامعة ييل منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://admissions.yale.edu/financial-aid",
    },
    {
      title: "منحة جامعة كولومبيا للطلاب الدوليين",
      description:
        "تقدم جامعة كولومبيا منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://undergrad.admissions.columbia.edu/cost-aid/financial-aid",
    },
    {
      title: "منحة جامعة ملبورن للطلاب الدوليين",
      description:
        "تقدم جامعة ملبورن منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://scholarships.unimelb.edu.au/",
    },
    {
      title: "منحة جامعة سيدني للطلاب الدوليين",
      description:
        "تقدم جامعة سيدني منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://sydney.edu.au/scholarships/",
    },
    {
      title: "منحة جامعة كوينزلاند للطلاب الدوليين",
      description:
        "تقدم جامعة كوينزلاند منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://scholarships.uq.edu.au/",
    },
    {
      title: "منحة جامعة أوتاوا للطلاب الدوليين",
      description:
        "تقدم جامعة أوتاوا منحًا دراسية للطلاب الدوليين الذين يظهرون تفوقًا أكاديميًا ومهارات قيادية. تشمل المنحة الرسوم الدراسية، السكن، والمصاريف الإضافية، وتهدف إلى دعم الطلاب الذين يسعون لتحقيق أهدافهم الأكاديمية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.uottawa.ca/alumni/",
    },
    {
      title: "منحة الحكومة البريطانية تشيفنينج",
      description:
        "هذه المنحة موجهة لطلاب الماجستير من جميع الأعمار، وهي تهدف إلى دعم الطلاب ذوي الإمكانات القيادية للدراسة في المملكة المتحدة. تشمل المنحة الرسوم الدراسية، تكاليف السفر والمعيشة. للتقديم، يحتاج الطلاب إلى شهادة جامعية وخبرة عمل لا تقل عن سنتين، إضافة إلى إتقان اللغة الإنجليزية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://www.chevening.org/apply/",
    },
    {
      title: "منحة فولبرايت للدراسات العليا",
      description:
        "تقدم هذه المنحة للطلاب الدوليين الذين يرغبون في متابعة دراساتهم العليا في الولايات المتحدة. تشمل المنحة الرسوم الدراسية، تكاليف المعيشة، وتكاليف السفر. يجب على المتقدمين أن يكونوا قد حصلوا على درجة البكالوريوس وأن يظهروا إمكانات قيادية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://foreign.fulbrightonline.org/about/foreign-fulbright",
    },
    {
      title: "منحة إيراسموس موندوس",
      description:
        "تقدم هذه المنحة للطلاب الدوليين الذين يرغبون في متابعة دراساتهم العليا في أوروبا. تشمل المنحة الرسوم الدراسية، تكاليف المعيشة، وتكاليف السفر. يجب على المتقدمين أن يكونوا قد حصلوا على درجة البكالوريوس وأن يظهروا إمكانات قيادية.",
      linkLabel: "Scholarship Link",
      linkUrl: "https://eacea.ec.europa.eu/erasmus-plus_en",
    },
    {
      title: "منحة DAAD للدراسات العليا",
      description:
        "تقدم هذه المنحة للطلاب الدوليين الذين يرغبون في متابعة دراساتهم العليا في ألمانيا. تشمل المنحة الرسوم الدراسية، تكاليف المعيشة، وتكاليف السفر. يجب على المتقدمين أن يكونوا قد حصلوا على درجة البكالوريوس وأن يظهروا إمكانات قيادية.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    },
    {
      title: "منحة الحكومة الكندية",
      description:
        "تقدم هذه المنحة للطلاب الدوليين الذين يرغبون في متابعة دراساتهم العليا في كندا. تشمل المنحة الرسوم الدراسية، تكاليف المعيشة، وتكاليف السفر. يجب على المتقدمين أن يكونوا قد حصلوا على درجة البكالوريوس وأن يظهروا إمكانات قيادية.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://www.educanada.ca/scholarships-bourses/index.aspx?lang=eng",
    },
    {
      title: "منحة الحكومة الأسترالية",
      description:
        "تقدم هذه المنحة للطلاب الدوليين الذين يرغبون في متابعة دراساتهم العليا في أستراليا. تشمل المنحة الرسوم الدراسية، تكاليف المعيشة، وتكاليف السفر. يجب على المتقدمين أن يكونوا قد حصلوا على درجة البكالوريوس وأن يظهروا إمكانات قيادية.",
      linkLabel: "Scholarship Link",
      linkUrl:
        "https://www.studyinaustralia.gov.au/english/australian-education/scholarships",
    },
  ];

  return (
    <div>
      <Header />

      <section className="bg-curlyBackground bg-no-repeat bg-cover bg-bottom w-full h-full">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 pt-14 mx-12">
          <li className="last-of-type:mb-0 mb-20 pb-20 ms-6">
            {ScholarshipsData.map(
              ({ title, description, linkLabel, linkUrl }, index) => (
                <Template
                  key={index}
                  title={title}
                  description={description}
                  linkLabel={linkLabel}
                  linkUrl={linkUrl}
                />
              ),
            )}
          </li>
        </ol>
      </section>

      <Footer />
    </div>
  );
}
