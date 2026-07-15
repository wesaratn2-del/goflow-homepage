# GOFLOW Homepage - Developer Guide

## Quick Start

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3000`

---

## API Endpoints

### 1. Hero Section
```
GET /api/hero
```
Returns homepage headline, description, CTAs, and live dashboard counters.

### 2. Enterprise Core
```
GET /api/enterprise-core
```
Returns architecture overview: One Core → Five Products.

### 3. Products
```
GET /api/products
```
Returns featured products (GOFLOW AI, Political) and coming soon products.

### 4. Why GOFLOW
```
GET /api/why-goflow
```
Returns 4 key differentiators: Enterprise Ready, AI First, Open Platform, Scalable.

### 5. Technology
```
GET /api/technology
```
Returns technology stack: Cloud Native, AI Native, API First, Microservices, Security, Analytics.

### 6. Business Model
```
GET /api/business-model
```
Returns 5 revenue streams with percentages and descriptions.

### 7. Success Stories
```
GET /api/success-stories
```
Returns product screenshots and impact metrics.

### 8. Investment Opportunity
```
GET /api/investment
```
Returns investment stage, roadmap, and contact CTAs.

### 9. Investor Flow
```
GET /api/investor-flow
```
Returns 60-second investor flow timeline.

### 10. Five Questions
```
GET /api/five-questions
```
Returns answers to 5 key investor questions:
1. บริษัทนี้ทำอะไร?
2. ขายอะไร?
3. ลูกค้าคือใคร?
4. ทำเงินยังไง?
5. ทำไมต้องลงทุน?

---

## Project Structure

```
goflow-homepage/
├── src/
│   └── server.js           # Main Express server
├── data/
│   ├── products.json       # Product data
│   └── business-model.json # Revenue model
├── .env.example            # Environment template
├── package.json            # Dependencies
└── README.md               # Documentation
```

---

## Environment Setup

1. Copy `.env.example` to `.env`
2. Update `PORT`, `NODE_ENV`, etc.
3. Run `npm install`
4. Run `npm run dev`

---

## Testing Endpoints

### Using curl
```bash
curl http://localhost:3000/api/five-questions
```

### Using curl with pretty JSON
```bash
curl http://localhost:3000/api/five-questions | jq
```

### Using Postman
1. Import collection from `/docs/postman-collection.json`
2. Set environment variable `base_url = http://localhost:3000`
3. Run requests

---

## Adding New Endpoints

1. Add route in `src/server.js`:
```javascript
app.get('/api/new-section', (req, res) => {
  res.json({
    // response data
  });
});
```

2. Update `README.md` with endpoint documentation

3. Test with curl or Postman

---

## Frontend Integration

Frontend should:
1. Call `/api/hero` on page load
2. Display sections based on scroll position
3. Call remaining endpoints progressively
4. Cache responses (30 minutes)
5. Handle network errors gracefully

---

## Performance Tips

- All responses are cached in memory
- No database calls = instant responses
- Use Redis for production scaling
- Add CDN for assets
- Monitor API response times

---

## Deployment

### To Heroku
```bash
heroku create goflow-homepage-api
git push heroku main
```

### To Vercel
```bash
vercel
```

### To Docker
```bash
docker build -t goflow-homepage .
docker run -p 3000:3000 goflow-homepage
```

---

## Troubleshooting

**Port already in use:**
```bash
lsof -i :3000
kill -9 <PID>
```

**CORS error:**
Ensure `cors()` middleware is enabled in `src/server.js`

**Module not found:**
```bash
rm -rf node_modules
npm install
```

---

## Next Steps

1. Build React Frontend to consume these APIs
2. Add database layer (PostgreSQL + Prisma)
3. Implement authentication (JWT)
4. Add user tracking (Mixpanel/Segment)
5. Setup CI/CD pipeline

---

## Resources

- [Express.js Docs](https://expressjs.com/)
- [CORS Docs](https://github.com/expressjs/cors)
- [RESTful API Best Practices](https://restfulapi.net/)

---

**Last Updated:** 2026-07-15
**Version:** 1.0.0
