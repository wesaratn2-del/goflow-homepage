const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ========================================
// SECTION 1: Hero Section
// ========================================
app.get('/api/hero', (req, res) => {
  res.json({
    headline: 'The AI Operating System for Organizations',
    subheading: 'GOFLOW คือแพลตฟอร์มเทคโนโลยีระดับ Enterprise ที่รวม AI, Automation และ Digital Solutions ไว้ในโครงสร้างเดียว',
    description: 'รองรับภาคธุรกิจ หน่วยงาน องค์กร และชุมชน พร้อมขยายเป็น Ecosystem ได้ในอนาคต',
    cta: [
      { text: '🚀 Explore Products', href: '/products' },
      { text: '📈 Investor Information', href: '/investor' },
      { text: '🤝 Become a Partner', href: '/partner' }
    ],
    dashboard: {
      registeredUsers: 125000,
      projects: 8500,
      organizations: 2300,
      partners: 450,
      earlyAccessActive: true
    }
  });
});

// ========================================
// SECTION 2: Enterprise Core
// ========================================
app.get('/api/enterprise-core', (req, res) => {
  res.json({
    title: 'One Enterprise Core',
    subtitle: 'Five Super Products',
    description: 'Unlimited Expansion',
    message: 'GOFLOW Platform มี 5 ผลิตภัณฑ์เชิงพาณิชย์ ที่สร้างบน Enterprise Core เดียวกัน',
    architecture: {
      levels: [
        { level: 1, name: 'Enterprise Core', icon: '⚙️', description: 'Shared Infrastructure' },
        { level: 2, name: 'AI Layer', icon: '🤖', description: 'AI Services' },
        { level: 3, name: 'Products', icon: '📦', description: '5 Commercial Products' },
        { level: 4, name: 'Marketplace', icon: '🛒', description: 'Creator Ecosystem' },
        { level: 5, name: 'Partners', icon: '🤝', description: 'Integration Network' },
        { level: 6, name: 'API', icon: '⚡', description: 'Developer Platform' }
      ]
    }
  });
});

// ========================================
// SECTION 3: Products
// ========================================
app.get('/api/products', (req, res) => {
  res.json({
    featured: [
      {
        id: 1,
        name: 'GOFLOW AI',
        icon: '🤖',
        description: 'AI Workspace สำหรับบุคคลและองค์กร',
        status: 'available',
        statusLabel: '🟢 Available',
        features: [
          'AI Chat',
          'Image',
          'Video',
          'Audio',
          'Document',
          'Automation',
          'Marketplace',
          'Agent',
          'API'
        ],
        cta: [
          { text: 'Explore', href: '/product/goflow-ai' },
          { text: 'Pricing', href: '/pricing/goflow-ai' },
          { text: 'Demo', href: '/demo/goflow-ai' }
        ]
      },
      {
        id: 2,
        name: 'GOFLOW Political Platform',
        icon: '🌻',
        description: 'Digital Operating System สำหรับพรรคการเมืองและองค์กรสาธารณะ',
        status: 'available',
        statusLabel: '🟢 Available',
        features: [
          'Membership',
          'Candidate',
          'Campaign',
          'Volunteer',
          'Donation',
          'Dashboard',
          'AI Analysis',
          'Media Center',
          'Compliance'
        ],
        cta: [
          { text: 'Explore', href: '/product/goflow-political' },
          { text: 'Details', href: '/details/goflow-political' },
          { text: 'Brochure', href: '/brochure/goflow-political' }
        ]
      }
    ],
    comingSoon: [
      {
        id: 3,
        name: 'GOFLOW Rider',
        icon: '🚚',
        description: 'Smart Delivery Platform',
        status: 'beta',
        statusLabel: '🟡 Beta',
        eta: 'Q4 2026',
        features: ['Dispatch', 'Tracking', 'Route', 'Fleet']
      },
      {
        id: 4,
        name: 'GOFLOW Market',
        icon: '🛒',
        description: 'Marketplace Platform',
        status: 'development',
        statusLabel: '🟡 Development',
        eta: 'Q1 2027',
        features: ['POS', 'Inventory', 'CRM', 'Promotion']
      },
      {
        id: 5,
        name: 'GOFLOW Agri',
        icon: '🌾',
        description: 'Precision Agriculture Platform',
        status: 'prototype',
        statusLabel: '🟡 Prototype',
        eta: 'Q2 2027',
        features: ['Farm', 'IoT', 'Drone', 'Weather', 'AI']
      }
    ]
  });
});

