import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

// Sample blog posts data (13 posts)
const blogPosts = [
  {
    id: '1',
    slug: 'top-5-trends-in-software-development-2025',
    title: 'Top 5 Trends in Software Development for 2025',
    excerpt: 'Discover the top trends shaping the software development industry in 2025, including AI integration, cloud solutions, and more.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Software+Trends+2025',
    category: 'Software Development',
    date: 'April 15, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
    content: `
      <h2>Introduction</h2>
      <p>The software development industry is evolving rapidly, and 2025 promises to bring exciting new trends that will shape the future of technology. In this blog post, we explore the top 5 trends that every software company should watch out for.</p>
      
      <h2>1. AI Integration</h2>
      <p>Artificial Intelligence (AI) is becoming a cornerstone of modern software development. From chatbots to predictive analytics, AI is transforming how businesses interact with customers and optimize operations.</p>
      <p>At Intention Infoservice, we specialize in integrating AI into custom software solutions, helping businesses automate processes and enhance user experiences.</p>
      
      <h2>2. Cloud-Based Solutions</h2>
      <p>Cloud computing continues to dominate, offering scalability, flexibility, and cost-efficiency. In 2025, we expect to see more businesses adopting cloud-based solutions for remote work, data storage, and collaboration.</p>
      
      <h2>3. Cybersecurity Enhancements</h2>
      <p>With cyber threats on the rise, cybersecurity is more important than ever. Software companies are focusing on building secure applications with features like encryption, multi-factor authentication, and intrusion detection.</p>
      
      <h2>4. Low-Code/No-Code Platforms</h2>
      <p>Low-code and no-code platforms are democratizing software development, allowing non-technical users to build applications. This trend is empowering businesses to innovate faster.</p>
      
      <h2>5. Sustainable Software Development</h2>
      <p>Sustainability is becoming a priority in tech. Developers are focusing on energy-efficient coding practices and sustainable infrastructure to reduce the environmental impact of software.</p>
      
      <h2>Conclusion</h2>
      <p>The trends in software development for 2025 highlight the importance of innovation, security, and sustainability. At Intention Infoservice, we're committed to helping businesses stay ahead of the curve with cutting-edge solutions.</p>
    `,
  },
  {
    id: '2',
    slug: 'why-your-business-needs-custom-software',
    title: 'Why Your Business Needs Custom Software in 2025',
    excerpt: 'Learn how custom software solutions can streamline operations, improve efficiency, and give your business a competitive edge.',
    featuredImage: 'https://placehold.co/800x400.webp?-bundle=Custom+Software',
    category: 'Business Solutions',
    date: 'April 10, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
    content: `
      <h2>Introduction</h2>
      <p>In today's competitive landscape, off-the-shelf software often falls short of meeting unique business needs. Custom software offers a tailored solution that can transform your operations.</p>
      
      <h2>Benefits of Custom Software</h2>
      <p>Custom software is designed specifically for your business, addressing your unique challenges and goals. Here are some key benefits:</p>
      <ul>
        <li><strong>Efficiency:</strong> Automate repetitive tasks and streamline workflows.</li>
        <li><strong>Scalability:</strong> Grow your software as your business expands.</li>
        <li><strong>Integration:</strong> Seamlessly integrate with existing systems.</li>
      </ul>
      
      <h2>Case Study: Custom CRM for a Retail Business</h2>
      <p>We recently developed a custom CRM for a retail client, enabling them to manage customer relationships more effectively and boost sales by 20%.</p>
      
      <h2>Conclusion</h2>
      <p>Investing in custom software can give your business a competitive edge in 2025. Contact Intention Infoservice to learn how we can help you achieve your goals.</p>
    `,
  },
  {
    id: '3',
    slug: 'the-future-of-digital-marketing',
    title: 'The Future of Digital Marketing: Strategies for Success',
    excerpt: 'Explore the future of digital marketing with strategies to boost engagement, drive traffic, and increase conversions in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Digital+Marketing',
    category: 'Digital Marketing',
    date: 'April 5, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
    content: `
      <h2>Introduction</h2>
      <p>Digital marketing is evolving at a rapid pace, driven by new technologies and changing consumer behaviors. In this post, we explore strategies to succeed in 2025.</p>
      
      <h2>1. AI-Powered Advertising</h2>
      <p>AI is revolutionizing digital marketing by enabling hyper-personalized ads that resonate with audiences.</p>
      
      <h2>2. Video Marketing Dominance</h2>
      <p>Video content continues to dominate, with platforms like TikTok and YouTube leading the way. Businesses should invest in high-quality video marketing.</p>
      
      <h2>3. Voice Search Optimization</h2>
      <p>With the rise of voice assistants, optimizing for voice search is crucial for reaching modern audiences.</p>
      
      <h2>Conclusion</h2>
      <p>Digital marketing in 2025 will be all about personalization, video, and voice search. Let Intention Infoservice help you craft a winning strategy.</p>
    `,
  },
  {
    id: '4',
    slug: 'how-to-choose-the-right-tech-stack',
    title: 'How to Choose the Right Tech Stack for Your Project',
    excerpt: 'A guide to selecting the best tech stack for your software project, balancing scalability, performance, and cost.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Tech+Stack',
    category: 'Software Development',
    date: 'April 1, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right tech stack is critical for the success of any software project. The wrong choice can lead to scalability issues, performance bottlenecks, and increased costs. In this guide, we'll walk you through the key factors to consider when selecting a tech stack for your project.</p>
      
      <h2>1. Define Your Project Requirements</h2>
      <p>Start by understanding your project's goals, target audience, and technical requirements. Are you building a web app, mobile app, or a backend system? What kind of performance and scalability do you need?</p>
      
      <h2>2. Consider Scalability and Performance</h2>
      <p>Choose technologies that can scale with your business. For example, Node.js and React are great for scalable web applications, while Python with Django is excellent for rapid development.</p>
      
      <h2>3. Evaluate Cost and Resources</h2>
      <p>Consider the cost of development, licensing, and hiring developers with the necessary skills. Open-source technologies like JavaScript and Python can help reduce costs.</p>
      
      <h2>4. Case Study: Tech Stack for an E-commerce Platform</h2>
      <p>We recently helped a client build an e-commerce platform using React, Node.js, and MongoDB, ensuring scalability and performance for their growing business.</p>
      
      <h2>Conclusion</h2>
      <p>Selecting the right tech stack requires careful planning and consideration. At Intention Infoservice, we can help you choose the best technologies for your project. Contact us today!</p>
    `,
  },
  {
    id: '5',
    slug: 'the-rise-of-low-code-platforms',
    title: 'The Rise of Low-Code Platforms: Revolutionizing Development',
    excerpt: 'Low-code platforms are changing the way software is developed. Learn how they can benefit your business.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Low+Code',
    category: 'Technology',
    date: 'March 28, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
    content: `
      <h2>Introduction</h2>
      <p>Low-code platforms are revolutionizing software development by enabling rapid application development with minimal coding. In 2025, they are becoming a game-changer for businesses of all sizes.</p>
      
      <h2>What Are Low-Code Platforms?</h2>
      <p>Low-code platforms provide a visual interface for building applications, allowing users to drag and drop components instead of writing extensive code. They are ideal for rapid prototyping and deployment.</p>
      
      <h2>Benefits of Low-Code Development</h2>
      <p>Low-code platforms offer several advantages, including:</p>
      <ul>
        <li><strong>Speed:</strong> Build applications faster with pre-built components.</li>
        <li><strong>Accessibility:</strong> Empower non-technical users to create apps.</li>
        <li><strong>Cost-Effective:</strong> Reduce development costs by minimizing the need for specialized developers.</li>
      </ul>
      
      <h2>Challenges to Consider</h2>
      <p>While low-code platforms are powerful, they may have limitations for complex applications. Businesses should evaluate their needs carefully.</p>
      
      <h2>Conclusion</h2>
      <p>Low-code platforms are transforming the development landscape. At Intention Infoservice, we can help you leverage low-code solutions to accelerate your business growth.</p>
    `,
  },
  {
    id: '6',
    slug: 'cybersecurity-best-practices-2025',
    title: 'Cybersecurity Best Practices for Businesses in 2025',
    excerpt: 'Protect your business from cyber threats with these essential cybersecurity best practices.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cybersecurity',
    category: 'Technology',
    date: 'March 25, 2025',
    author: 'Bob Wilson',
    authorImage: 'https://placehold.co/40x40.webp?text=BW',
    authorBio: 'Bob Wilson is a cybersecurity expert with over 15 years of experience in protecting businesses from digital threats.',
    content: `
      <h2>Introduction</h2>
      <p>With cyber threats becoming more sophisticated, businesses must prioritize cybersecurity in 2025. This blog post outlines essential best practices to safeguard your organization.</p>
      
      <h2>1. Implement Multi-Factor Authentication</h2>
      <p>Multi-factor authentication (MFA) adds an extra layer of security by requiring multiple forms of verification before granting access.</p>
      
      <h2>2. Regular Security Audits</h2>
      <p>Conduct regular security audits to identify vulnerabilities in your systems and address them promptly.</p>
      
      <h2>3. Employee Training</h2>
      <p>Educate your employees about phishing attacks, password security, and safe online practices to reduce human error risks.</p>
      
      <h2>4. Use Encryption</h2>
      <p>Encrypt sensitive data both in transit and at rest to protect it from unauthorized access.</p>
      
      <h2>Conclusion</h2>
      <p>Cybersecurity is a critical concern for businesses in 2025. Intention Infoservice offers custom cybersecurity solutions to keep your business safe. Contact us today!</p>
    `,
  },
  {
    id: '7',
    slug: 'ui-ux-design-trends-2025',
    title: 'UI/UX Design Trends to Watch in 2025',
    excerpt: 'Stay ahead of the curve with the latest UI/UX design trends that will shape user experiences in 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=UI+UX+Trends',
    category: 'UI/UX Design',
    date: 'March 20, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
    content: `
      <h2>Introduction</h2>
      <p>UI/UX design is constantly evolving, driven by new technologies and user expectations. In this post, we explore the top trends to watch in 2025.</p>
      
      <h2>1. Immersive 3D Interfaces</h2>
      <p>3D elements and immersive interfaces are becoming more popular, providing a more engaging user experience.</p>
      
      <h2>2. Dark Mode Optimization</h2>
      <p>Dark mode continues to be a preferred choice for users, requiring designers to optimize interfaces for readability and aesthetics.</p>
      
      <h2>3. Voice User Interfaces (VUI)</h2>
      <p>With the rise of voice assistants, VUI design is becoming essential for creating seamless user interactions.</p>
      
      <h2>Conclusion</h2>
      <p>UI/UX design trends in 2025 will focus on immersion, accessibility, and voice interaction. Intention Infoservice can help you design stunning interfaces that delight your users.</p>
    `,
  },
  {
    id: '8',
    slug: 'cloud-computing-for-small-businesses',
    title: 'Cloud Computing for Small Businesses: Benefits and Challenges',
    excerpt: 'Explore how cloud computing can help small businesses grow, along with potential challenges to consider.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Cloud+Computing',
    category: 'Business Solutions',
    date: 'March 15, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
    content: `
      <h2>Introduction</h2>
      <p>Cloud computing has become a game-changer for small businesses, offering affordable and scalable solutions. In this post, we explore the benefits and challenges of adopting cloud computing in 2025.</p>
      
      <h2>Benefits of Cloud Computing</h2>
      <p>Cloud computing provides several advantages for small businesses:</p>
      <ul>
        <li><strong>Cost Savings:</strong> Pay only for what you use with flexible pricing models.</li>
        <li><strong>Scalability:</strong> Easily scale resources as your business grows.</li>
        <li><strong>Accessibility:</strong> Access your data and applications from anywhere.</li>
      </ul>
      
      <h2>Challenges to Consider</h2>
      <p>Despite its benefits, cloud computing comes with challenges like data security concerns and potential downtime. Businesses should choose reliable providers and implement strong security measures.</p>
      
      <h2>Conclusion</h2>
      <p>Cloud computing offers immense potential for small businesses in 2025. Intention Infoservice can help you transition to the cloud seamlessly. Contact us today!</p>
    `,
  },
  {
    id: '9',
    slug: 'mobile-app-development-guide',
    title: "A Beginner's Guide to Mobile App Development in 2025",
    excerpt: 'Get started with mobile app development with this comprehensive guide tailored for beginners.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Mobile+App+Dev',
    category: 'Software Development',
    date: 'March 10, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
    content: `
      <h2>Introduction</h2>
      <p>Mobile app development is a lucrative field, and 2025 is the perfect time to get started. This beginner's guide will walk you through the basics of building your first mobile app.</p>
      
      <h2>1. Define Your App Idea</h2>
      <p>Start by identifying a problem your app will solve or a need it will fulfill. Create a clear vision for your app's purpose and target audience.</p>
      
      <h2>2. Choose the Right Platform</h2>
      <p>Decide whether to build for iOS, Android, or both. Cross-platform frameworks like React Native can help you target both platforms with one codebase.</p>
      
      <h2>3. Design and Development</h2>
      <p>Focus on creating a user-friendly design and use tools like Flutter or React Native to develop your app efficiently.</p>
      
      <h2>4. Testing and Launch</h2>
      <p>Test your app thoroughly for bugs and usability issues before launching it on app stores.</p>
      
      <h2>Conclusion</h2>
      <p>Mobile app development is an exciting journey. Intention Infoservice offers expert mobile app development services to bring your ideas to life. Contact us today!</p>
    `,
  },
  {
    id: '10',
    slug: 'voice-search-optimization',
    title: 'Voice Search Optimization: The Future of SEO',
    excerpt: 'Learn how to optimize your website for voice search to stay ahead in SEO rankings.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Voice+Search',
    category: 'Digital Marketing',
    date: 'March 5, 2025',
    author: 'Bob Wilson',
    authorImage: 'https://placehold.co/40x40.webp?text=BW',
    authorBio: 'Bob Wilson is a cybersecurity expert with over 15 years of experience in protecting businesses from digital threats.',
    content: `
      <h2>Introduction</h2>
      <p>Voice search is rapidly gaining popularity with the rise of smart speakers and voice assistants. In 2025, optimizing for voice search is essential for SEO success.</p>
      
      <h2>1. Use Conversational Keywords</h2>
      <p>Voice search queries are often conversational. Optimize your content with natural language and question-based keywords.</p>
      
      <h2>2. Focus on Local SEO</h2>
      <p>Many voice searches are location-based (e.g., "near me"). Ensure your business is optimized for local SEO with accurate listings.</p>
      
      <h2>3. Improve Page Speed</h2>
      <p>Voice search prioritizes fast-loading pages. Optimize your website's performance to rank higher in voice search results.</p>
      
      <h2>Conclusion</h2>
      <p>Voice search optimization is the future of SEO. Intention Infoservice can help you optimize your website for voice search. Contact us today!</p>
    `,
  },
  {
    id: '11',
    slug: 'sustainable-software-practices',
    title: 'Sustainable Software Practices for a Greener Future',
    excerpt: 'Discover how software companies can adopt sustainable practices to reduce environmental impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Sustainable+Software',
    category: 'Technology',
    date: 'March 1, 2025',
    author: 'Alice Johnson',
    authorImage: 'https://placehold.co/40x40.webp?text=AJ',
    authorBio: 'Alice Johnson is a tech enthusiast and writer focusing on emerging technologies and their impact on businesses.',
    content: `
      <h2>Introduction</h2>
      <p>Sustainability is a growing concern in the tech industry. In 2025, software companies are adopting sustainable practices to reduce their environmental footprint.</p>
      
      <h2>1. Energy-Efficient Coding</h2>
      <p>Optimize code to reduce computational overhead, thereby lowering energy consumption.</p>
      
      <h2>2. Green Hosting</h2>
      <p>Choose hosting providers that use renewable energy to power their data centers.</p>
      
      <h2>3. Sustainable Development Practices</h2>
      <p>Adopt practices like remote work and digital collaboration to reduce commuting and paper usage.</p>
      
      <h2>Conclusion</h2>
      <p>Sustainable software practices are essential for a greener future. Intention Infoservice is committed to sustainability in all our projects. Contact us to learn more!</p>
    `,
  },
  {
    id: '12',
    slug: 'blockchain-in-software-development',
    title: 'Blockchain in Software Development: Opportunities and Challenges',
    excerpt: 'Explore the role of blockchain technology in software development and its potential impact.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Blockchain',
    category: 'Technology',
    date: 'February 25, 2025',
    author: 'John Smith',
    authorImage: 'https://placehold.co/40x40.webp?text=JS',
    authorBio: 'John Smith is a business strategist with a passion for helping companies leverage technology to achieve their goals.',
    content: `
      <h2>Introduction</h2>
      <p>Blockchain technology is transforming industries, and software development is no exception. In 2025, blockchain offers exciting opportunities and challenges for developers.</p>
      
      <h2>Opportunities with Blockchain</h2>
      <p>Blockchain enables decentralized applications (dApps), smart contracts, and secure data management, opening new possibilities for innovation.</p>
      
      <h2>Challenges to Consider</h2>
      <p>Blockchain development can be complex, with challenges like scalability, energy consumption, and regulatory concerns.</p>
      
      <h2>Conclusion</h2>
      <p>Blockchain holds immense potential for software development. Intention Infoservice can help you explore blockchain solutions for your business. Contact us today!</p>
    `,
  },
  {
    id: '13',
    slug: 'video-marketing-strategies-2025',
    title: 'Video Marketing Strategies for 2025: Engage Your Audience',
    excerpt: 'Boost your marketing efforts with these video marketing strategies tailored for 2025.',
    featuredImage: 'https://placehold.co/800x400.webp?text=Video+Marketing',
    category: 'Digital Marketing',
    date: 'February 20, 2025',
    author: 'Jane Doe',
    authorImage: 'https://placehold.co/40x40.webp?text=JD',
    authorBio: 'Jane Doe is a senior software engineer with over 10 years of experience in building scalable web applications.',
    content: `
      <h2>Introduction</h2>
      <p>Video marketing continues to dominate digital strategies, and 2025 will bring new opportunities to engage your audience. In this post, we share top video marketing strategies.</p>
      
      <h2>1. Short-Form Videos</h2>
      <p>Platforms like TikTok and Instagram Reels have popularized short-form videos. Create concise, engaging content to capture attention.</p>
      
      <h2>2. Interactive Videos</h2>
      <p>Interactive videos with clickable elements can boost engagement and conversions.</p>
      
      <h2>3. Live Streaming</h2>
      <p>Live streaming events, Q&A sessions, and product launches can create a sense of urgency and authenticity.</p>
      
      <h2>Conclusion</h2>
      <p>Video marketing in 2025 will be all about engagement and interactivity. Intention Infoservice can help you create a winning video marketing strategy. Contact us today!</p>
    `,
  },
];

// Dynamic metadata based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params; // Await the params Promise
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) {
    return {
      title: 'Post Not Found - Intention Infoservice',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://intentioninfoservice.com/blog/${post.slug}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "image": post.featuredImage,
    "publisher": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
    },
  };

  return {
    title: `${post.title} - Intention Infoservice`,
    description: post.excerpt,
    metadataBase: new URL('https://intentioninfoservice.com'),
    openGraph: {
      url: `https://intentioninfoservice.com/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: 'Intention Infoservice',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@IInfoservice',
      creator: '@IInfoservice',
    },
    alternates: {
      canonical: `https://intentioninfoservice.com/blog/${post.slug}`,
    },
    other: {
      'script:ld+json': JSON.stringify(schemaMarkup),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params; // Await the params Promise
  const post = blogPosts.find(p => p.slug === resolvedParams.slug);
  if (!post) {
    notFound();
  }

  // Related posts (same category, exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://intentioninfoservice.com/blog/${post.slug}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "image": post.featuredImage,
    "publisher": {
      "@type": "Organization",
      "name": "Intention Infoservice",
      "url": "https://intentioninfoservice.com",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://intentioninfoservice.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="bg-dark-950 text-gray-800 font-['Inter',sans-serif]">
      {/* Schema Markup for Blog Post */}
      <div dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(schemaMarkup)}</script>`,
      }} />

      {/* Hero Section */}
      <section className="relative bg-dark-900 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-[10%]">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex items-end p-6">
              <div>
                <span className="inline-block bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm text-gray-300">{post.author}</p>
                    <p className="text-sm text-gray-300">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[10%] py-12 flex flex-col lg:flex-row gap-8">
        {/* Post Content */}
        <article className="lg:w-2/3">
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-800">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Buttons */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share This Post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://intentioninfoservice.com/blog/${post.slug}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                  title="Share on Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://intentioninfoservice.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                  title="Share on Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://intentioninfoservice.com/blog/${post.slug}&title=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                  title="Share on LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-4">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{post.author}</h3>
                  <p className="text-gray-600">{post.authorBio}</p>
                </div>
              </div>
            </div>

            {/* Comments Section (Placeholder) */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
              <p className="text-gray-600">Comments section coming soon! Stay tuned for updates.</p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:w-1/3 sticky top-8">
          {/* Categories */}
          <div className="mb-8 bg-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Software Development', 'Business Solutions', 'Digital Marketing', 'UI/UX Design', 'Technology'].map(category => (
                <li key={category}>
                  <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-800 hover:text-teal-600 transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Posts</h3>
              <ul className="space-y-4">
                {relatedPosts.map(relatedPost => (
                  <li key={relatedPost.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-md overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <Link href={`/blog/${relatedPost.slug}`} className="text-gray-800 hover:text-teal-600 transition-colors">
                        <h4 className="text-sm font-semibold">{relatedPost.title}</h4>
                      </Link>
                      <p className="text-xs text-gray-600">{relatedPost.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}