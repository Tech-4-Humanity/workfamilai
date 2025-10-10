# WorkFamilyAI - AI Family Consciousness Network

> **URL**: https://lovable.dev/projects/731a24a4-05b2-4e39-a768-5fa7406a92f8

An advanced AI-powered organizational intelligence platform featuring 10,000+ specialized AI agents organized into a collaborative family network structure. Experience the future of augmented human decision-making with real-time multilingual communication, organizational insights, and AI-powered service delivery.

---

## 🌟 Key Features

### 🤖 AI Family Network
- **10,000+ Specialized AI Agents** across 9 core divisions
- **11 Division Leaders** with unique personalities and expertise:
  - **Aisha Al-Farsi** - Chief Diplomatic Officer (Global Relations & Partnerships)
  - **Amara Chen** - Chief Technology Officer (Product & Engineering)
  - **David Okafor** - Chief Operations Officer (Operations & Logistics)
  - **Elena Vasquez** - Chief Legal Officer (Legal & Compliance)
  - **Marcus Bennett** - Chief Strategy Officer (Strategy & Planning)
  - **Miguel Santos** - Chief Marketing Officer (Marketing & Brand)
  - **Priya Sharma** - Chief Human Resources Officer (Talent & Culture)
  - **Sofia Rodriguez** - Chief Revenue Officer (Sales & Growth)
  - **Theo Williams** - Chief Financial Officer (Finance & Treasury)
  - **Trojan Oz** - Chief Executive Officer (Leadership & Vision)
  - **Yuna Kim** - Chief Customer Officer (Customer Success)

### 💼 Work Packages
- AI-powered service offerings with intelligent quote request system
- Spam-protected submission with rate limiting
- Automated quote generation and delivery
- Integration with organizational AI agents

### 🌐 Multilingual Support
- **8 Languages**: English, Spanish, French, German, Arabic, Japanese, Korean, Chinese
- Real-time translation in chat interfaces
- Culturally-aware AI agent responses
- Localized content across all pages

### 📊 Organizational Intelligence
- **3D Network Visualization** of agent relationships
- **Agent Comparison Tool** to analyze capabilities
- **Twin Finder** to discover similar agents
- **Interactive Organizational Chart** with drill-down capabilities
- **Real-time Metrics Dashboard** for network insights

### 🎓 Free Learning Resources
- AI Product Management courses
- Curated external learning resources
- Newsletter subscription for updates
- Resource type filtering (video, article, course, tool)

### 🔍 Site Audit Tool
- Website analysis powered by AI
- SEO and performance recommendations
- Accessibility compliance checks
- Security vulnerability scanning

### 🔒 Enterprise Security
- Row Level Security (RLS) on all database tables
- Rate limiting on all public endpoints (5-10 req/min)
- JWT authentication with role-based access control
- Protected admin routes and sensitive operations
- Input validation and spam detection
- See [SECURITY.md](./SECURITY.md) for detailed documentation

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn-ui components
- **UI Components**: Radix UI primitives
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Internationalization**: i18next, react-i18next
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

### Backend
- **Platform**: Supabase
  - PostgreSQL database with Row Level Security
  - Authentication (Email, OAuth providers)
  - Edge Functions (Deno runtime)
  - Storage buckets
- **AI Integration**: OpenAI API
  - GPT models for chat and agent interactions
  - Whisper API for voice transcription
- **Payments**: Stripe for donation processing

### Developer Tools
- **Language**: TypeScript 5.5+
- **Package Manager**: npm / bun
- **Linting**: ESLint
- **Code Quality**: TypeScript strict mode

---

## 📁 Project Structure

```
workfamily-ai/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── admin/              # Admin dashboard & management
│   │   ├── analytics/          # Analytics & metrics visualizations
│   │   ├── augmented-humanity/ # Augmented humanity sections
│   │   ├── auth/               # Authentication components
│   │   ├── chat/               # AI chat interface & modals
│   │   ├── courses/            # Learning resource components
│   │   ├── department/         # Division/department displays
│   │   ├── family/             # AI family network visualizations
│   │   ├── guidance/           # User guidance & tours
│   │   ├── holo-org/           # Holographic org dashboard
│   │   ├── home/               # Homepage sections
│   │   ├── organizational/     # Org intelligence components
│   │   ├── scenarios/          # Scenario visualizations
│   │   ├── ui/                 # shadcn-ui base components
│   │   └── work-packages/      # Work package components
│   ├── data/                   # Static data & configurations
│   │   ├── leaders/            # Division leader profiles & agents
│   │   ├── completeOrganizationalStructure.ts
│   │   ├── culturalProfiles.ts
│   │   ├── divisionLeaders.ts
│   │   ├── familyMembers.ts
│   │   └── organizationalData.ts
│   ├── hooks/                  # Custom React hooks
│   ├── i18n/                   # Internationalization
│   │   ├── config.ts
│   │   └── locales/            # Translation files (en, es, fr, de, ar, ja, ko, zh)
│   ├── integrations/
│   │   └── supabase/           # Supabase client & TypeScript types
│   ├── pages/                  # Route page components
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles & design tokens
├── supabase/
│   ├── functions/              # Edge Functions (API endpoints)
│   │   ├── chat-with-agent/    # AI chat endpoint
│   │   ├── voice-to-text/      # Speech-to-text transcription
│   │   ├── submit-contact-form/
│   │   ├── submit-work-package-quote/
│   │   ├── subscribe-newsletter/
│   │   └── create-donation/    # Stripe donation handling
│   ├── migrations/             # Database schema migrations
│   └── config.toml             # Supabase configuration
├── public/                     # Static assets
│   ├── leaders/                # Leader profile images
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.png
├── SECURITY.md                 # Security documentation
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # Project license
└── README.md                   # This file
```