// ========================================
// SECTION 4: Why GOFLOW
// ========================================
app.get('/api/why-goflow', (req, res) => {
  res.json({
    title: 'Why GOFLOW',
    features: [
      {
        title: 'Enterprise Ready',
        description: 'Built for scale and security from day one',
        icon: '🏢'
      },
      {
        title: 'AI First',
        description: 'Native AI capabilities, not just wrappers around APIs',
        icon: '🤖'
      },
      {
        title: 'Open Platform',
        description: 'API-first architecture for partners and integrations',
        icon: '🔓'
      },
      {
        title: 'Scalable Architecture',
        description: 'Microservices ready for unlimited growth',
        icon: '📈'
      }
    ]
  });
});

// ========================================
// SECTION 5: Technology
// ========================================
app.get('/api/technology', (req, res) => {
  res.json({
    title: 'Technology Stack',
    message: 'Built for Enterprise Scale',
    stack: [
      { name: 'Cloud Native', icon: '☁️', description: 'Kubernetes-ready infrastructure' },
      { name: 'AI Native', icon: '🤖', description: 'Native AI capabilities' },
      { name: 'API First', icon: '⚡', description: 'Developer-friendly APIs' },
      { name: 'Microservices', icon: '🔧', description: 'Modular architecture' },
      { name: 'Security', icon: '🔐', description: 'Enterprise-grade security' },
      { name: 'Analytics', icon: '📊', description: 'Real-time analytics' }
    ]
  });
});

// ========================================
// SECTION 6: Business Model
// ========================================
app.get('/api/business-model', (req, res) => {
  res.json({
    title: 'Business Model',
    message: 'Multiple Revenue Streams',
    revenueStreams: [
      {
        name: 'Subscription',
        description: 'Monthly/Annual plans',
        percentage: 40,
        icon: '💵'
      },
      {
        name: 'AI Credits',
        description: 'Pay-per-use model',
        percentage: 25,
        icon: '🎯'
      },
      {
        name: 'Enterprise License',
        description: 'Custom enterprise deals',
        percentage: 20,
        icon: '🏢'
      },
      {
        name: 'Creator Marketplace',
        description: 'Commission model (15%)',
        percentage: 10,
        icon: '🛒'
      },
      {
        name: 'Professional Services',
        description: 'Implementation & Training',
        percentage: 5,
        icon: '👨‍💼'
      }
    ]
  });
});

// ========================================
// SECTION 7: Success Stories
// ========================================
app.get('/api/success-stories', (req, res) => {
  res.json({
    title: 'Success Stories',
    stories: [
      {
        product: 'GOFLOW Political',
        icon: '🌻',
        visuals: [
          { type: 'dashboard', label: 'Dashboard' },
          { type: 'poster', label: 'AI Poster Generator' },
          { type: 'ai', label: 'AI Analysis' },
          { type: 'report', label: 'Report Generator' },
          { type: 'campaign', label: 'Campaign Manager' },
          { type: 'media', label: 'Media Center' },
          { type: 'volunteer', label: 'Volunteer Platform' },
          { type: 'mobile', label: 'Mobile App' }
        ],
        message: 'Real Product, Real Results',
        impact: 'Deployed in 50+ organizations'
      },
      {
        product: 'GOFLOW AI',
        icon: '🤖',
        visuals: [
          { type: 'image', label: 'AI Image Generator' },
          { type: 'video', label: 'AI Video Creator' },
          { type: 'chat', label: 'AI Chat' },
          { type: 'voice', label: 'Voice Processing' },
          { type: 'document', label: 'Document AI' },
          { type: 'agent', label: 'AI Agents' },
          { type: 'marketplace', label: 'Creator Marketplace' },
          { type: 'api', label: 'Developer API' }
        ],
        message: 'AI Capabilities, Production Ready',
        impact: '125,000+ users in beta'
      }
    ]
  });
});

