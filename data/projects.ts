export type ProjectStatus = "shipped" | "in-development" | "experiment";

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  size?: "content" | "wide";
};

export type ProjectImageGroup = {
  images: ProjectImage[];
  layout: "pair";
  caption?: string;
};

export type ProjectSection = {
  title: string;
  content: string[];
  image?: ProjectImage;
  imageGroup?: ProjectImageGroup;
};

export type ProjectLink = {
  label: string;
  href: string;
  type?: "external" | "download";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  type: string;
  status: ProjectStatus;
  version?: string;
  year: number;
  description: string;
  stack: string[];
  links?: ProjectLink[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "FN-001",
    slug: "hasla-lokkeberg",
    title: "Hasla-Løkkeberg",
    type: "Production Website",
    status: "shipped",
    year: 2022,
    description:
      "A production website built from the ground up, from frontend development and API integration to DNS, hosting and deployment.",
    stack: ["React", "TypeScript", "JavaScript", "API"],
    links: [
      {
        label: "Haslalokkeberg.no",
        href: "https://haslalokkeberg.no/",
        type: "external",
      },
    ],
    sections: [
      {
        title: "Observation",
        content: [
          "Hasla-Løkkeberg originally relied on Instagram as its main digital presence. While it worked well as a place to share our photography, we wanted to establish a more professional presence and create a dedicated space where potential clients could understand who we are, see our work and get in touch.",

          "The website grew out of a need to broaden the reach of the business beyond social media. Rather than replacing Instagram, the goal was to create a digital home for Hasla-Løkkeberg that we could control ourselves and that could function as a more complete point of contact for potential clients.",
        ],
      },

      {
        title: "Approach",
        content: [
          "I approached the website as both a portfolio and a practical part of the business. The photography needed to remain central, while information about us and a clear route to making an enquiry had to be easy to find.",

          "Because the site represents an active photography business rather than a static portfolio project, I also wanted it to be something I could continue to maintain after launch. New wedding photographs and information can be added over time, while the contact form gives potential clients a direct way to reach us through the website.",
        ],
        image: {
          src: "/projects/hasla-lokkeberg/hasla-home-desktop.png",
          alt: "Desktop homepage of the Hasla Løkkeberg photography website, with navigation, a large photographic hero and introductory content.",
          caption: "Hasla Løkkeberg homepage.",
          size: "wide",
        },
      },

      {
        title: "Implementation",
        content: [
          "I designed and built the first production version of the Hasla Løkkeberg website independently, without AI assistance. The initial release covered the complete process from frontend development and API integration to deployment. The site is hosted through GitHub Pages and connected to our own custom domain.",

          "Because the website is live and used by potential clients, I use separate Git branches when developing changes. New features, visual changes and code improvements can be tested away from the production version before being merged into the main branch and deployed.",

          "The contact form is one of the few dynamic parts of an otherwise relatively static website, and it is an important part of the business. I implemented error handling so that users receive a clear message if the email service is unavailable rather than being given the impression that their enquiry was successfully sent.",

          "That fallback has also proved useful in practice. During a routine visit to the website, I tested the contact form and received the error state I had implemented. This revealed that the email functionality had stopped working and allowed me to investigate the problem rather than leaving a broken contact form unnoticed.",

          "Since the original launch, I have continued to maintain the site with new wedding photography, updated contact information and changes to the interface and codebase. Some of this later development has involved AI as a collaborative tool, while the original production version was built without AI assistance.",
        ],
      },

      {
        title: "Findings",
        content: [
          "The website has become more important to the business than I initially expected. Since its launch, more than half of our enquiries have come through the website, making it one of the main ways potential clients now contact Hasla-Løkkeberg.",

          "Maintaining a live production website has also changed how I think about development. Features such as error handling, testing changes before deployment and maintaining external services matter differently when the website is actively being used by potential clients.",

          "The project continues to evolve rather than having a fixed endpoint. New photography is added regularly, information is updated and the interface and codebase are refined as I identify things that can be improved.",
        ],
      },
    ],
  },
  {
    id: "FN-002",
    slug: "sortly",
    title: "Sortly",
    type: "Native macOS Application",
    status: "shipped",
    year: 2026,
    description:
      "A native macOS application for organizing files through a focused desktop interface.",
    stack: ["Swift", "SwiftUI"],
    version: "0.1",
    links: [
      {
        label: "Source code",
        href: "https://github.com/hhummus/Sortly",
        type: "external",
      },
      {
        label: "Download v0.1",
        href: "https://github.com/hhummus/Sortly/releases/download/v0.1.0/Sortly.zip",
        type: "download",
      },
    ],
    sections: [
      {
        title: "Observation",
        content: [
          "My work as an analogue wedding photographer regularly leaves me with large batches of scanned photographs delivered as both JPEG and TIFF files. Once editing is added to the workflow, duplicates and different versions of the same photographs quickly accumulate.",

          "Preparing a finished delivery meant repeatedly sorting files by format, identifying duplicates, creating separate folder structures and renaming large numbers of images by hand. None of these tasks were particularly difficult on their own, but together they turned into a repetitive and time-consuming part of every project.",

          "I wanted a tool that could handle that routine for me: take a mixed folder of files, identify what was there, organize the files into the right structure, deal with duplicates and apply consistent filenames without requiring the same manual process every time.",
        ],
      },
      {
        title: "Approach",
        content: [
          "The original concept was built around a drag-and-drop workflow: drop a folder into Sortly and use one interface to handle the repetitive file-management tasks that normally happen afterwards. The current version uses folder selection instead, while drag and drop remains a possible future improvement.",

          "Once a folder is selected, Sortly brings several operations into the same workflow: separating files by type, identifying duplicates, and renaming files using a consistent sequential pattern such as brand-name-1, brand-name-2 and so on.",

          "I also wanted the folder itself to become easier to understand before making any changes. Sortly reports information such as the total size of the folder, the number of files it contains and the distribution of different file types.",
        ],
        image: {
          src: "/projects/sortly/sortly-main-interface.png",
          alt: "Sortly interface for selecting a folder and configuring file organization, naming and duplicate handling.",
          caption: "The main Sortly interface.",
          size: "wide",
        },
      },
      {
        title: "Implementation",
        content: [
          "Sortly was my first attempt at building a native application and my first encounter with Swift and SwiftUI. The implementation was heavily AI-assisted.",

          "My role was primarily to define the problem, describe the functionality and interaction I wanted, prompt and iterate on the implementation, test the application, identify problems and refine the result. AI handled much of the Swift and SwiftUI implementation that I would not have been able to write independently.",

          "The process gave me an introduction to native application development and some familiarity with how a SwiftUI project is structured, but there is still a significant difference between having built this application with AI assistance and being able to develop confidently in SwiftUI on my own.",

          "The decision to target macOS was practical: I use a Mac myself, and Sortly initially existed only to solve my own workflow problem. In retrospect, I would have considered a cross-platform approach if the application had originally been intended for a wider audience.",
        ],
        imageGroup: {
          layout: "pair",
          images: [
            {
              src: "/projects/sortly/sortly-preview-normal.png",
              alt: "Sortly normal preview showing a summary of files scanned, file types found and duplicate detection.",
              caption: "Normal preview",
            },
            {
              src: "/projects/sortly/sortly-preview-technical.png",
              alt: "Sortly technical log showing a dry run of planned file moves, renaming and duplicate handling.",
              caption: "Technical log",
            },
          ],
          caption:
            "Previewing an operation before changes are applied. The normal view summarizes the result, while the technical log exposes the individual file operations.",
        },
      },
      {
        title: "Findings",
        content: [
          "Sortly is functional, and I currently use it to identify duplicate files and separate different file types into their own folders. In that sense, it solves parts of the original problem it was built for.",

          "Using it in practice has also made its limitations clearer. The application is useful for performing individual file-management operations, but the workflow still feels more constrained than I would like. I am not yet certain whether this is primarily an interface problem or a limitation in how I originally defined the product.",

          "A larger problem has started to emerge from using the application. Rather than only sorting files by type or removing duplicates, I would like Sortly to be able to impose structure on an otherwise unorganized collection of files. For example, an archive could be organized automatically by year, then by month, and finally by file type.",

          "This changes the problem from performing a set of file operations to defining how a collection of files should be organized. That is the direction I would explore in a future iteration of Sortly.",
        ],
      },
    ],
  },
  {
    id: "FN-003",
    slug: "mylocker",
    title: "MyLocker",
    type: "Digital Subscription Manager",
    status: "in-development",
    year: 2026,
    description:
      "A concept for bringing subscriptions, accounts and mailing-list relationships into one place, making unwanted digital subscriptions easier to identify and manage.",
    stack: [],
    sections: [],
  },
];