---

## 🗺️ Available Routes

### Public Routes
- `/` - Homepage with AI Family showcase
- `/auth` - Sign in / Sign up
- `/department/:departmentId` - Division leader details (11 leaders)
- `/work-packages` - AI service offerings & quote requests
- `/free-courses` - Free learning resources
- `/contact` - Contact form
- `/site-audit` - Website audit tool
- `/donations` - Support the project (Stripe)
- `/donations/success` - Donation confirmation
- `/donations/cancel` - Donation cancelled
- `/organizational-intelligence` - Organizational dashboard
- `/complete-structure` - Full organizational structure view

### Protected Routes (Authentication Required)
- `/admin` - Admin panel (requires admin role)
  - Contact management
  - Division leaders panel
  - Family agent integration
  - Patron dashboard

### Not Found
- `*` - 404 page with navigation

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or higher
- **npm** or **bun** package manager
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/workfamily-ai.git
cd workfamily-ai

# Install dependencies
npm install
# or
bun install
```

### Environment Setup

Create a `.env` file in the project root (or use the existing one):

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://lzfgigiyqpuuxslsygjt.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Note: Edge function secrets (OpenAI API keys, Stripe keys) are managed
# in Supabase dashboard under Project Settings > Edge Functions > Secrets
```

⚠️ **Important**: The Supabase anon key is public and safe to expose in frontend code. Secret keys (OpenAI, Stripe) are stored securely in Supabase and only accessible to Edge Functions.

### Running Locally

```bash
# Start the development server
npm run dev

# Open http://localhost:8080 in your browser
```

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment

### Deploy to Lovable Cloud

1. Visit [Lovable Project Dashboard](https://lovable.dev/projects/731a24a4-05b2-4e39-a768-5fa7406a92f8)
2. Click **Share → Publish**
3. Your app will be deployed to `your-project.lovable.app`

### Custom Domain Setup

1. Navigate to **Project > Settings > Domains** in Lovable
2. Click **Connect Domain**
3. Follow DNS configuration instructions
4. Update `public/sitemap.xml` with your custom domain

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain)

### Database Migrations

Database changes are managed through Supabase migrations:

```bash
# Migrations are automatically applied on deployment
# View migrations in supabase/migrations/
```

---

## 🔒 Security

This project implements enterprise-grade security practices:

- ✅ **Row Level Security (RLS)** on all database tables
- ✅ **Rate limiting** on all public API endpoints
- ✅ **JWT authentication** with role-based access control
- ✅ **Input validation** and sanitization
- ✅ **Spam protection** with honeypot fields
- ✅ **Secure secrets management** in Supabase

For detailed security documentation, see [SECURITY.md](./SECURITY.md)

### Responsible Disclosure

If you discover a security vulnerability, please email: security@workfamilyai.com

**Do not** create public GitHub issues for security vulnerabilities.

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Code of Conduct
- Development workflow
- Coding standards
- Pull request process
- Issue reporting guidelines

### Quick Start for Contributors

```bash
# Fork the repository and clone your fork
git clone https://github.com/your-username/workfamily-ai.git

# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git commit -m "Add: your feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

---

## 📝 License

This project is licensed under the **MIT License** - see [LICENSE](./LICENSE) file for details.

---

## 📚 Documentation & Resources

- **Lovable Documentation**: [https://docs.lovable.dev/](https://docs.lovable.dev/)
- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **React Documentation**: [https://react.dev/](https://react.dev/)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **shadcn-ui**: [https://ui.shadcn.com/](https://ui.shadcn.com/)

---

## 🌐 Links

- **Live Demo**: [https://lovable.dev/projects/731a24a4-05b2-4e39-a768-5fa7406a92f8](https://lovable.dev/projects/731a24a4-05b2-4e39-a768-5fa7406a92f8)
- **Project Dashboard**: [Lovable Project](https://lovable.dev/projects/731a24a4-05b2-4e39-a768-5fa7406a92f8)
- **Issue Tracker**: GitHub Issues
- **Discussions**: GitHub Discussions

---

## 💬 Support

Need help? Here's how to get support:

1. 📖 Check the [documentation](https://docs.lovable.dev/)
2. 💡 Search [existing issues](https://github.com/your-username/workfamily-ai/issues)
3. 🆕 [Create a new issue](https://github.com/your-username/workfamily-ai/issues/new)
4. 💬 Join our [Discord community](https://discord.com/channels/1119885301872070706/1280461670979993613)

---

## 🙏 Acknowledgments

Built with ❤️ using:
- [Lovable](https://lovable.dev) - AI-powered web development platform
- [Supabase](https://supabase.com) - Open source Firebase alternative
- [OpenAI](https://openai.com) - AI models for chat and transcription
- [shadcn-ui](https://ui.shadcn.com) - Beautiful UI components

---

**Made with 💜 by the WorkFamilyAI Team**