// ========================================
// SECTION 8: Investment Opportunity
// ========================================
app.get('/api/investment', (req, res) => {
  res.json({
    title: 'Investment Opportunity',
    stage: 'Seed',
    message: 'ร่วมเป็นส่วนหนึ่งในการสร้าง AI Platform สำหรับประเทศไทย',
    description: 'GOFLOW เปิดรับพันธมิตรเชิงกลยุทธ์ (Strategic Partners) เพื่อร่วมพัฒนา ร่วมลงทุน หรือเป็นพันธมิตรทางธุรกิจ',
    cta: [
      { text: 'Request Private Deck', href: '/investor/deck' },
      { text: 'Schedule Meeting', href: '/investor/meeting' }
    ],
    roadmap: {
      phase1: 'Enterprise Core - Foundation',
      phase2: 'Platform Services - Scaling',
      phase3: 'Product Expansion',
      phase4: 'Market Leadership'
    },
    disclaimer: 'กำลังเปิดรับพันธมิตรเชิงกลยุทธ์ (Strategic Partners) หากมีการระดมทุนอย่างเป็นทางการในอนาคต จะดำเนินการให้สอดคล้องกับกฎหมายที่เกี่ยวข้อง'
  });
});

// ========================================
// 60-Second Investor Flow
// ========================================
app.get('/api/investor-flow', (req, res) => {
  res.json({
    title: '60-Second Investor Flow',
    duration: 60,
    flow: [
      {
        time: '0-5 sec',
        section: 'Hero',
        message: 'Headline + Dashboard Counter'
      },
      {
        time: '5-15 sec',
        section: 'Enterprise Core',
        message: 'Architecture: One Core, Five Products'
      },
      {
        time: '15-30 sec',
        section: 'Products',
        message: '5 Product Cards (2 Available, 3 Coming Soon)'
      },
      {
        time: '30-40 sec',
        section: 'Why GOFLOW',
        message: '4 Key Features (Enterprise Ready, AI First, Open, Scalable)'
      },
      {
        time: '40-50 sec',
        section: 'Business Model',
        message: '5 Revenue Streams (Subscription, Credits, Enterprise, Marketplace, Services)'
      },
      {
        time: '50-60 sec',
        section: 'Investment',
        message: 'Call to Action (Request Deck, Schedule Meeting)'
      }
    ]
  });
});

// ========================================
// 5 KEY QUESTIONS ANSWERED
// ========================================
app.get('/api/five-questions', (req, res) => {
  res.json({
    title: '5 Questions Investors Ask',
    questions: [
      {
        order: 1,
        question: 'บริษัทนี้ทำอะไร?',
        answer: 'GOFLOW คือแพลตฟอร์มเทคโนโลยี AI ระดับ Enterprise ที่รวม AI, Automation และ Digital Solutions ไว้ในโครงสร้างเดียว',
        section: 'hero'
      },
      {
        order: 2,
        question: 'ขายอะไร?',
        answer: '5 ผลิตภัณฑ์เชิงพาณิชย์: GOFLOW AI, Political Platform, Rider, Market, และ Agri',
        section: 'products'
      },
      {
        order: 3,
        question: 'ลูกค้าคือใคร?',
        answer: 'Organizations, Enterprises, Government, Partners, และ Developers',
        section: 'why-goflow'
      },
      {
        order: 4,
        question: 'ทำเงินยังไง?',
        answer: 'Subscription + AI Credits + Enterprise License + Marketplace Commission + Professional Services',
        section: 'business-model'
      },
      {
        order: 5,
        question: 'ทำไมต้องลงทุน?',
        answer: 'Multiple Revenue Streams, Scalable Architecture, AI-First Platform, Enterprise Ready',
        section: 'investment'
      }
    ]
  });
});

// ========================================
// Error Handling
// ========================================
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.path,
    method: req.method,
    availableEndpoints: [
      '/health',
      '/api/hero',
      '/api/enterprise-core',
      '/api/products',
      '/api/why-goflow',
      '/api/technology',
      '/api/business-model',
      '/api/success-stories',
      '/api/investment',
      '/api/investor-flow',
      '/api/five-questions'
    ]
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n✅ GOFLOW Homepage Mock Server`);
  console.log(`🚀 Running on http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/health`);
  console.log(`🤖 API: http://localhost:${PORT}/api/hero`);
  console.log(`\n📚 Available Endpoints:`);
  console.log(`   GET /health`);
  console.log(`   GET /api/hero`);
  console.log(`   GET /api/enterprise-core`);
  console.log(`   GET /api/products`);
  console.log(`   GET /api/why-goflow`);
  console.log(`   GET /api/technology`);
  console.log(`   GET /api/business-model`);
  console.log(`   GET /api/success-stories`);
  console.log(`   GET /api/investment`);
  console.log(`   GET /api/investor-flow`);
  console.log(`   GET /api/five-questions`);
  console.log(`\n💡 Try: http://localhost:${PORT}/api/five-questions\n`);
});

module.exports = app;
