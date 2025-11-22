export const APP_NAME = "Capital Age"
export const APP_LOGO = "/Calogo.png"

export const LOAN_TYPES = [
  {
    id: "personal-loan",
    name: "Personal Loan",
    description: "Quick personal loans for any need",
    icon: "User",
    href: "/loans/personal-loan",
    interestRate: "9.99% - 24%",
    maxAmount: "₹40 Lakhs",
    tenure: "Up to 5 years",
  },
  {
    id: "home-loan",
    name: "Home Loan",
    description: "Affordable home loans with low interest",
    icon: "Home",
    href: "/loans/home-loan",
    interestRate: "8.5% - 11%",
    maxAmount: "₹5 Crores",
    tenure: "Up to 30 years",
  },
  {
    id: "business-loan",
    name: "Business Loan",
    description: "Fuel your business growth",
    icon: "Briefcase",
    href: "/loans/business-loan",
    interestRate: "11% - 20%",
    maxAmount: "₹50 Lakhs",
    tenure: "Up to 5 years",
  },
  {
    id: "working-capital",
    name: "Working Capital",
    description: "Manage cash flow efficiently",
    icon: "TrendingUp",
    href: "/loans/working-capital",
    interestRate: "12% - 18%",
    maxAmount: "₹1 Crore",
    tenure: "Up to 3 years",
  },
  {
    id: "cgtmse",
    name: "CGTMSE Loan",
    description: "Collateral-free MSME loans",
    icon: "Shield",
    href: "/loans/cgtmse",
    interestRate: "10% - 15%",
    maxAmount: "₹2 Crores",
    tenure: "Up to 7 years",
  },
  {
    id: "mortgage-loan",
    name: "Mortgage Loan",
    description: "Loans against property",
    icon: "Building",
    href: "/loans/mortgage-loan",
    interestRate: "9% - 14%",
    maxAmount: "₹5 Crores",
    tenure: "Up to 15 years",
  },
  {
    id: "loan-against-property",
    name: "Loan Against Property",
    description: "Unlock property value",
    icon: "Key",
    href: "/loans/loan-against-property",
    interestRate: "8.5% - 13%",
    maxAmount: "₹10 Crores",
    tenure: "Up to 20 years",
  },
  {
    id: "commercial-purchase",
    name: "Commercial Purchase",
    description: "Finance commercial property",
    icon: "Store",
    href: "/loans/commercial-purchase",
    interestRate: "9% - 12%",
    maxAmount: "₹10 Crores",
    tenure: "Up to 20 years",
  },
]

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  {
    name: "Loans",
    href: "#",
    children: LOAN_TYPES.map(loan => ({
      name: loan.name,
      href: loan.href,
    })),
  },
  { name: "EMI Calculator", href: "/emi-calculator" },
  {
    name: "About",
    href: "#",
    children: [
      { name: "About Capital Age", href: "/about/capital-age" },
      { name: "About Our Partnered Banks", href: "/about/partnered-banks" },
      { name: "Capital Age Team", href: "/about/team" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export const PARTNER_BANKS = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IndusInd Bank",
  "Yes Bank",
  "IDFC First Bank",
  "Bajaj Finserv",
  "Tata Capital",
  "L&T Finance",
  "Fullerton India",
]

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content: "Capital Age helped me get a business loan within 48 hours. The process was smooth and transparent.",
    rating: 5,
    location: "Mumbai",
  },
  {
    name: "Priya Sharma",
    role: "Homemaker",
    content: "Got my home loan approved at the best interest rate. The team was very supportive throughout.",
    rating: 5,
    location: "Delhi",
  },
  {
    name: "Amit Patel",
    role: "Entrepreneur",
    content: "Excellent service! They helped me compare multiple loan options and choose the best one.",
    rating: 5,
    location: "Bangalore",
  },
  {
    name: "Sneha Reddy",
    role: "Professional",
    content: "Quick personal loan approval with minimal documentation. Highly recommended!",
    rating: 5,
    location: "Hyderabad",
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Quick Apply",
    description: "Fill out our simple online application form in just 5 minutes",
  },
  {
    step: 2,
    title: "Compare Quotes",
    description: "Get personalized loan offers from 50+ banks and NBFCs",
  },
  {
    step: 3,
    title: "Upload Documents",
    description: "Submit required documents securely through our platform",
  },
  {
    step: 4,
    title: "Instant Approval",
    description: "Receive approval within 24-48 hours and get funds disbursed",
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Top 10 Tips for Getting Your Home Loan Approved",
    excerpt: "Learn the essential strategies to improve your chances of home loan approval in 2024.",
    date: "2024-01-15",
    category: "Home Loans",
    image: "/blog/home-loan-tips.jpg",
  },
  {
    id: 2,
    title: "Understanding CGTMSE Loans for Small Businesses",
    excerpt: "A comprehensive guide to collateral-free loans under the CGTMSE scheme.",
    date: "2024-01-10",
    category: "Business Loans",
    image: "/blog/cgtmse-guide.jpg",
  },
  {
    id: 3,
    title: "How to Improve Your Credit Score in 6 Months",
    excerpt: "Proven methods to boost your credit score and qualify for better loan rates.",
    date: "2024-01-05",
    category: "Financial Tips",
    image: "/blog/credit-score.jpg",
  },
]
