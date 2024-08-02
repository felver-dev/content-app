const data = [
  {
    id: 1,
    text: "Read Your Favorite Blog/Article",
    url: "https://plus.unsplash.com/premium_photo-1661573604168-7c9bbc4b96e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    text: "Read Anywhere Anytime",
    url: "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    text: "Let's Go & Start",
    url: "https://images.unsplash.com/photo-1541560052-3744e48ab80b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = [
  {
    id: 1,
    title: "Newest",
  },
  {
    id: 2,
    title: "Content writing",
  },
  {
    id: 3,
    title: "Graphic",
  },
  {
    id: 4,
    title: "Banking",
  },
  {
    id: 5,
    title: "IT",
  },
];

const recommendations = [
  {
    id: 1,
    postedAt: 6,
    title: "Technology To Expect 2023",
    url: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    postedAt: 8,
    title: "LinkedIn team announce new updates for the LinkedIn app",
    url: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    postedAt: 12,
    title: "LinkedIn team announce new updates for the LinkedIn app",
    url: "https://images.unsplash.com/photo-1573496130103-a442a3754d0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  },
];

const trends = [
  {
    id: 1,
    author: "Martha Tat",
    title: "Content Creator jobs",
    content: "There is ipsum dot amet",
    postedAt: 6,
    url: "https://plus.unsplash.com/premium_photo-1661338951695-c5f24fc85d47?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwd2l0aCUyMHBlbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    author: "Jonas Smith",
    title: "Organic food is better Creator jobs",
    content: "There is ipsum dot amet",
    postedAt: 10,
    url: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    author: "Jonas Smith",
    title: "Organic food is better Creator jobs",
    content: "There is ipsum dot amet",
    postedAt: 10,
    url: "https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const following = [
  {
    id: 1,
    name: "Andrew Rash",
    field:"Design UI/UX",
    reason: "Why You Need to learn Design?",
    title: "Why Design is More Important in Now Day",
    description:
      "Welcome to enterprise projects. There are many decisions. For each one, you have to create decision criteria, do research, validate findings by creating a proof of concept, present findings",
    readTime: 5,
    url: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww",
    picture:
      "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 2,
    name: "Melinda Deshina",
    field:"Litterary",
    reason: "How to learn content writing?",
    title: "How do I Start Content Writing With No Experience",
    description:
      "Yet another great way to train yourself to write better content is through online courses. There are may content writing courses available online that you can choose from. Based on your level of experiencem you can",
    readTime: 5,
    url: "https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D",
    picture:
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Andrew Rash",
    reason: "Why You Need to learn Design?",
    field:"Design UI/UX",
    title: "Why Design is More Important in Now Day",
    description:
      "Welcome to enterprise projects. There are many decisions. For each one, you have to create decision criteria, do research, validate findings by creating a proof of concept, present findings",
    readTime: 5,
    url: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHx8MHx8fDA%3D",
    picture:
      "https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Melinda Deshina",
    reason: "How to learn content writing?",
    field:"Litterary",
    title: "How do I Start Content Writing With No Experience",
    description:
      "Yet another great way to train yourself to write better content is through online courses. There are may content writing courses available online that you can choose from. Based on your level of experiencem you can",
    readTime: 5,
    url: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D",
    picture:
      "https://plus.unsplash.com/premium_photo-1661338924220-27412f22f9da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export { data, categories, recommendations, trends, following };
