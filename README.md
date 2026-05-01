# Scope3Bridge

An ESG data on-ramp for SME suppliers responding to Scope 3 reporting pressure from enterprise clients.

## Core Problem We're Solving

SMEs struggle to report sustainability data not because they don't care, but because gathering historical bills and operational data is **demotivating and time-consuming**. By the time they've found 6 months of electricity bills, they're exhausted before the actual reporting even begins.

Scope3Bridge shifts the burden from "panic scramble when urgent" to "5 minutes monthly when easy."

## Product Vision

Track sustainability data year-round. Generate client-ready reports in minutes when needed.

**Key Differentiator:** Continuous bill logging with timeline view + AI-assisted data extraction = zero friction when report deadlines hit.

---

## Target User

**Motivated SME suppliers** (10-100 employees) in manufacturing, packaging, logistics, or food supply who:
- Already need to report sustainability data (client demanded it)
- Find the data-gathering process overwhelming
- Can't justify €3,000+ consultant fees
- Need credible, client-ready output fast

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MySQL
- **Authentication:** JWT + bcrypt
- **AI:** Anthropic Claude API (bill extraction, data validation)

---

## Development Timeline (6 Months)

### ✅ Month 0: Foundation (Completed)
- [x] Project setup and Git workflow
- [x] MySQL database connection
- [x] Express server with health check
- [x] Learning phase (Node.js, Express, MySQL, JWT, bcrypt)

### ✅ Component 1: Authentication (Completed)
- [x] User registration with password hashing
- [x] User login with JWT token generation
- [x] Input validation and error handling

---

### 🔄 Month 1-2: Core Identity & Data Collection

#### Component 2: Company Profile Setup (Week 5-6)
- Company registration form (name, industry, size, location)
- Industry vertical selection (packaging, manufacturing, logistics, food)
- Link company to authenticated user
- Profile edit functionality

#### Component 3: Bill Logging System (Week 7-10) **[UPDATED - New Priority]**

**Phase 3A: Manual Bill Entry (MVP)**
- Quick log interface: "Log this month's electricity/gas/water bill"
- Fields: Bill type, usage amount, unit, cost, billing period
- File upload for bill PDFs (store reference, no extraction yet)
- Timestamp all entries automatically
- Simple list view of logged bills

**Phase 3B: Bulk Entry Mode**
- Allow users to backfill historical data
- Batch entry for catching up on past months
- Import multiple bills in one session

**Deferred to Month 5-6:**
- AI-powered bill extraction from PDFs
- Timeline/calendar visualization

---

### Month 3: Calculation Engine

#### Component 4: Metrics Calculation (Week 11-14)
- Emission factor database (electricity, gas, transport)
- Calculation logic for CO2e conversions
- Support for regional emission factors (Ireland-specific initially)
- **Date-range filtering:** Calculate metrics for selected periods only
- Industry-specific calculations (packaging vs manufacturing)

**Key formulas:**
- Electricity: kWh × grid emission factor = kg CO2e
- Gas: kWh × gas emission factor = kg CO2e
- Transport: distance × weight × mode factor = kg CO2e

---

### Month 4: Reporting & AI Enhancement

#### Component 5: AI Validation & Insights (Week 15-16)
- Claude API integration for data validation
- Anomaly detection ("10M kWh for 50-person company?")
- Industry benchmark comparisons
- Missing data suggestions

#### Component 6: Sustainability Passport Generator (Week 17-18)
- **Date range selector:** "Last 3 months" / "Q1 2026" / Custom
- Professional PDF report generation
- Content: Company profile, metrics summary, calculation methodology, benchmarks
- QR code for verification/authenticity
- Branded, client-ready output

---

### Month 5: Dashboard & Timeline

#### Component 7: Timeline Dashboard (Week 19-21) **[UPDATED - Elevated Priority]**
- Visual timeline/calendar of logged bills
- Monthly view showing: ✅ Electricity logged, ⚠️ Gas missing
- Gap detection and completion prompts
- Filtering by bill type and date range
- Progress tracking over time
- **This becomes the primary interface** (not just analytics)

#### Component 8: Sharing & Tracking (Week 22)
- Email report delivery
- Track report sends (who, when, which client)
- Download history

---

### Month 6: Polish, AI Extraction & Launch

#### AI Bill Extraction (Week 23-24) **[Stretch Goal]**
- Upload bill PDF → Claude extracts kWh, cost, period
- User confirms/edits extracted data
- 30-second bill logging instead of 5-minute manual entry
- **Premium feature** if not completed in MVP

#### Final Polish & Deployment
- UX refinement based on any early user feedback
- Security hardening
- Performance optimization
- Deploy to production (Vercel + Railway/Render)
- Documentation and user guide

---

## MVP Success Criteria

By Month 6, a user should be able to:

1. ✅ Register and log in securely
2. ✅ Set up their company profile
3. ✅ Log bills monthly (electricity, gas, water, transport)
4. ✅ View timeline of logged data with gap detection
5. ✅ Select a date range (e.g., "Q1 2026")
6. ✅ Generate a professional, client-ready sustainability report
7. ✅ Download PDF with QR verification
8. ✅ Send report to client via email

**Bonus (if time permits):**
- AI bill extraction from PDFs
- Multi-user access (owner + operations manager)

---

## Key Product Principles

1. **Continuous logging beats retroactive scrambling**
   - Make monthly bill logging feel like 2 minutes, not 20

2. **Transparent calculations build trust**
   - Show methodology, don't hide behind "proprietary algorithms"

3. **Client-ready output is non-negotiable**
   - PDFs must look professional enough to send to Fortune 500 clients

4. **Speed is a feature**
   - From login to report download in under 5 minutes for returning users

5. **Simplicity over completeness**
   - Track 4-5 core metrics well, not 50 metrics poorly

---

## Current Status

**Completed:** Authentication system  
**Next Up:** Component 2 - Company Profile Setup  
**Currently:** Updating roadmap to reflect bill logging strategy

---

## Learning in Public

Follow the build journey:
- [www.linkedin.com/in/chibuike-nwosu]

**Building in public.** Real problems. Real solutions. Real timeline.
